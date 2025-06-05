import Game from "../models/game.js";

async function createGame(req, res) {
    const game = await Game.create({
        titulo: req.body.titulo,
        num_conquistas: req.body.num_conquistas,
        descricao: req.body.descricao,
        ano_lancamento: req.body.ano_lancamento,
        DependenteId: req.body.dependenteId,
        ClienteId: req.body.clienteId
    });
    res.json(game);
}

async function listGames(req, res) {
    try {
        const games = await Game.findAll();
        res.json(games);
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
    if (game) {
        game.titulo = req.body.titulo;
        game.num_conquistas = req.body.num_conquistas;
        game.descricao = req.body.descricao;
        game.ano_lancamento = req.body.ano_lancamento;
        if (await game.save()) {
            res.json(game);
        } else {
            res.status(500).json({ error: "Erro ao editar jogo" });
        }
    } else {
        res.status(404).json({ error: "Jogo não encontrado" });
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
        res.json({ message: "Jogo excluído com sucesso" });
    } else {
        res.status(404).json({ error: "Jogo não encontrado" });
    }
}

export { createGame, listGames, editGame, deleteGame };