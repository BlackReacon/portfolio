<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

if (
    isset($_POST['edit_save_sbm']) &&
    isset($_POST['project_id']) &&
    !empty($_POST['edit_title']) &&
    !empty($_POST['edit_description']) &&
    !empty($_POST['edit_projectImg']) &&
    !empty($_POST['edit_link'])
) {
    $id = intval($_POST['project_id']);
    $title = trim($_POST['edit_title']);
    $description = trim($_POST['edit_description']);
    $image = trim($_POST['edit_projectImg']);
    $link = trim($_POST['edit_link']);
    $technologies = isset($_POST['technologies']) ? $_POST['technologies'] : [];

    $stmt = $mysqli->prepare("UPDATE projects SET title = ?, description = ?, image = ? link = ? WHERE id = ?");
    if ($stmt) {
        $stmt->bind_param("sssi", $title, $description, $image, $id, $link);
        $stmt->execute();
        $stmt->close();
    } else {
        echo '<div class="alert alert-danger">Datenbankfehler beim Vorbereiten der Projekt-Aktualisierung.</div>';
        exit;
    }

    $deleteStmt = $mysqli->prepare("DELETE FROM projects_technologies WHERE project_id = ?");
    if ($deleteStmt) {
        $deleteStmt->bind_param("i", $id);
        $deleteStmt->execute();
        $deleteStmt->close();
    }

    if (!empty($technologies)) {
        $insertStmt = $mysqli->prepare("INSERT INTO projects_technologies (project_id, technologie_id, technologie_title) VALUES (?, ?, ?)");

        foreach ($technologies as $techId) {

            $techId = intval($techId);
            $titleResult = $mysqli->query("SELECT title FROM technologies WHERE id = $techId");
            $techTitle = $titleResult ? $titleResult->fetch_assoc()['title'] : '';

            if ($insertStmt && $techTitle) {
                $insertStmt->bind_param("iis", $id, $techId, $techTitle);
                $insertStmt->execute();
            }
        }

        if ($insertStmt) {
            $insertStmt->close();
        }
    }
    header("Location: ./../../index.php");
    exit;
} else {
    echo '<div class="alert alert-danger">Bitte füllen Sie alle Felder aus oder etwas ist schief gelaufen.</div>';
}