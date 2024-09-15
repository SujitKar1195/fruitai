import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.model.js';
import authenticateToken from '../middlewares/userAuth.auth.js';

const userRouter = express.Router();

const secretKey = process.env.SECRET_KEY;

// signup
userRouter.post('/signup', async (req, res) => {
  try {
    const {username, password} = req.body;

    // if username length more than 3
    if (username.length < 4) {
      return res
        .status(400)
        .json({message: 'Username must be at least 4 characters.'});
    }

    // check username already exists or not
    const usernameExists = await User.findOne({username: username});
    if (usernameExists) {
      return res.status(400).json({message: 'Username already exists.'});
    }
    // check password length more than 6
    if (password.length < 6) {
      return res
        .status(400)
        .json({message: 'Password must be at least 6 characters.'});
    }

    // hashing with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });

    // save new user
    await newUser.save();

    // successful response
    return res.status(200).json({message: 'User created successfully.'});
  } catch (err) {
    return res.status(500).json({message: `Internal server error`});
  }
});

// login
userRouter.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body;

    // check username exists or not
    const user = await User.findOne({username: username});
    if (!user) {
      return res.status(400).json({message: 'Username does not exist.'});
    }

    // check password
    bcrypt.compare(password, user.password, (err, data) => {
      if (data) {
        const authClaims = [
          {
            name: user.username,
          },
          {
            role: user.role,
          },
        ];
        const token = jwt.sign({authClaims}, secretKey, {expiresIn: '30d'});

        return res
          .status(200)
          .json({id: user._id, role: user.role, token: token});
      } else {
        return res.status(400).json({message: 'Password is not valid'});
      }
    });
  } catch (err) {
    return res.status(500).json({message: `Internal server error`});
  }
});

// get-user-info
userRouter.get('/', authenticateToken, async (req, res) => {
  try {
    const {id} = req.headers;
    const data = await User.findById(id).select('-password');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({message: `Internal server error`});
  }
});

export default userRouter;
