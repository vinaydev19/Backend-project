import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

connectDB();

dotenv.config({
  path: "./env",
});

/*
import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error: app", (error) => {
      console.log("error: app is not able to communicate to db", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`APP is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR ON DB CONNECT", error);
    throw error;
  }
})();
*/
