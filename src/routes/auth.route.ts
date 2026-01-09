import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const authRouter = Router();

authRouter.post("/sign-in", authController.signIn);
authRouter.post("/sign-up", authController.signUp);
authRouter.post("/refresh-token", authController.refreshToken);

authRouter.post("/sign-out", authMiddleware, authController.signOut);
authRouter.get("/user", authMiddleware, authController.getCurrentUser);

export { authRouter };
