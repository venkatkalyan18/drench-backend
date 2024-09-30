import mongoose, { model } from "mongoose";

const DrenchSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1,
  },
  drenchCount: {
    type: Number,
    default: 0,
  },
  leastMovesTaken: {
    type: Number,
    default: null,
  },
  leastMovesTakenBy: {
    type: String,
    default: null,
  },
});

const Drench = model("Drench", DrenchSchema);
export default Drench;
