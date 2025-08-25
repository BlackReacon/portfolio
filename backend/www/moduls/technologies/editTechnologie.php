<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

// Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
} 

global $mysqli;

if (
    isset($_POST['edit_save_sbm']) &&
    isset($_POST['technologie_id']) &&
    !empty($_POST['edit_title'])
) {
    $id = $_POST['technologie_id'];
    $title = trim($_POST['edit_title']);

    $sql = "UPDATE technologies SET title = ? WHERE id = ?";
    $stmt = $mysqli->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("si", $title, $id);
        $stmt->execute();
        $stmt->close();
        header("Location: ./../../index.php");
        exit;
    } else {
        echo '<div class="alert alert-danger">Datenbankfehler beim Vorbereiten der Abfrage</div>';
    }
} else {
    echo '<div class="alert alert-danger">Bitte füllen Sie alle Felder aus oder etwas ist schief gelaufen.</div>';
}