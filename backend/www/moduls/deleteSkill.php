<?php
session_start();
require_once(__DIR__ . '/../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: /www/authCheck/login.php");
    exit;
}

if (isset($_SESSION['eingeloggt']) && isset($_GET["id"])) {
    global $mysqli;
    $sql = "DELETE FROM skills WHERE id = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("i", $_GET["id"]);
    $stmt->execute();

    header('Location: ../index.php');
}