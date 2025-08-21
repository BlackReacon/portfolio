<?php
session_start();
require_once 'config.db.php';



if (empty($_SESSION['eingeloggt'])) {
    header('Location: ./authCheck/frm_login.php');
    exit;
} else {
    require_once './structur/head.php';

    require_once './structur/header.php';

    require_once './structur/main.php';
    
    require_once './structur/footer.php';
}

