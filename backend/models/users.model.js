import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    faqs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faq',
      },
    ],
  },
  {timestamps: true}
);

const User = mongoose.model('User', userSchema);
export default User;
