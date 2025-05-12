<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MerceariaController;

Route::get('/', function () {
    return view('index');
});

Route::get('/mercearias', [MerceariaController::class, 'exibirProdutos']);
Route::get('/mercearias/adicionar', [MerceariaController::class, 'adicionarProduto']);
Route::post('/mercearias/armazenar', [MerceariaController::class, 'armazenarProduto']);
Route::post('/mercearias/editar', [MerceariaController::class, 'editarProduto']);
Route::post('/mercearias/atualizar', [MerceariaController::class, 'atualizarProduto']);
Route::post('/mercearias/excluir', [MerceariaController::class, 'excluirProduto']);