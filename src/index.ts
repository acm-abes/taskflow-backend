import express from "express";
import { indexRouter } from "./routes/index.js";
import cors from "cors";
import { env } from "./lib/env.js";

const app = express();
const port = env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  }),
);

app.use("/api/v1", indexRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
