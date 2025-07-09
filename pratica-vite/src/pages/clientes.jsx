import { useEffect, useState } from "react";
import { criarCliente, listarClientes, editarCliente, excluirCliente } from "../data_access/clientes_access";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [id, setId] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    useEffect(() => {
        listarClientes().then(setClientes);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await editarCliente({ id, nome, email, telefone, endereco, data_nascimento: dataNascimento });
        } else {
            await criarCliente({ nome, email, telefone, endereco, data_nascimento: dataNascimento });
        }
        setNome("");
        setEmail("");
        setTelefone("");
        setEndereco("");
        setDataNascimento("");
        setId(null);
        listarClientes().then(setClientes);
    };

    const handleEdit = (cliente) => {
        setId(cliente.id);
        setNome(cliente.nome);
        setEmail(cliente.email);
        setTelefone(cliente.telefone);
        setEndereco(cliente.endereco);
        setDataNascimento(cliente.data_nascimento);
    };

    const handleDelete = async (clienteId) => {
        await excluirCliente(clienteId);
        listarClientes().then(setClientes);
    };

    return (
        <div>
            <h1>Gerenciamento de Clientes</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <button type="submit">{id ? "Editar Cliente" : "Criar Cliente"}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.data_nascimento}</td>
                            <td>
                                <button onClick={() => handleEdit(cliente)}>Editar</button>
                                <button onClick={() => handleDelete(cliente.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Clientes;