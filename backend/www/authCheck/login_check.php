<?php
    session_start();
    if ( ! isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] == 0) {
        header('Location: login.php');
        exit;
    }