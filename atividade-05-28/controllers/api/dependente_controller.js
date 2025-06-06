import Dependente from "../../models/dependente.js";
import Film from "../../models/film.js";
import Cliente from "../../models/cliente.js";

async function createDependente(req, res) {
  const dependente = await Dependente.create({
    nome: req.body.nome,
    email: req.body.email,
    ClienteId: req.body.clienteId,
  });
  res.json(dependente);
}

async function listDependentes(req, res) {
  const dependentes = await Dependente.findAll({include: [{ model: Cliente, include: [{model: Film}]}]});
  res.json(dependentes);
}

async function editDependente(req, res) {
  const dependente = await Dependente.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (dependente) {
    dependente.nome = req.body.nome;
    dependente.email = req.body.email;
    if (await dependente.save()) {
      res.json(dependente);
    } else {
      res.status(500).json({ error: "Erro ao editar dependente" });
    }
  } else {
    res.status(404).json({ error: "Dependente não encontrado" });
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
    res.json({ message: "Dependente excluído com sucesso" });
  } else {
    res.status(404).json({ error: "Dependente não encontrado" });
    return;
  }
}

export { createDependente, listDependentes, editDependente, deleteDependente };
