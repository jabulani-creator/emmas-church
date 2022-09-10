import mongoose from "mongoose";

const LeaderSchema = new mongoose.Schema(
  {
    leaderName: {
      type: String,
      required: true,
    },
    leaderPosition: {
      type: String,
      required: true,
    },
    leaderPhone: {
      type: String,
      required: true,
    },
    leaderEmail: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    cloudinary_id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Leader", LeaderSchema);
