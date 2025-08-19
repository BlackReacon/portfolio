<?php
session_start();
require_once 'config.db.php';
$isLoggedIn = isset($_SESSION['eingeloggt']);
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-secondary">

    <?php if ($isLoggedIn): ?>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <div class="container-fluid d-flex justify-content-between align-items-center">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <a href="./authCheck/logout.php" class="btn btn-outline-light">Abmelden</a>
                </div>
            </nav>
        </header>
        <main class="container mt-4">
            <div class="row">
                <div class="col-md-12">

                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <h2 class="text-white">Skills</h2>
                        <a href="moduls/addSkill.php" class="btn btn-success">Skill hinzufügen</a>
                    </div>
                    <?php require './moduls/showSkills.php'; ?>

                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <h2 class="text-white">Projekte</h2>
                        <a href="moduls/addProject.php" class="btn btn-success">Projekt hinzufügen</a>
                    </div>
                    <?php require './moduls/showProjects.php'; ?>

                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <h2 class="text-white">Technologien</h2>
                        <a href="moduls/addTechnologie.php" class="btn btn-success">Technologie hinzufügen</a>
                    </div>
                    <?php require './moduls/showTechnologies.php'; ?>

                </div>
            </div>
        </main>
    <?php else: ?>
        <!-- Go to Login -->
        <div class="container">
            <div class="row justify-content-center min-vh-100 align-items-center">
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5">

                            <div class="text-center mb-4">
                                <h2 class="fw-bold mb-2">Admin Dashboard</h2>
                                <p class="text-white">Melden Sie sich an, um fortzufahren</p>
                            </div>

                            <div class="d-grid">
                                <a href="./authCheck/login.php" class="btn btn-primary btn-lg">
                                    <span class="icon-login me-2"></span>
                                    Zur Anmeldung
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>

</body>
<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>

</html>