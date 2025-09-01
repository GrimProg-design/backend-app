import express from "express";
import { usersController, homeController, userController } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", homeController);

router.get("/users", usersController);

router.post("/", userController)

export default router;