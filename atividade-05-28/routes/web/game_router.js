import {
    createGame,
    listGames,
    editGame,
    saveGame,
    deleteGame,
} from "../../controllers/web/game_controller.js";
import { Router } from "express";

const game_web_router = Router();
game_web_router.get("/", listGames);
game_web_router.post("/create", createGame);
game_web_router.post("/edit", editGame);
game_web_router.post("/save", saveGame);
game_web_router.post("/delete", deleteGame);

export default game_web_router;