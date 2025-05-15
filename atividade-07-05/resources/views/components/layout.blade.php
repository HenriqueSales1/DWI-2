<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Mercearia Laravel</title>
</head>
<body>
    <header>
        <h1>Mercearia Laravel</h1>
        @include ('components.menu')
        <h3>{{ $titulo }}</h3>
    </header>
    <main>
        {{ $slot }}
    </main>
    <footer>
        <p>Prática de Laravel &copy; Henrique Sales 2025</p>
    </footer>
</body>
</html>