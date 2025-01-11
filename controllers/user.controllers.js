import userSchema from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { fullname, email, password,contact,address } = req.body;

    const user = await userSchema.findOne({ email });
    if (user) {
      return res.status(404).json({ status: "user is already create" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createuser = await userSchema.create({
      fullname,
      email,
      password: hash,
      contact,
      address,
    });
    const token = await jwt.sign({ email: createuser.email }, "shhhhsshhh");
    return res
      .status(200)
      .cookie("token", token)
      .json({ status: "create user", token: token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userSchema.findOne({ email });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = await jwt.sign({ email: user.email }, "shhhhsshhh");
      console.log(req.cookie.token);
      return res
        .status(200)
        .cookie("token", token)
        .json({ result: "login success", token: token });
    }
    return res.status(300).json({ result: "password is increct" });
  }
  return res.status(404).json({ result: "please register first" });
};

const logout = (req, res) => {
  try {
    console.log(req.cookie);
    return res.status(200).cookie("token", "").json({
      status: "logout success",
    });
  } catch (error) {
    console.log(error);
  }
};
export { register, login, logout };
