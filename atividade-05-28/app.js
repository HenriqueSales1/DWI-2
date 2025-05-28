import express from 'express';
import filmRouter from './routes/film_router.js';
import clienteRouter from './routes/cliente_router.js';

const app = express();
app.use(express.json());
app.use('/films', filmRouter);
app.use('/clientes', clienteRouter);
app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});