<x-layout>
	<x-slot:titulo>Cadastro</x-slot:titulo>
	<div>
		<p>
			@error('email')
                {{ $message }}
            @enderror
		</p>
	</div>
	<form action="/cadastro" method="post">
		@csrf
		<div>
			<label for="name">Nome</label><br>
			<input type="text" name="name" id="name" placeholder="Nome" value="{{ old('name') }}"><br>
		</div>
		<div>
			<label for="email">Email</label><br>
			<input type="email" name="email" id="email" placeholder="Email" value="{{ old('email') }}"><br>
		</div>
		<div>
			<label for="password">Senha</label><br>
			<input type="password" name="password" id="password" placeholder="Senha" required><br>
		</div>
		<div>
			<label for="confirm_password">Confirmar a senha</label><br>
			<input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a senha">
			@error('password')
                <p>{{ $message }}</p>
            @enderror
		</div>
		<button type="submit">Cadastrar</button>
	</form>
</x-layout>

