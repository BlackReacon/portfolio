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
    $description = trim($_POST['frm_description']);
    $image = trim($_POST['frm_projectImg']);
    $link = trim($_POST['frm_link']);
    $technologies = isset($_POST['technologies']) ? $_POST['technologies'] : [];

    if (!empty($title) && !empty($description) && !empty($link)) {
        $stmt = $mysqli->prepare("INSERT INTO projects (title, description, image, link) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssss", $title, $description, $image, $link);
            $stmt->execute();
            $projectId = $mysqli->insert_id;
            $stmt->close();

            if (!empty($technologies)) {
                $techStmt = $mysqli->prepare("INSERT INTO projects_technologies (project_id, technologie_id, technologie_title) VALUES (?, ?, ?)");
            
                foreach ($technologies as $techId) {
                $titleQuery = $mysqli->prepare("SELECT title FROM technologies WHERE id = ?");
                $titleQuery->bind_param("i", $techId);
                $titleQuery->execute();
                $result = $titleQuery->get_result();

                if ($row = $result->fetch_assoc()) {
                    $techTitle = $row['title'];
                    $techStmt->bind_param("iis", $projectId, $techId, $techTitle);
                    $techStmt->execute();
                }

                $titleQuery->close();
            }

            $techStmt->close();
        }
            


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