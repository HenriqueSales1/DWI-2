import { criarCliente, listarClientes, editarCliente, excluirCliente } from "../../controllers/api/clienteController.js";
import { Router } from "express";

const clienteRouter = Router();
clienteRouter.post("/create", criarCliente);
clienteRouter.get("/", listarClientes);
clienteRouter.post("/edit", editarCliente);
clienteRouter.post("/delete", excluirCliente);

export default clienteRouter;