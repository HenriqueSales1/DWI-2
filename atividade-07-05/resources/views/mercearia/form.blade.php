<x-layout>
	<x-slot:nome>Novo produto</x-slot:nome>
	<form method="POST" action="/mercearias/{{ isset($mercearia) ? 'atualizar' : 'armazenar' }}">
        
		@csrf

		<input type="hidden" name="id" value="{{ $mercearia->id ?? ''}}">

		<div>
			<label for="nome">Nome:</label><br>
			<input type="text" id="nome" name="nome" value="{{ $mercearia->nome ?? '' }}" required><br>
		</div>

		<div>
			<label for="tipo">Tipo:</label><br>
			<input type="text" id="tipo" name="tipo" value="{{ $mercearia->tipo ?? '' }}" required><br>
		</div>

		<div>
			<label for="unidade">Unidade:</label>
			<input type="text" id="unidade" name="unidade" value="{{ $mercearia->unidade ?? '' }}" required><br>
		</div>

		<div>
			<label for="quantidade">Quantidade:</label>
			<input type="number" id="quantidade" name="quantidade" value="{{ $mercearia->quantidade ?? '' }}" required><br>
		</div>

		<div>
			<label for="descricao">Descrição:</label>
			<textarea id="descricao" name="descricao" value="{{ $mercearia->descricao ?? '' }}" required></textarea><br>
		</div>

		<button type="submit">Criar</button>
	</form>
</x-layout>

