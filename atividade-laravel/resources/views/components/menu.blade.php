<nav>
    <div>
        <h2>Livros</h2>
        <ul>
            <li><a href="/livros">Lista</a></li>
            <li><a href="/livros/criar">Novo</a></li>
        </ul>
    </div>
    <div>
        @auth
        <h2>Olá, {{ Auth::user()->name }}</h2>
        <a href="/logout">Logout</a>
        @else
        <h2>Olá, visitante</h2>
        <a href="/login">Login</a>
        @endauth
    </div>
</nav>