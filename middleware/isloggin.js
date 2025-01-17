import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; 

const isLoggedIn = (req, res, next) => {
  const token = req.header("authorization"); 
  // const token = authHeader && authHeader.split(" ")[1]; 

  console.log(token)
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); 
    req.user = decoded; 
    next(); 
  } catch (error) {
    res.status(403).json({ error: "Invalid token." });
  }
};

export default isLoggedIn;
