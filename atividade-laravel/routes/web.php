<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivroController;


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
Route::get('/livros', [LivroController::class, 'exibirLivros']);
Route::get('/livros/criar', [LivroController::class, 'criarLivro']);
Route::post('/livros/criar', [LivroController::class, 'armazenarLivro']);
