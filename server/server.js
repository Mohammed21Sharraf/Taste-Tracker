import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>app.listen(process.env.PORT, () => {
  console.log(`Server is working on Port: ${process.env.PORT}`);
}))


