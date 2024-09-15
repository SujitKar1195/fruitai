import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/users.route.js';
import faqRouter from './routes/faqs.route.js';
import connectDB from './connections/connection.js';

const corsOptions = {
  origin: `${process.env.ORIGIN_URI}` || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
};

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/users', userRouter);
app.use('/faqs', faqRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`Server is running on port ${port}`);
});
