<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MerceariaController;
use App\Http\Controllers\LoginController;

Route::get('/', function () {
    return view('index');
});

Route::get('/login', [LoginController::class, 'digitarLogin'])->name('login');
Route::post('/login', [LoginController::class,'login']);
Route::get('/logout', [LoginController::class,'logout']);

Route::get('/mercearias', [MerceariaController::class, 'exibirProdutos'])->middleware('auth');
Route::get('/mercearias/adicionar', [MerceariaController::class, 'adicionarProduto'])->middleware('auth');
Route::post('/mercearias/armazenar', [MerceariaController::class, 'armazenarProduto'])->middleware('auth');

Route::post('/mercearias/editar', [MerceariaController::class, 'editarProduto'])->middleware('auth');
Route::post('/mercearias/atualizar', [MerceariaController::class, 'atualizarProduto'])->middleware('auth');
Route::post('/mercearias/excluir', [MerceariaController::class, 'excluirProduto'])->middleware('auth');