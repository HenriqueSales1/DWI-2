import Cliente from '../models/cliente.js';

async function criarCliente(req, res) {
    const cliente = await Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    });
    res.json(cliente);
}

async function listarClientes(req, res) {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

export {criarCliente, listarClientes};