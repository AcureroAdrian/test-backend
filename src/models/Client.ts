import mongoose from "../db";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const Client = mongoose.model("User", clientSchema);

export default Client;
