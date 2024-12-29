<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    .style1{
    background-color: black;
    color: white; 
    height: 40px;
    } 
    #response{  
        color: #3498db;
        background-color: #f0f0f0; 
        width: fit-content;
    }
    </style>
</head>
<body>  
    <div>Add a comment :</div>
    <form method="post" action="">
        <input type="text" placeholder="Enter text here" class="style1" name="input_text" id="input_text"> 
        <button type="submit">Send</button>
    </form>
<!-- form for Calculator -->
    <div> Calculator </div>
    <form method="post" action="">
        <input type="text" placeholder="Enter operation here" class="style1" name="input_calcul" id="input_calcul"> 
        <button type="submit">Send</button>
    </form>
<div id="result">
    <?php if ($result !== ''): ?>
        Résultat: <?php echo htmlspecialchars($result); ?>
    <?php endif; ?>
</div>
</body>
</html>
<?php
$result = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = $_POST['input_calcul'];
    try {
        $sanitized_input = preg_replace('/[^0-9+\-*/(). ]/', '', $input);
        $result = eval("return $sanitized_input;");
    } catch (Exception $e) {
        $result = "Erreur dans l'opération.";
    }
}
?> 
<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $input_value = htmlspecialchars($_POST['input_text']);
        if (empty($input_value)) {
            echo "<br>no value to send<br>";
        } else {
            echo "<div id='response'> Comment : " . htmlspecialchars($input_value) . "</div>";
        }
    }
?>