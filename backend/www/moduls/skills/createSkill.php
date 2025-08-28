<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ./../../authCheck/frm_login.php");
    exit;
}

global $mysqli;

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $icon = trim($_POST['frm_icon']);
    $title = trim($_POST['frm_title']);
    $description = trim($_POST['frm_description']);

    if (!empty($icon) && !empty($title) && !empty($description)) {
        $stmt = $mysqli->prepare("INSERT INTO skills (icon, title, description) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("sss", $icon, $title, $description);
            $stmt->execute();
            $stmt->close();
            header("Location: ./../../index.php");
            exit;
        } else {
            $error = "Datenbankfehler beim Vorbereiten der Abfrage.";
        }
    } else {
        $error = "Bitte alle Felder ausfüllen.";
    }
}