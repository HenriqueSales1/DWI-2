import Film from "../models/film.js";
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
  res.json(film);
}

async function listarFilmes(req, res) {
  try {
    const filmes = await Film.findAll(/* {include : [Cliente, Dependente]} */);
    res.json(filmes);
  } catch (error) {
    res.json({ error: "Erro ao listar filmes" });
    console.error("Erro ao listar filmes:", error);
  }
  
}

async function editarFilme(req, res) {
  const filme = await Film.findOne({
    where: {
      id: req.body.id,
    },
  });
  filme.titulo = req.body.titulo;
  filme.descricao = req.body.descricao;
  filme.ano = req.body.ano;
  if (await filme.save()) {
    res.json(filme);
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
    res.json({ message: "Filme excluído com sucesso" });
  } else {
    res.status(404).json({ error: "Filme não encontrado" });
  }
}

export { criarFilme, listarFilmes, editarFilme, excluirFilme };
