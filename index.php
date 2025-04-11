<?php
require_once __DIR__ . '/vendor/autoload.php';

use Bramus\Router\Router;
use App\Controle\ControleCliente;

header('Content-Type: application/json');

$router = new Router();
$controller = new ControleCliente();

$router->get('/clientes', fn() => $controller->listar());
$router->post('/clientes/cadastro', fn() => $controller->cadastrar());
$router->put('/clientes/(\d+)', fn($id) => $controller->alterar($id));
$router->delete('/clientes/(\d+)', fn($id) => $controller->deletar($id));

$router->run();

?>