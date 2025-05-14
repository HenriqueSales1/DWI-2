<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivroController;
use App\Http\Controllers\LoginController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

    return view('index');

});
Route::get('/login', [LoginController::class, 'digitarLogin'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

Route::get('/livros', [LivroController::class, 'exibirLivros'])->middleware('auth');
Route::get('/livros/criar', [LivroController::class, 'criarLivro'])->middleware('auth');
Route::post('/livros/armazenar', [LivroController::class, 'armazenarLivro'])->middleware('auth');

Route::post('/livros/editar', [LivroController::class, 'editarLivro'])->middleware('auth');
Route::post('/livros/atualizar', [LivroController::class, 'atualizarLivro'])->middleware('auth');
Route::post('/livros/excluir', [LivroController::class, 'deletarLivro'])->middleware('auth');