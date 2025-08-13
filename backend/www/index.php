<?php
session_start();
$isLoggedIn = isset($_SESSION['eingeloggt']);
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
</head>

<body class="bg-secondary">

    <?php if ($isLoggedIn): ?>
        <h1>Admin Dashboard</h1>
        <a href="./authCheck/logout.php">Abmelden</a>
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