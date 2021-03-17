<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>SuperYachts Test</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

<noscript>
    <strong>
        We're sorry but we rely on Javascript to bring you the best experience. Please ensure you enable it.
    </strong>
</noscript>

<div id="app">
    <router-view></router-view>
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
