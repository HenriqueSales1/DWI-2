<?php
namespace App\Conexao;

use PDO;

class Conexao
{
    public static function conectar()
    {
        return new PDO('mysql:host=localhost;dbname=dweb1', 'root', 'root');
    }
}
