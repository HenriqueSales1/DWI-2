import { API_PATH } from "../constants/constants.jsx";

async function criarCliente(cliente) {
  const response = await fetch(`${API_PATH}/clientes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
  return response.json();
}

async function listarClientes() {
  const response = await fetch(`${API_PATH}/clientes`);
  return response.json();
}

async function editarCliente(cliente) {
  const response = await fetch(`${API_PATH}/clientes/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
  return response.json();
}

async function excluirCliente(clienteId) {
  const response = await fetch(`${API_PATH}/clientes/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: clienteId }),
  });
  return response.json();
}

export { criarCliente, listarClientes, editarCliente, excluirCliente };