import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/env.vars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });
  res.cookie("jwt-token", token, {
    maxAge: 15 * 24 * 24 * 24 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: ENV_VARS.NODE_ENV !== "developement",
  });

  return token;
};
