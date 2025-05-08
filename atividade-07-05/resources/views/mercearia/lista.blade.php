<x-layout>
	<x-slot:nome>Mercearia</x-slot:nome>
	@session('success')
        {{ session('success') }}
    @endsession
	@if (count($mercearias) > 0)
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Unidade</th>
                    <th>Quantidade</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($mercearias as $mercearia)
                    <tr>
                        <td>{{ $mercearia->id }}</td>
                        <td>{{ $mercearia->nome }}</td>
                        <td>{{ $mercearia->tipo }}</td>
                        <td>{{ $mercearia->unidade }}</td>
                        <td>{{ $mercearia->quantidade }}</td>
                        <td>{{ $mercearia->descricao }}</td>
                        <td>
                            <form action="/mercearias/editar" method="post">
                                @csrf
                                <input type="hidden" name="id" value="{{ $mercearia->id }}">
                                <button type="submit">Editar</button>
                            </form>
                            <form action="/mercearias/excluir" method="post">
                                @csrf
                                <input type="hidden" name="id" value="{{ $mercearia->id }}">
                                <button type="submit">Excluir</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <p>Nenhum produto encontrado.</p>
    @endif
</x-layout>
