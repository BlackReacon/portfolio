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

$iconPathSkills = './moduls/img/icons/';

$icons = [];
$iconQuery = $mysqli->query("SELECT * FROM icons ORDER BY name ASC");
if ($iconQuery) {
  while ($row = $iconQuery->fetch_assoc()) {
    $icons[] = $row;
  }
}

echo '          
        <div class="d-flex justify-content-between align-items-center mt-4">
            <h2 class="text-white">Skills</h2>
            <div class="text-end">
                <button class="btn btn-primary" onclick="toggleUploadIcon()">Icon hochladen</button>
                <button class="btn btn-success" onclick="createSkill()">Skill hinzufügen</button>
            </div>
        </div>

        <section class="skillsContainer">';

while ($row = $skills->fetch_assoc()) {
  echo '
        <div class="skillCard bg-light text-dark border">
            <div class="text-start">
              <p class="m-0 skillId">' . htmlspecialchars($row['id']) . '</p>
              <img src="' . htmlspecialchars($iconPathSkills . $row['icon']) . '" alt="' . htmlspecialchars($row['title']) . ' Icon" class="skillIcon img-thumbnail" style="width:48px">
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
                        <select class="form-control" name="edit_icon" id="edit_icon_' . $row['id'] . '" value="' . htmlspecialchars($row['icon']) . '" required>';
  foreach ($icons as $icon) {
    $selected = '';
    if ($row['icon'] === $icon['file_name']) {
      $selected = 'selected';
    }
    echo '<option value="' . htmlspecialchars($icon['file_name']) . '" ' . $selected . '>' .
      htmlspecialchars($icon['name']) . '</option>';
  }
  echo '            </select>  
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

echo '
<div class="modal fade" id="uploadIconModal" tabindex="-1" aria-labelledby="uploadIconModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form action="./moduls/skills/uploadIcon.php" method="POST" enctype="multipart/form-data">
        <div class="modal-header">
          <h5 class="modal-title" id="uploadIconModalLabel">Icon hochladen</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
        </div>
        <div class="modal-body">

            <div class="mb-3">
                <label for="icon_name" class="form-label">Icon Name (Dropdown-Name)</label>
                <input type="text" class="form-control" name="icon_name" id="icon_name" required placeholder="z.B. html5, css3, javascript">
            </div>

            <div class="mb-3">
                <label for="icon_file" class="form-label">Icon Datei (SVG)</label>
                <input type="file" class="form-control" name="icon_file" id="icon_file" accept=".svg" required>
            </div>

        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success" name="upload_icon">Hochladen</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>
        </div>
      </form>
    </div>
  </div>
</div>';

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

  function toggleUploadIcon() {
    const modal = new bootstrap.Modal(document.getElementById('uploadIconModal'));
    modal.show();
  }

  function createSkill() {
    window.location.href = './moduls/skills/frm_createSkill.php';
  }
</script>