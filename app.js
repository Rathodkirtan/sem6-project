import express from "express";
import dotenv from "dotenv";
import dbconnection from "./db/user.db.js";
import router from "./router/user.router.js";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const PORT = process.env.PORT || 3000;

dbconnection();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is start ${PORT}`);
});
