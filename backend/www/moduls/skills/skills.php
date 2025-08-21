<?php
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM skills ORDER BY id ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$skills = $stmt->get_result();

echo '          
        <div class="d-flex justify-content-between align-items-center mt-4">
            <h2 class="text-white">Skills</h2>
            <button class="btn btn-success" onclick="createSkill()">Skill hinzufügen</button>
        </div>

        <section class="skillsContainer">';

while ($row = $skills->fetch_assoc()) {
    echo '
        <div class="skillCard bg-light text-dark border">
            <div class="text-start">
                <p class="m-0 skillId">' . htmlspecialchars($row['id']) . '</p>
                <p class="m-0 skillIcon">' . htmlspecialchars($row['icon']) . '</p>
                <p class="m-0 skillTitle">' . htmlspecialchars($row['title']) . '</p>
                <p class="m-0 skillDescription">' . htmlspecialchars($row['description']) . '</p>
            </div> 
            
            <div class="text-end">
                <button class="btn btn-primary editSkillBtn" onclick="toggleEditSkillModal(' . htmlspecialchars($row['id']) . ')">Bearbeiten</button>
                <button class="btn btn-danger deleteSkillBtn" onclick="confirmSkillDelete(' . htmlspecialchars($row['id']) . ')" ">Löschen</button>
            </div>
        </div>';

    echo '
        <div class="modal fade" id="editSkillModal_' . htmlspecialchars($row['id']) . '" tabindex="-1" aria-labelledby="editSkillModalLabel_' . htmlspecialchars($row['id']) . '" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <form action="./moduls/skills/editSkill.php" method="POST">
                <div class="modal-header">
                  <h5 class="modal-title" id="editModalLabel_' . htmlspecialchars($row['id']) . '">Skill bearbeiten</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="skill_id" value="' . htmlspecialchars($row['id']) . '">

                    <div class="mb-3">
                        <label for="edit_icon_' . $row['id'] . '" class="form-label">Icon</label>
                        <input type="text" class="form-control" name="edit_icon" id="edit_icon_' . $row['id'] . '" value="' . htmlspecialchars($row['icon']) . '" required>
                    </div>

                    <div class="mb-3">
                        <label for="edit_title_' . $row['id'] . '" class="form-label">Titel</label>
                        <input type="text" class="form-control" name="edit_title" id="edit_title_' . $row['id'] . '" value="' . htmlspecialchars($row['title']) . '" required>
                    </div>

                    <div class="mb-3">
                        <label for="edit_description_' . $row['id'] . '" class="form-label">Beschreibung</label>
                        <textarea class="form-control" name="edit_description" id="edit_description_' . $row['id'] . '" rows="4">' . htmlspecialchars($row['description']) . '</textarea>
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
    function confirmSkillDelete(id) {
        let text = "Diesen Skill löschen?";
        if (confirm(text) === true) {
            window.location.replace(`./moduls/skills/deleteSkill.php?id=${id}`);
        } else {
            return false;
        }
    }

    function toggleEditSkillModal(id) {
        const modal = new bootstrap.Modal(document.getElementById('editSkillModal_' + id));
        modal.show();
    }

    function createSkill() {
        window.location.href = './moduls/skills/frm_createSkill.php';
    }
</script>