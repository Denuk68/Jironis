<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="./css/admin.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/60dacd10a7.js" crossorigin="anonymous"></script>
</head>
<body>




<?php
require_once 'connection.php';
require_once 'check.php';


$link = mysqli_connect($host, $user, $password, $database)
or die("Помилка " . mysqli_error($link));



if(isset($_GET['logout']) && $_GET['logout'] == true){
    session_destroy();
    header("Location: ?");
    die();
}

if (!checkLogin()) {
    goToLoginPage();
    die();
}

if(isset($_GET['delete'])){
    deleteRow($_GET['delete']);
}

else if(isset($_GET['edit'])){
    editRow($_GET['edit']);
}

else goToAdminPage();





function goToLoginPage(){
        ?>
        <header class='admin_header'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-xl-3 col-lg-3 col-md-4 col-6'>
                <div class='logo'>
                    <img src='./img/logo.png' alt='jironis'>
                </div>
              </div>
              <div class='offset-lg-6 col-lg-3 offset-md-4 col-md-4 col-6 d-flex justify-content-around'>
                  <a href='/'>Перейти на сайт</a>
              </div>
            </div>
          </div>
        </header>

        <div class='container'>
            <div class='row'>
                <div class='offset-md-3 col-md-6 login-table'>
                    <h2>Панель адміністратора</h2>
                        <form method='post' id='login-form' class='login-form'>
                                      <input type='text' placeholder='Логін' class='input'
                                        name='login' required><br>
                                     <input type='password' placeholder='Пароль' class='input'
                                       name='password' required><br>
                                    <input type='submit' value='Увійти' class='button'>
                        </form>
                </div>
            </div>
        </div> ";
    <?php
}

function goToAdminPage()
{
    global $link;

    $query = "SELECT *  FROM  contacts  ";
    $result = mysqli_query($link, $query);

    ?>
<header class='admin_header'>        
          <div class='container'>
            <div class='row align-items-center'>    
              <div class='col-xl-3 col-lg-3 col-md-4 col-6'>
                <div class='logo'>
                    <img src='./img/logo.png' alt='jironis'>
                </div>
              </div>    
              <div class='offset-lg-6 col-lg-3 offset-md-4 col-md-4 col-6 d-flex justify-content-around'>
                  <a href='/'>Перейти на сайт</a>
                  <a href='?logout=true'>Вихід</a>
              </div>
            </div>
          </div>        
</header>    

<div class="container admin_table">
    <div class="row">    
    <div class="col-12"> 
           
    <table>
        <thead>            
        <tr>
            <th>№</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>

        <?php while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            ?>
            <tr>
                <td><?php echo $row['№'] ?></td>
                <td><?php echo $row['date'] ?></td>
                <td><?php echo $row['name'] ?></td>
                <td><?php echo $row['email'] ?></td>
                <td><?php echo $row['phone'] ?></td>
                <td><a href="?edit=<?php echo $row['№'] ?>"><i class="fas fa-edit fa-2x"></a></i></td>
                <td><a href="?delete=<?php echo $row['№'] ?>"><i class="fas fa-trash-alt fa-2x"></i></a></td>
            </tr>
        <?php } ?>
        
        </tbody>
    </table>
    </div>
   </div>
</div>

    <?php
}

function deleteRow($id){
    global $link;

    $query = "DELETE  FROM  contacts WHERE № = $id ";
    mysqli_query($link, $query);
    header("Location: /admin.php");
}

function editRow($id){
    global $link;

    $query = "SELECT * FROM  contacts WHERE № = $id ";
    $result = mysqli_query($link, $query);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    ?>
    <div class="container update-page">
      <div class="row">
        <div class="col-12">
          <h2>Editing current user</h2>
          <form action="update.php?id=<?php echo $row['№'] ?>" name="app-form" onsubmit="return checkall()" method="POST" class="update-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" name="name" id="inputName" onblur="validateName()" value="<?php echo $row['name'] ?>">
            </div>
            <div class="form-group">
              <label for="mail">Email address</label>
              <input type="text" class="form-control" name="email" id="inputEmail" onblur="validateEmail()" value="<?php echo $row['email'] ?>">
            </div>
            <div class="form-group">
              <label for="phone">Phone number</label>
              <input type="text" class="form-control" name="phone" id="inputPhone" onblur="validatePhone()" value="<?php echo $row['phone'] ?>">
            </div>
            <button type="submit" class="btn btn-primary btn-rose" id="submit_button">Submit an application
          </button>
          </form>
        </div>
      </div>
    </div>
    
<?php

}
?>

<script src="./js/admin/jquery.js"></script>
<script src="./js/admin/jquery.inputmask.js"></script>
<script src="./js/admin/main.js"></script>
</body>
</html>


