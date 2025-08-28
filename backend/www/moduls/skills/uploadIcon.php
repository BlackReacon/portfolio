<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

// Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ./../../../authCheck/frm_login.php");
    exit;
}

global $mysqli;

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $iconName = trim($_POST['icon_name']);

    $uploadDir = './../img/icons/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    if (isset($_FILES['icon_file']) && $_FILES['icon_file']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['icon_file'];
        $maxsize = 2000000;
        $allowedTypes = ['image/svg+xml'];

        if ($file['size'] > $maxsize) {
            header("Location: ./../../index.php");
            exit;
        }

        if (!in_array($file['type'], $allowedTypes)) {
            header("Location: ./../../index.php");
            exit;
        }

        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $fileName = strtolower(str_replace(' ', '-', $iconName)) . '.' . $extension;
        $targetPath = $uploadDir . $fileName;

        if (!empty($iconName) && !empty($fileName) && !empty($targetPath)) {
            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $stmt = $mysqli->prepare("INSERT INTO icons (name, file_name) VALUES (?, ?)");
                $stmt->bind_param("ss", $iconName, $fileName);
                $stmt->execute();
                $stmt->close();
                header("Location: ./../../index.php");
                exit; 
            } else {
                $error = 'Fehler beim Speichern in der Datenbank';
            }
        }
    } else {
        $error = 'Fehler beim Hochladen';
    }
}