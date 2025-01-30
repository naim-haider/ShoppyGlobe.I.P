import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import dotenv from "dotenv";

dotenv.config();

export const auth = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  // console.log(token);

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user)
      return res.status(401).json({ error: "Unauthorized: User not found" });

    req.user = user;
    next(); // calling next middleware.
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: "Access denied: Admins only" });
  }
};
