import Cliente from "../models/cliente.js";

async function criarCliente(req, res) {
  const cliente = await Cliente.create({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
  });
  res.json(cliente);
}

async function listarClientes(req, res) {
  const clientes = await Cliente.findAll();
  res.json(clientes);
}

async function editarCliente(req, res) {
  const cliente = await Cliente.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (cliente) {
    cliente.nome = req.body.nome;
    cliente.email = req.body.email;
    cliente.telefone = req.body.telefone;
    if (await cliente.save()) {
      res.json(cliente);
    } else {
      res.status(500).json({ error: "Erro ao editar cliente" });
    }
  } else {
    res.status(404).json({ error: "Cliente não encontrado" });
  }
}

async function excluirCliente(req, res) {
  const cliente = await Cliente.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (cliente) {
    await cliente.destroy();
    res.json({ message: "Cliente excluído com sucesso" });
  } else {
    res.status(404).json({ error: "Cliente não encontrado" });
  }
}

export { criarCliente, listarClientes, editarCliente, excluirCliente };
