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
        $cliente = new Cliente();
        $cliente->inserir($dados['nome'], $dados['profissao'], $dados['idade']);
        echo json_encode(["mensagem" => "Cliente cadastrado com sucesso"]);
    }

    public function listar()
    {
        $cliente = new Cliente();
        echo json_encode($cliente->listar());
    }

    public function alterar($id)
    {
        $dados = json_decode(file_get_contents("php://input"), true);
        $cliente = new Cliente();
        $cliente->alterar($dados['nome'], $dados['profissao'], $dados['idade']);
        echo json_encode(["mensagem" => "Cliente alterado com sucesso"]);
    }

    public function deletar($id)
    {
        $cliente = new Cliente();
        $cliente->deletar($id);
        echo json_encode(["mensagem" => "Cliente deletado com sucesso"]);
    }
}
