import {
  criarCliente,
  listarClientes,
  editarCliente,
  salvarCliente,
  excluirCliente,
} from "../../controllers/web/cliente_controller.js";
import { Router } from "express";

const cliente_web_router = Router();
cliente_web_router.get("/", listarClientes);
cliente_web_router.post("/create", criarCliente);
cliente_web_router.post("/edit", editarCliente);
cliente_web_router.post("/save", salvarCliente);
cliente_web_router.post("/delete", excluirCliente);

export default cliente_web_router;
