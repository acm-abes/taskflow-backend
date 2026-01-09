import type { RequestHandler } from "express";
import { authService } from "../services/auth.service";

export const signIn: RequestHandler = async (req, res) => {
  await authService.signIn(req.body);
  res.status(501).json({ message: "Route sign-in not implemented" });
};

export const signUp: RequestHandler = async (req, res) => {
  await authService.signUp(req.body);
  res.status(501).json({ message: "Route sign-up not implemented" });
};

export const signOut: RequestHandler = async (req, res) => {
  await authService.signOut(req.body);
  res.status(501).json({ message: "Route sign-out not implemented" });
};

export const refreshToken: RequestHandler = async (req, res) => {
  await authService.refreshToken(req.body);
  res.status(501).json({ message: "Route refresh-token not implemented" });
};

export const getCurrentUser: RequestHandler = async (req, res) => {
  await authService.getCurrentUser(req.body);
  res.status(501).json({ message: "Route get-current-user not implemented" });
};
