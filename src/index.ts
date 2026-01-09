import express from "express";
import { indexRouter } from "./routes/index";
import cors from "cors";
import { env } from "./lib/env";

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
