import Cliente from "../../models/cliente.js";
import Film from "../../models/film.js";

async function criarCliente(req, res) {
  const cliente = await Cliente.create({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    endereco: req.body.endereco,
    data_nascimento: req.body.data_nascimento,
  });
  res.render("alerts", {
    title: "Cliente Criado",
    message: "Cliente criado com sucesso!",
  });
}

async function listarClientes(req, res) {
  const list = await Cliente.findAll({ include: Film, raw: true });
  res.render("clientes/clientes", { clientes: list });
}

async function editarCliente(req, res) {
  const cliente = await Cliente.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.render("clientes/clientes", {
    action: "edit",
    cliente_editing: cliente.dataValues,
  });
}

async function salvarCliente(req, res) {
  const cliente = await Cliente.findOne({
    where: {
      id: req.body.id,
    },
  });
  cliente.nome = req.body.nome;
  cliente.email = req.body.email;
  cliente.telefone = req.body.telefone;
  cliente.endereco = req.body.endereco;
  cliente.data_nascimento = req.body.data_nascimento;

  if (await cliente.save()) {
    res.render("alerts", {
      title: "Cliente Editado",
      message: "Cliente editado com sucesso!",
    });
  } else {
    res.status(500).json({ error: "Erro ao editar cliente" });
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
    res.render("alerts", {
      title: "Cliente Excluído",
      message: "Cliente excluído com sucesso!",
    });
  } else {
    res.status(404).json({ error: "Cliente não encontrado" });
  }
}

export {
  criarCliente,
  listarClientes,
  editarCliente,
  salvarCliente,
  excluirCliente,
};
