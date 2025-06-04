import {
  criarCliente,
  listarClientes,
  editarCliente,
  excluirCliente,
} from "../controllers/cliente_controller.js";
import { Router } from "express";

const clienteRouter = Router();
clienteRouter.post("/", criarCliente);
clienteRouter.get("/", listarClientes);
clienteRouter.put("/", editarCliente);
clienteRouter.delete("/", excluirCliente);

export default clienteRouter;
