import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import app from './app.js'
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error on app index.js", (error) => {
      console.log(`server is not running index.js ${error}`);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`mongo db connection failed !! index.js : ${error}`);
  });
