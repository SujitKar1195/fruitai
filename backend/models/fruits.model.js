import mongoose from 'mongoose';
// manual adding fruit section model
const fruitSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 10,
    },
  },
  {timestamps: true}
);

const Fruit = mongoose.model('Fruit', fruitSchema);
export default Fruit;
