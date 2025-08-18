<?php
session_start();
require_once './config.db.php';

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL );
ini_set('log_errors', 1);
ini_set('error_log', './php_config');
phpinfo();