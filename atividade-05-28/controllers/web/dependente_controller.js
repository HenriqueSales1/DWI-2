import Dependente from "../../models/dependente.js";
import Film from "../../models/film.js";
import Cliente from "../../models/cliente.js";

async function createDependente(req, res) {
  const dependente = await Dependente.create({
    nome: req.body.nome,
    email: req.body.email,
    ClienteId: req.body.clienteId,
  });
  res.render("alerts", {
    title: "Dependente Criado",
    message: "Dependente criado com sucesso!",
  });
}

async function listDependentes(req, res) {
  const list = await Dependente.findAll({
    include: [{ model: Cliente, include: [{ model: Film }] }],
    raw: true,
  });
  res.render("dependentes/dependentes", { dependentes: list });
}

async function editDependente(req, res) {
  const dependente = await Dependente.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.render("dependentes/dependentes", {
    action: "edit",
    dependente_editing: dependente.dataValues,
  });
}

async function saveDependente(req, res) {
  const dependente = await Dependente.findOne({
    where: {
      id: req.body.id,
    },
  });
  dependente.nome = req.body.nome;
  dependente.email = req.body.email;
  dependente.ClienteId = req.body.clienteId;

  if (await dependente.save()) {
    res.render("alerts", {
      title: "Dependente Editado",
      message: "Dependente editado com sucesso!",
    });
  } else {
    res.status(500).json({ error: "Erro ao editar dependente" });
  }
}

async function deleteDependente(req, res) {
  const dependente = await Dependente.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (dependente) {
    await Dependente.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.render("alerts", {
      title: "Dependente Excluído",
      message: "Dependente excluído com sucesso!",
    });
  } else {
    res.status(404).json({ error: "Dependente não encontrado" });
    return;
  }
}

export {
  createDependente,
  listDependentes,
  editDependente,
  saveDependente,
  deleteDependente,
};
