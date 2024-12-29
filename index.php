<style> 
<?php
include "public/assets/style.css" 
?> 
</style>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
     #input_text{
    background-color: black;
    color: white; 
    height: 40px;
}  </style>
</head>
    <div>Ajouter un commentaire :</div>
    <form method="post" action="">
        <input type="text" placeholder="Taper du texte ici" name="input_text" id="input_text"> 
        <button type="submit">Envoyer</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $input_value = htmlspecialchars($_POST['input_text']);
        if (empty($input_value)) {
            echo "<br>no value to send<br>";
        } else {
            echo "<br>Comment : " . $input_value . "<br>";
        }
    }
    ?>
</body>
</html>