import Faq from '../models/faqs.model.js';
import User from '../models/users.model.js';
import authenticateToken from '../middlewares/userAuth.auth.js';
import express from 'express';
const faqRouter = express.Router();

// add-faq
faqRouter.post('/', authenticateToken, async (req, res) => {
  try {
    const {id} = req.headers;
    const user = await User.findById(id);
    const faq = new Faq({
      question: req.body.question,
      answer: req.body.answer,
      user: id,
    });
    const savedFaq = await faq.save();
    user.faqs.push(savedFaq._id);
    await user.save();
    return res.status(200).json({message: 'faq added successfully.'});
  } catch (err) {
    return res.status(500).json({message: `An error has occured.`});
  }
});

// update faq
faqRouter.put('/:id', authenticateToken, async (req, res) => {
  try {
    const {id} = req.params;
    await Faq.findByIdAndUpdate(id, {
      question: req.body.question,
      answer: req.body.answer,
    });

    return res.status(200).json({message: 'faq updated successfully!'});
  } catch (err) {
    return res.status(500).json({message: `An error has occured.`});
  }
});

// delete faq
faqRouter.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const {id} = req.params;
    const {id: userId} = req.headers;
    const user = await User.findByIdAndUpdate(
      userId,
      {$pull: {faqs: id}},
      {new: true}
    );

    await Faq.findByIdAndDelete(id);

    return res.status(200).json({message: 'Faq deleted successfully!'});
  } catch (err) {
    return res.status(500).json({message: `An error has occured.`});
  }
});

// get all faqs
faqRouter.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find().sort({createdAt: -1});
    return res.json({
      status: 'success',
      data: faqs,
    });
  } catch (error) {
    return res.status(500).json({message: `An error has occured.`});
  }
});

//get faq by id
faqRouter.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const faq = await Faq.findById(id);
    if (!faq) {
      return res.json({
        message: 'Faq is not found',
      });
    }
    return res.json({
      status: 'success',
      data: faq,
    });
  } catch (error) {
    return res.status(500).json({message: `An error has occured.`});
  }
});
export default faqRouter;
