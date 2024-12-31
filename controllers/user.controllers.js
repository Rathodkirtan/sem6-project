import userSchema from "../model/user.model.js";

const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    console.log(email)
    const user = await userSchema.findOne({ email });
    if (user) {
      res.redirect("http://localhost:5173/login");
      res.setHeader("email",email);
      res.status(404).json({ status: "user is already create" });
    }

    await userSchema.create({
      fullname,
      email,
      password,
    });
    res.redirect("http://localhost:5173/login");
    res.status(200).json({ status: "create user" });
  } catch (error) {
    console.log(error);
  }
};

export default register;
