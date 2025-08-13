<?php
session_start();

// Composer Autoloader
require_once __DIR__ . '/../../vendor/autoload.php';

// .env loading from /portfolio
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$userName = $_ENV['ADMIN_USERNAME'] ?? '';
$password = $_ENV['ADMIN_PASSWORD'] ?? '';

// check login
if (isset($_POST['frm_username'], $_POST['frm_pwd'])) {
    if ($_POST['frm_username'] === $userName && $_POST['frm_pwd'] === $password) {
        $_SESSION['eingeloggt'] = true;
        header('Location: ./../index.php');
        exit;
    } else {
        echo 'Login nicht erfolgreich';
    }
}

if (!empty($_SESSION['eingeloggt'])) {
    echo 'Bereits eingeloggt <a href="?logout=1">Ausloggen</a>';
}
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link href="../../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
</head>

<body class="bg-secondary">
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <form method="post" action="">
                                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                <p class="text-white-50 mb-5">Bitte gib dein User und dein Passwort ein!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="text" id="user" class="form-control form-control-lg" name="frm_username" />
                                    <label class="form-label" for="user">Benutzer</label>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="password" id="password" class="form-control form-control-lg" name="frm_pwd" />
                                    <label class="form-label" for="password">Passwort</label>
                                </div>
                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>

</html>