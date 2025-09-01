<?php
session_start();  
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ./../../authCheck/frm_login.php");
    exit;
}

global $mysqli;
$projectImages = [];
$projectImgQuery = $mysqli->query("SELECT * FROM projectImages ORDER BY name ASC");
if ($projectImgQuery) {
    while ($row = $projectImgQuery->fetch_assoc()) {
        $projectImages [] = $row;
    }
}

require_once './../../structure/head.php';

echo '
<div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

                            <?php if ($error): ?>
                                <div class="alert alert-danger"><?php echo htmlspecialchars($error) ?></div>
                            <?php endif; ?>

                            <form method="post" action="./createProject.php">
                                <h2 class="fw-bold mb-2 text-uppercase">Neues Projekt</h2>
                                <p class="text-white-50 mb-5">Bitte fühle alle Felder aus!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="projectImg" class="form-label">Projekt Bild</label>
                                    <select name="frm_projectImg" id="projectImg" class="form-control form-control-lg">';

                                    if(!empty($projectImages)) {
                                        foreach ($projectImages as $proImg) {
                                            $projectImgPath = './moduls/img/projects/' . htmlspecialchars($proImg['file_name']);
                                            echo '<option value="' . htmlspecialchars($proImg['file_name']) .'">' . htmlspecialchars($proImg['name']) . ' (' . htmlspecialchars($proImg['file_name']) .')</option>';
                                        }
                                    } else {
                                        echo '<option value="">Keine Projekt Bilder verfügbar</option>';
                                    }
                                echo ' </select>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="title" class="form-label">Name</label>
                                    <input type="text" class="form-control form-control-lg" id="title" name="frm_title" required>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="description" class="form-label">Beschreibung</label>
                                    <textarea class="form-control form-control-lg" id="description" name="frm_description" rows="3" required></textarea>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-secondary" onclick="cancel()">Abbrechen</button>
                                    <button data-mdb-button-init data-mdb-ripple-init type="submit" class="btn btn-success">Projekt speichern</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        ';
?>

<script>
    function cancel() {
        window.location.href = './../../index.php';
    };
</script>