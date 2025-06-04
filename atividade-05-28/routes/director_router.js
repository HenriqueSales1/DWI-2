import {
    createDirector,
    listDirectors,
    editDirector,
    deleteDirector
} from "../controllers/director_controller.js";
import { Router } from "express";

const directorRouter = Router();
directorRouter.post("/", createDirector);
directorRouter.get("/", listDirectors);
directorRouter.put("/", editDirector);
directorRouter.delete("/", deleteDirector);

export default directorRouter;