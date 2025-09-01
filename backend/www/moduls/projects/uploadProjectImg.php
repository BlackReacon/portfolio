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
    $imageName = trim($_POST['projectImg_name']);

    $uploadDir = './../img/projects/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    if (!empty($_FILES['projectImg_file']) && $_FILES['projectImg_file']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['projectImg_file'];
        $maxsize = 200000;
        $allowedTypes = ['image/png'];

        if ($file['size'] > $maxsize) {
            header("Location: ./../../index.php");
            exit;
            /* echo 'Datei zu groß ' . $file['size']; */
        }

        if (!in_array($file['type'], $allowedTypes)) {
            header("Location: ./../../index.php");
            exit;
        }

        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $fileName = strtolower(str_replace(' ', '_', $imageName)) . '.' . $extension;
        $targetPath = $uploadDir . $fileName;

        if (!empty($imageName) && !empty($fileName) && !empty($targetPath)) {
            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $stmt = $mysqli->prepare("INSERT INTO projectimages (name, file_name) VALUES (?,?)");
                $stmt->bind_param("ss", $imageName, $fileName);
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
