<?php
session_start();

// Composer Autoloader
require_once __DIR__ . '/../../vendor/autoload.php';

// .env loading from /portfolio
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$userName = $_ENV['ADMIN_USERNAME'] ?? '';
$password = $_ENV['ADMIN_PASSWORD'] ?? '';

// check login
if (isset($_POST['frm_username'], $_POST['frm_pwd'])) {
    if ($_POST['frm_username'] === $userName && $_POST['frm_pwd'] === $password) {
        $_SESSION['eingeloggt'] = true;
        header('Location: ./../index.php');
        exit;
    } else {
        header('Location: ./frm_login.php');
        exit;
    }
}