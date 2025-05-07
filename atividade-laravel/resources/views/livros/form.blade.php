<x-layout>
    <x-slot:titulo>Novo livro</x-slot:titulo>
    <form method="POST" action="/livros/{{ isset($livro) ? 'atualizar' : 'armazenar' }}">
        @csrf
        <input type="hidden" name="id" value="{{ $livro->id ?? ''}}">
        <div>
            <label for="titulo">Título:</label><br>
            <input type="text" id="titulo" name="titulo" value="{{ $livro->titulo ?? '' }}" required>
        </div>
        <div>
            <label for="autor">Autor:</label><br>
            <input type="text" id="autor" name="autor" value="{{ $livro->autor ?? '' }}" required>
        </div>
        <div>
            <label for="ano_publicacao">Ano de publicação:</label><br>
            <input type="number" id="ano_publicacao" name="ano_publicacao" value="{{ $livro->ano_publicacao ?? '' }}"
                required>
        </div>
        <div>
            <label for="descricao">Descrição:</label><br>
            <textarea id="descricao" name="descricao" required>{{ $livro->descricao ?? '' }}</textarea>
        </div>
        <button type="submit">Criar</button>
    </form>
</x-layout>