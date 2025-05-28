import { criarCliente, listarClientes } from "../controllers/cliente_controller.js";
import { Router } from "express";

const clienteRouter = Router();
clienteRouter.post("/", criarCliente);
clienteRouter.get("/", listarClientes);

export default clienteRouter;