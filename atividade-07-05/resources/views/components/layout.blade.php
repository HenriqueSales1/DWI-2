<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mercearia Laravel</title>
</head>
<body>
    <header>
        <h1>Mercearia Laravel</h1>
        @include ('components.menu')
        <h3>{{ $nome }}</h3>
    </header>
    <main>
        {{ $slot }}
    </main>
    <footer></footer>
        <p>Prática de Laravel &copy; Henrique Sales 2025</p>
    </footer>
</body>
</html>