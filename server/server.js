import app from "./app.js";
import mongoose from "mongoose";
// import { connectDatabase } from "./config/database.js";

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`Server is working on Port: ${process.env.PORT}`);
    })
  );

// connectDatabase();

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });
