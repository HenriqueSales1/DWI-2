import { raw } from "express";
import Film from "../../models/film.js";
// import Cliente from "../models/cliente.js";
// import Dependente from "../models/dependente.js";

async function criarFilme(req, res) {
  console.log(req.body);
  const film = await Film.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    ano: req.body.ano,
    DependenteId: req.body.dependenteId,
    ClienteId: req.body.clienteId
  });
  // res.json(film);
  res.render('alerts', {title: 'Filme Criado', message: 'Filme criado com sucesso!'});
}

async function listarFilmes(req, res) {
  try {
    const list = await Film.findAll(/*{include : [Cliente, Dependente]}*/ {raw: true});
    res.render('films/films', {films: list});
  } catch (error) {
    res.json({ error: "Erro ao listar filmes" });
    console.error("Erro ao listar filmes:", error);
  }
}

async function editarFilme(req, res) {
  const film = await Film.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.render('films/films', {action: 'edit', film_editing: film.dataValues});
}

async function salvarFilme(req, res) {
  const film = await Film.findOne({
    where: {
      id: req.body.id,
    },
  });
  film.titulo = req.body.titulo;
  film.descricao = req.body.descricao;
  film.ano = req.body.ano;
  if (await film.save()) {
    // res.json(film);
    res.render('alerts', {title: 'Filme Editado', message: 'Filme editado com sucesso!'});
  } else {
    res.status(500).json({ error: "Erro ao editar filme" });
  }
}

async function excluirFilme(req, res) {
  const filme = await Film.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (filme) {
    await filme.destroy();
    res.render('alerts', {title: 'Filme Excluído', message: 'Filme excluído com sucesso!'});
    // res.json({ message: "Filme excluído com sucesso" });
  } else {
    res.status(404).json({ error: "Filme não encontrado" });
  }
}

export { criarFilme, listarFilmes, editarFilme, salvarFilme, excluirFilme };
