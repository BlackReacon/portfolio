<?php
session_start();
require_once(__DIR__ . '/../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: /www/authCheck/login.php");
    exit;
}

global $mysqli;

$success = false;
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
            header("Location: ../index.php");
            exit;
        } else {
            $error = "Datenbankfehler beim Vorbereiten der Abfrage.";
        }
    } else {
        $error = "Bitte alle Felder ausfüllen.";
    }
}
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technologie hinzufügen</title>
    <link href="../../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
</head>

<body class="bg-secondary text-white">

    <header>
        <nav class="navbar navbar-dark bg-dark px-4">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <a href="../index.php" class="btn btn-outline-light">Zurück</a>
                <span class="navbar-brand mb-0 h1">Neue Technologie hinzufügen</span>
                <a href="/www/authCheck/logout.php" class="btn btn-outline-light">Abmelden</a>
            </div>
        </nav>
    </header>

    <main>

        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

                            <?php if ($error): ?>
                                <div class="alert alert-danger"><?php echo htmlspecialchars($error) ?></div>
                            <?php endif; ?>

                            <form method="post">
                                <h2 class="fw-bold mb-2 text-uppercase">Neue Technolgie</h2>
                                <p class="text-white-50 mb-5">Bitte fühle alle Felder aus!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="title" class="form-label">Name</label>
                                    <input type="text" class="form-control form-control-lg" id="title" name="frm_title" required>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <a href="../index.php" class="btn btn-outline-light btn-lg px-5">Abbrechen</a>
                                    <button data-mdb-button-init data-mdb-ripple-init type="submit" class="btn btn-success">Technolgie speichern</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>

</html>