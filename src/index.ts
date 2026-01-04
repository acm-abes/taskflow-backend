import express from "express";
import { authenticatedRoutes, publicRouter } from "./routes/index.js";
import { env } from "./lib/env.js";

const app = express();
const port = env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/public", publicRouter);
app.use("/api/v1/private", authenticatedRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
