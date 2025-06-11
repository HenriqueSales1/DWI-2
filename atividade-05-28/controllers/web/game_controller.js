import Game from "../../models/game.js";

async function createGame(req, res) {
  console.log(req.body);
  const game = await Game.create({
    titulo: req.body.titulo,
    num_conquistas: req.body.num_conquistas,
    descricao: req.body.descricao,
    ano_lancamento: req.body.ano_lancamento,
    DependenteId: req.body.dependenteId,
    ClienteId: req.body.clienteId,
  });
  res.render("alerts", {
    title: "Jogo Criado",
    message: "Jogo criado com sucesso!",
  });
}

async function listGames(req, res) {
  try {
    const list = await Game.findAll({ raw: true });
    res.render('games/games', { games: list });
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar jogos" });
    console.error("Erro ao listar jogos:", error);
  }
}

async function editGame(req, res) {
  const game = await Game.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.render("games/games", { action: "edit", game_editing: game.dataValues });
}

async function saveGame(req, res) {
  const game = await Game.findOne({
    where: {
      id: req.body.id,
    },
  });
  game.titulo = req.body.titulo;
  game.num_conquistas = req.body.num_conquistas;
  game.descricao = req.body.descricao;
  game.ano_lancamento = req.body.ano_lancamento;
  if (await game.save()) {
    res.render("alerts", {
      title: "Jogo Editado",
      message: "Jogo editado com sucesso!",
    });
  } else {
    res.status(500).json({ error: "Erro ao editar jogo" });
  }
}

async function deleteGame(req, res) {
  const game = await Game.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (game) {
    await game.destroy();
    res.render("alerts", {
      title: "Jogo Excluído",
      message: "Jogo excluído com sucesso!",
    });
  } else {
    res.status(404).json({ error: "Jogo não encontrado" });
  }
}

export { createGame, listGames, editGame, saveGame, deleteGame };
