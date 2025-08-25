<?php
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM technologies ORDER BY id ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$technologies = $stmt->get_result();

echo '
        <div class="d-flex justify-content-between align-items-center mt-4">
            <h2 class="text-white">Technologien</h2>
            <button class="btn btn-success" onclick="createTechnolgie()">Technologie hinzufügen</button>
        </div>

<section class="technologiesContainer">';

while ($row = $technologies->fetch_assoc()) {
    echo '
        <div class="technologieCard bg-light text-dark border">
            <div class="text-start">
                <div class="technologieId">' . htmlspecialchars($row['id']) . '</div>
                <div class="technologieTitle">' . htmlspecialchars($row['title']) . '</div>
            </div>

            <div class="text-end">
                <button class="btn btn-primary editTechnologieBtn" onclick="toggleEditTechnolgieModal(' . htmlspecialchars($row['id']) . ')">Bearbeiten</button>
                <button class="btn btn-danger deleteTechnologieBtn" onclick="confirmTechnolgieDelete(' . htmlspecialchars($row['id']) . ')">Löschen</button>
            </div>
        </div>

        <div class="modal fade" id="editTechnolgieModal_' . htmlspecialchars($row['id']) . '" tabindex="-1" aria-labelledby="editTechnolgieModalLabel_' . htmlspecialchars($row['id']) . '" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <form action="./moduls/technologies/editTechnologie.php" method="POST">
                <div class="modal-header">
                  <h5 class="modal-title" id="editTechnolgieModalLabel_' . htmlspecialchars($row['id']) . '">Technologie bearbeiten</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="technologie_id" value="' . htmlspecialchars($row['id']) . '">

                    <div class="mb-3">
                        <label for="edit_title_' . $row['id'] . '" class="form-label">Titel</label>
                        <input type="text" class="form-control" name="edit_title" id="edit_title_' . $row['id'] . '" value="' . htmlspecialchars($row['title']) . '" required>
                    </div>

                </div>
                <div class="modal-footer"> 
                    <button type="submit" class="btn btn-primary" name="edit_save_sbm">Speichern</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button> 
                </div>
              </form>
            </div>
          </div>
        </div>';
}
echo '</section>';
?>

<script>
    function confirmTechnolgieDelete(id) {
        let text = "Diese Technologie löschen?";
        if (confirm(text) === true) {
            window.location.replace(`./moduls/technologies/deleteTechnologie.php?id=${id}`);
        } else {
            return false;
        }
    }

    function toggleEditTechnolgieModal(id) {
        const modal = new bootstrap.Modal(document.getElementById('editTechnolgieModal_' + id));
        modal.show();
    }

    function createTechnolgie() {
        window.location.href = './moduls/technologies/frm_createTechnologie.php';
    }
</script>