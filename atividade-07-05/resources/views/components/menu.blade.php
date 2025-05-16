<nav>
	<div id="mercearia-menu">
		<h2>Mercearia</h2>
		<ul>
			<li><a href="/mercearias">Listar produtos</a></li>
			<li><a href="/mercearias/adicionar">Adicionar produto</a></li>
		</ul>
	</div>
	<div id="mercearia-login">
		@auth
            <h2>
                Olá,
                {{ Auth::user()->name }}
            </h2>
            <a href="/logout">Logout</a>
        @else
            <h2>
                Olá, visitante
            </h2>
            <a href="/login">Login</a>
            <a href="/cadastro">Cadastrar</a>
        @endauth
	</div>
</nav>

