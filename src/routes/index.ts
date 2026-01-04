import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const publicRouter = Router();
const authenticatedRoutes = Router();

// Authenticated Routes
authenticatedRoutes.use(authMiddleware);

// Public Routes
publicRouter.get("/health", (_req, res) => {
  res.json({ status: "Public API is running" });
});

export { publicRouter, authenticatedRoutes };
