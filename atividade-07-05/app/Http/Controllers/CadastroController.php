<?php

namespace App\Http\Controllers;

// use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class CadastroController extends Controller
{
    public function cadastrar()
    {
        return view('autenticacao.cadastro');
    }

    public function atualizaCadastro(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
        return redirect('/login')->with('success', 'Cadastro realizado com sucesso! Faça login para continuar.');
    }
}
