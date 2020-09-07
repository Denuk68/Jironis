<?php
require_once 'connection.php'; // подключаємо скріпт
 
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])){
 
    // підключаємося до серверу
    $link = mysqli_connect($host, $user, $password, $database) 
        or die("Помилка " . mysqli_error($link));      
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone =  $_POST['phone'];
    // створення рядка запиту
    $query ="INSERT INTO contacts VALUES(NULL, NULL, '$name','$email','$phone')";

    // робимо запит
    $result = mysqli_query($link, $query) or die("Помилка " . mysqli_error($link));
    if($result){
        header("Location: /?succsess");
    }

    // закриваємо підключенння
    mysqli_close($link);
}
?>