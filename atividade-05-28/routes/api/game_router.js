import {
    createGame,
    listGames,
    editGame,
    deleteGame
} from "../../controllers/api/game_controller.js";
import { Router } from "express";

const gameRouter = Router();
gameRouter.post("/", createGame);
gameRouter.get("/", listGames);
gameRouter.put("/", editGame);
gameRouter.delete("/", deleteGame);

export default gameRouter;