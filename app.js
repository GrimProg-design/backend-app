import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import usersRouter from "./routes/usersRouter.js";
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);
app.use("/users", usersRouter);
app.use("/", usersRouter)

app.listen(PORT, () => {
  console.log(`servet starts on. http://localhost:${PORT}`);
});
