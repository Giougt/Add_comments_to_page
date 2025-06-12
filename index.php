<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="public/assets/style.css">
</head>
<body> 
    <div id="game_square_stat">
        <div class="cube" id="answer1"></div>
        <div class="cube" id="answer2"></div>
        <div class="cube" id="answer3"></div>
        <div class="cube" id="answer4"></div>
        <div class="cube" id="answer5"></div>
        <div class="cube" id="answer6"></div>
        <div class="cube" id="answer7"></div>
        <div class="cube" id="answer8"></div>
    </div>
    <div id="game_progress">
        <div id="field_user"> 
            <label for="field_answer"> Enter a answer</label>
            <input type="text" id="field_answer">
            <button id="response_button" type="button"> Valid </button>
        </div>
        <!-- img for game -->
        <img id="plane" src="plane2.png" alt="Description">
        <div id="progress_bar">
            <div id="color_progress_bar"></div>
        </div>
    </div>
</body>
<script src="public/assets/script.js"></script>
</html>