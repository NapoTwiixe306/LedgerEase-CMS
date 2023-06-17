<?php 
  include './app/controllers/Variables.php';
?>


<!DOCTYPE html>
<html>
<head>
    <title> <?php echo $Title; ?></title>
    <link rel="stylesheet" href="../public/css/style.css">
    <script src="https://kit.fontawesome.com/b354d51934.js" crossorigin="anonymous"></script>
</head>
<body>
    <?php
    include './app/views/components/navbar.php';
    // Inclure le contenu spécifique à chaque page
    if(isset($_GET['page'])) {
        $page = $_GET['page'];
        if($page === 'create') {
            include './app/views/site/Create.php';
        } elseif($page === 'docs') {
            include './app/views/site/Docs.php';
        } elseif($page === 'login') {
            include './app/views/Auth/Login.php';
        } else {
            include './app/views/site/Home.php';
        }
    } else {
        include './app/views/site/Home.php';
    }
    // Inclure le contenu du Footer
    include './app/views/components/footer.php';
?>
<script src="./index.js"></script>
</body>
</html>
