<?php
namespace App\Modelo;
use App\Conexao\Conexao;
use PDO;

class Cliente
{

    public function listar()
    {
        $db = Conexao::conectar();
        return $db->query("SELECT * FROM clientes")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function inserir($nome, $profissao, $idade)
    {
        $db = Conexao::conectar();
        $stmt = $db->prepare("INSERT INTO clientes (nome, profissao, idade) VALUES (?, ?, ?)");
        return $stmt->execute([$nome, $profissao, $idade]);
    }

    public function alterar($nome, $profissao, $idade)
    {
        $db = Conexao::conectar();
        $stmt = $db->prepare("UPDATE clientes SET nome=?, profissao=?, idade=? WHERE id=?");
        return $stmt->execute([$nome, $profissao, $idade]);
    }

    public function deletar($id)
    {
        $db = Conexao::conectar();
        $stmt = $db->prepare("DELETE FROM clientes WHERE id=?");
        return $stmt->execute([$id]);
    }
}