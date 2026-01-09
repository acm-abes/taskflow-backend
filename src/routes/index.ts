import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const publicRouter = Router();
const authenticatedRoutes = Router();
const indexRouter = Router();

authenticatedRoutes.use(authMiddleware);

publicRouter.get("/health", (_req, res) => {
  res.json({ status: "Public API is running" });
});

indexRouter.use(publicRouter);
indexRouter.use(authenticatedRoutes);

export { publicRouter, authenticatedRoutes, indexRouter };
