import Film from "../models/film.js";

async function criarFilme(req, res){
    const film = await Film.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        ano: req.body.ano
    });
    res.json(film);
}

async function listarFilmes(req, res){
    const filmes = await Film.findAll();
    res.json(filmes);
}

async function editarFilme(req, res){
    const filme = await Film.findOne({
        where: {
            id: req.body.id
        }
    });
    filme.titulo = req.body.titulo;
    filme.descricao = req.body.descricao;
    filme.ano = req.body.ano;
    if(await filme.save()){
        res.json(filme);
    } else {
        res.status(500).json({error: "Erro ao editar filme"});
    }
}

async function excluirFilme(req, res){
    const filme = await Film.findOne({
        where: {
            id: req.body.id
        }
    });
    if(filme){
        await filme.destroy();
        res.json({message: "Filme excluído com sucesso"});
    } else {
        res.status(404).json({error: "Filme não encontrado"});
    }
}

export {criarFilme, listarFilmes, editarFilme, excluirFilme};