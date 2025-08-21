<?php
session_start();
require_once 'config.db.php';



if (empty($_SESSION['eingeloggt'])) {
    header('Location: ./authCheck/frm_login.php');
    exit;
} else {
    require_once './structure/head.php';

    require_once './structure/header.php';

    require_once './structure/main.php';
    
    require_once './structure/footer.php';
}

