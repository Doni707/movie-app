import { Router } from "express";
import getAllMovieController from "../controllers/getAllMovieController.js";
import actionMovieController from "../controllers/actionMovieController.js";
import addMovieController from "../controllers/addMovieController.js";
import deleteMovieController from "../controllers/deleteMovieController.js";

const router = Router()

router.get("/all", getAllMovieController)
router.post("/add", addMovieController)
router.put("/liked/:id", actionMovieController)
router.put("/watched/:id", actionMovieController)
router.delete("/:id", deleteMovieController)

export default router