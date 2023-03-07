require("dotenv").config();
const { DB_USER, DB_PASSWORD } = process.env;

import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qriwlne.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err: any) => console.log(err));

export default mongoose;
