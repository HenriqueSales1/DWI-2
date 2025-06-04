import Director from "../models/director.js";
import Film from "../models/film.js";

async function createDirector(req, res) {
  const director = await Director.create({
    name: req.body.name,
    country: req.body.country,
  });
  res.json(director);
}

async function listDirectors(req, res) {
  const directors = await Director.findAll({include: Film});
  res.json(directors);
}

async function editDirector(req, res) {
  const director = await Director.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (director) {
    director.name = req.body.name;
    director.country = req.body.country;
    if (await director.save()) {
      res.json(director);
    } else {
      res.status(500).json({ error: "Erro ao editar director" });
    }
  } else {
    res.status(404).json({ error: "Director não encontrado" });
  }
}

async function deleteDirector(req, res) {
  const director = await Director.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (director) {
    await Director.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: "Director excluído com sucesso" });
  } else {
    res.status(404).json({ error: "Director não encontrado" });
    return;
  }
}

export { createDirector, listDirectors, editDirector, deleteDirector };
