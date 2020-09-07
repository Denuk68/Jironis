<?php
require_once 'connection.php';
require_once 'check.php';

$link = mysqli_connect($host, $user, $password, $database)
or die("Помилка " . mysqli_error($link));

if (!checkLogin()) {
    header("Location: /admin.php");
    die();
}

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone =  $_POST['phone'];
    $id = $_GET['id'];

    // створення рядка запиту
    $query ="UPDATE  contacts SET name = '$name' ,email = '$email' ,phone = '$phone'  WHERE № = $id";
    var_dump($query);
    // робимо запит
    $result = mysqli_query($link, $query) or die("Помилка " . mysqli_error($link));
    var_dump($result);
    if($result){
        header("Location: /admin.php");
    }

    // закриваємо підключенння
    mysqli_close($link);
}
?>