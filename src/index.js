import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listing on prot ${port}`);
    });
  })
  .catch((err) => {
    console.log(`fail to connect to database err`, err);
  });
