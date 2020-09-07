<?php
session_start();

function checkLogin()
{
    global $link;


    if (isset($_POST['login']) && isset($_POST['password'])) {
        $login = $_POST['login'];
        $password = $_POST['password'];
    } else if (isset($_SESSION['login']) && isset($_SESSION['password'])) {
        $login = $_SESSION['login'];
        $password = $_SESSION['password'];
    } else {
        return false;
    }

    $query = "SELECT *  FROM  users  WHERE  password = '$password' AND name = '$login' AND  isAdmin  = 1 ";    
    $result = mysqli_query($link, $query); 
    var_dump(mysqli_query($link, $query));

    if ($result->num_rows>0) {
        $_SESSION['login'] = $login;
        $_SESSION['password'] = $password;
        return true;
    } 
    else {
        return false;
    }
}
?>