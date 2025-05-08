<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mercearia;

class MerceariaController extends Controller {
    public function exibirProdutos() {
        $mercearias = Mercearia::all();
        return view('mercearia.lista', compact('mercearias'));
    }

    public function adicionarProduto() {
        return view('mercearia.form');
    }

    public function armazenarProduto(Request $request){
        Mercearia::create(
            [
                'nome' => $request->input('nome'),
                'tipo' => $request->input('tipo'),
                'unidade' => $request->input('unidade'),
                'quantidade' => $request->input('quantidade'),
                'descricao' => $request->input('descricao'),
            ]
            );
        return redirect('/mercearias')->with('success', 'Produto adicionado com sucesso!');
    }

    public function editarProduto(Request $request){
        $id = $request->input('id');
        $mercearia = Mercearia::findOrFail($id);
        return view('mercearia.form', ['mercearia' => $mercearia]);
    }

    public function atualizarProduto(Request $request){
        $id = $request->input('id');
        $mercearia = Mercearia::findOrFail($id);
        $mercearia->update(
            [
                'nome' => $request->input('nome'),
                'tipo' => $request->input('tipo'),
                'unidade' => $request->input('unidade'),
                'quantidade' => $request->input('quantidade'),
                'descricao' => $request->input('descricao'),
            ]
            );
        return redirect('/mercearias')->with('success', 'Produto atualizado com sucesso!');
    }

    public function excluirProduto(Request $request){
        $id = $request->input('id');
        $mercearia = Mercearia::findOrFail($id);
        $mercearia->delete();
        return redirect('/mercearias')->with('success', 'Produto excluído com sucesso!');
    }
}
