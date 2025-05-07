<x-layout>
    <x-slot:titulo>Livros</x-slot:titulo>
    @session('success')
        {{ session('success') }}
    @endsession
    @if (count($livros) > 0)
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Ano</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($livros as $livro)
                    <tr>
                        <td>{{ $livro->id }}</td>
                        <td>{{ $livro->titulo }}</td>
                        <td>{{ $livro->autor }}</td>
                        <td>{{ $livro->ano_publicacao}}</td>
                        <td>{{ $livro->descricao }}</td>
                        <td>
                            <form action="/livros/editar" method="POST">
                                @csrf
                                <input type="hidden" name="id" value="{{ $livro->id }}">
                                <button type="submit">Editar</button>
                            </form>
                            <form action="/livros/excluir" method="POST">
                                @csrf
                                <input type="hidden" name="id" value="{{ $livro->id }}">
                                <button type="submit">Excluir</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <p>Nenhum livro encontrado.</p>
    @endif
</x-layout>