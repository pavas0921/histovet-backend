import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (data) => {
  try {
    const { _id } = data;

    const payload = {
      veterinarianId: _id,
    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: "5h" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
