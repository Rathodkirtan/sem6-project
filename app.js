import express from "express";
import dotenv from "dotenv";
import dbconnection from "./db/user.db.js";
import router from "./router/user.router.js";
import francise from "./router/francise.router.js";
import contact from "./router/contect.router.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const PORT = process.env.PORT || 3000;

dbconnection();

app.use("/", router);
app.use("/api", francise);
app.use("/api", contact);

app.listen(PORT, () => {
  console.log(`server is start ${PORT}`);
});
