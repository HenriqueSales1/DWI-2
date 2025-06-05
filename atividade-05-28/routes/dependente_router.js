import {
    createDependente,
    listDependentes,
    editDependente,
    deleteDependente
} from "../controllers/dependente_controller.js";
import { Router } from "express";

const dependenteRouter = Router();
dependenteRouter.post("/", createDependente);
dependenteRouter.get("/", listDependentes);
dependenteRouter.put("/", editDependente);
dependenteRouter.delete("/", deleteDependente);

export default dependenteRouter;