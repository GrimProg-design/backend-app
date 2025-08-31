import express from "express";
import { usersController, homeController } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", homeController);

router.get("/users", usersController)

export default router;