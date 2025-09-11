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

$allTechnologies = [];
$techQuery = $mysqli->query("SELECT * FROM technologies ORDER BY title ASC");
if ($techQuery) {
    while ($TechRow = $techQuery->fetch_assoc()) {
        $allTechnologies[] = $TechRow;
    }
}

require_once './../../structure/head.php';

echo '
<div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

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
                                    <input type="text" class="form-control form-control-lg" id="title" name="frm_title" value="' . (isset($_POST['frm_title']) ? htmlspecialchars($_POST['frm_title']) : '') . '" required>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="description" class="form-label">Beschreibung</label>
                                    <textarea class="form-control form-control-lg" id="description" name="frm_description" rows="3" required>' . (isset($_POST['frm_description']) ? htmlspecialchars($_POST['frm_description']) : '') . '</textarea>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="link" class="form-label">Link</label>
                                    <input type="text" class="form-control form-control-lg" id="link" name="frm_link" value="' . (isset($_POST['frm_link']) ? htmlspecialchars($_POST['frm_link']) : '') . '" required>
                                </div>

                                <div data-mbd-input-init class="form-outline form-white mb-4">
                                    <label for="technologies" class="form-label">Technologien</label>
                                    <div class="d-flex flex-wrap gap-2 justify-content-start">';
foreach ($allTechnologies as $tech) {
            echo '
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox"
                           id="tech_' . htmlspecialchars($tech['id']) . '"
                           name="technologies[]"
                           value="' . htmlspecialchars($tech['id']) . '"' .
                           (isset($_POST['technologies']) && in_array($tech['id'], $_POST['technologies']) ? ' checked' : '') . '>
                    <label class="form-check-label text-white" for="tech_' . htmlspecialchars($tech['id']) . '">'
                        . htmlspecialchars($tech['title']) . '
                    </label>
                </div>';
}

                        echo '  </div>
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