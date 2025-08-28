<?php
session_start();
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ./../../authCheck/frm_login.php");
    exit;
}

global $mysqli;
$icons = [];
$iconQuery = $mysqli->query("SELECT * FROM icons ORDER BY name ASC");
if ($iconQuery) {
    while ($row = $iconQuery->fetch_assoc()) {
        $icons[] = $row;
    }
}

require_once './../../structure/head.php';

echo '
        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

                            <form method="post" action="./createSkill.php">
                                <h2 class="fw-bold mb-2 text-uppercase">Neuer Skill</h2>
                                <p class="text-white-50 mb-5">Bitte fühle alle Felder aus!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="icon" class="form-label">Icon (HTML oder Text)</label>
                                    <select name="frm_icon" id="icon" class="form-control form-control-lg">';

if (!empty($icons)) {
    foreach ($icons as $icon) {
        $iconPath = './modules/img/icons/' . htmlspecialchars($icon['file_name']);
        echo '<option value="' . htmlspecialchars($icon['file_name']) . '">' .
            htmlspecialchars($icon['name']) . ' (' . htmlspecialchars($icon['file_name']) . ')</option>';
    }
} else {
    echo '<option value="">Keine Icons verfügbar</option>';
}

echo '
                                    </select>
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
                                    <button data-mdb-button-init data-mdb-ripple-init type="submit" class="btn btn-success">Skill speichern</button>
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