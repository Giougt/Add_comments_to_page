<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="public/assets/style.css">
</head>
<body>  
    <div>Add a comment :</div>
    <form method="post" action="">
        <input type="text" placeholder="Enter text here" class="style1" name="input_text" id="input_text"> 
        <button  type="submit">Send</button>
        <button id="buttonText" type="button">Send</button>
    </form>
<!-- form for Calculator -->
    <div> Calculator </div>
    <form method="post" action="">
        <input type="text" placeholder="Enter operation here" class="style1" name="input_calcul" id="input_calcul"> 
        <button type="submit">Send</button>
    </form>
    <div id="result">
        <?php if (isset($_POST['input_calcul']) || isset($_POST["input_text"])): ?>
            Résultat: <?php echo htmlspecialchars($result); ?>
        <?php endif; ?>
    </div>
    <div>
        <!-- img for game -->
        <img id="plane" src="plane2.png" alt="Description">
    </div>
</body>
<script src="public/assets/script.js"></script>
</html>
<?php
// part for calcul input //
$result = '';
if (isset($_POST['input_calcul'])) {
    try {
        $input_value =  htmlspecialchars($_POST['input_calcul']);
        $split_result = preg_split('/[+\-\/\*]/',$input_value);
        $operator = strcspn($input_value,"+-/*");
        //convert string in int //
        $var1 = (int)$split_result[0];
        $var2 = (int)$split_result[1];
        // find operator //
        $ope = $input_value[$operator];
        // switch case //
        $result_ope = 0;
        switch ($ope) {
            case '+':
                $result_ope = $var1 + $var2;
                break;
            case '-':
                $result_ope = $var1 - $var2;
                break;
            case '/':
                $result_ope = $var1 / $var2;
                break;
            case '*':
                $result_ope = $var1 * $var2;
                break;
            default:
                throw new Exception('Unknow operator');
        }
        print_r("Result from operation  $input_value = $result_ope");
    } catch (Exception $e) {
        echo 'Caught exception :', $e->getMessage(), "\n";
        
    }
}
?> 
<?php
// part for text input //
    if (isset($_POST["input_text"])) {
        $input_value = htmlspecialchars($_POST['input_text']);
        if (empty($input_value)) {
            echo "<br>no value to send<br>";
        } else {
            echo "<div id='response'> Comment : " . htmlspecialchars($input_value) . "</div>";
        }
    }
?>