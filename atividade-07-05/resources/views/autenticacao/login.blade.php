<x-layout>
	<x-slot:titulo>
		Login
	</x-slot:titulo>
	<div>
		<p>
			@error('email')
                {{ $message }}
            @enderror
		</p>
	</div>
	<form action="/login" method="POST">
		@csrf
		<div>
			<label for="email">Email</label><br>
			<input type="email" name="email" id="email" placeholder="Email" value="{{ old('email') }}">
		</div>
		<div>
			<label for="password">Senha</label><br>
			<input type="password" name="password" id="password" placeholder="Senha">
		</div>
        <button type="submit">Entrar</button>
	</form>
</x-layout>

