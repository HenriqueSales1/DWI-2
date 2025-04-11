<?php
namespace App\Controle;

use App\Modelo\Cliente;

class ControleCliente
{
    public function __construct()
    {
        echo "ControleCliente carregado!";
    }

    public function cadastrar()
    {
        $dados = json_decode(file_get_contents("php://input"), true);
        $usuario = new Cliente();
        $usuario->inserir($dados['nome'], $dados['descricao'], $dados['idade']);
        echo json_encode(["mensagem" => "Usuário cadastrado com sucesso"]);
    }

    public function listar()
    {
        $usuario = new Cliente();
        echo json_encode($usuario->listar());
    }

    public function alterar($id)
    {
        $dados = json_decode(file_get_contents("php://input"), true);
        $usuario = new Cliente();
        $usuario->alterar($dados['nome'], $dados['descricao'], $dados['idade']);
        echo json_encode(["mensagem" => "Usuário alterado com sucesso"]);
    }

    public function deletar($id)
    {
        $usuario = new Cliente();
        $usuario->deletar($id);
        echo json_encode(["mensagem" => "Usuário deletado com sucesso"]);
    }
}
