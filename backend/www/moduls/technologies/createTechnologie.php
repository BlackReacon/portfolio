<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

// Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
} 

global $mysqli;

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['frm_title']);

    if (!empty($title)) {
        $stmt = $mysqli->prepare("INSERT INTO technologies (title) VALUES (?)");
        if ($stmt) {
            $stmt->bind_param("s", $title);
            $stmt->execute();
            $stmt->close();
            $success = true;
            header("Location: ./../../index.php");
            exit;
        } else {
            $error = "Datenbankfehler beim Vorbereiten der Abfrage.";
        }
    } else {
        $error = "Bitte alle Felder ausfüllen.";
    }
}
?>
