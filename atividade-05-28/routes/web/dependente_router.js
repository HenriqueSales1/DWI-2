import {
    createDependente,
    listDependentes,
    editDependente,
    saveDependente,
    deleteDependente,
} from "../../controllers/web/dependente_controller.js";
import { Router } from "express";

const dependente_web_router = Router();
dependente_web_router.get("/", listDependentes);
dependente_web_router.post("/create", createDependente);
dependente_web_router.post("/edit", editDependente);
dependente_web_router.post("/save", saveDependente);
dependente_web_router.post("/delete", deleteDependente);

export default dependente_web_router;