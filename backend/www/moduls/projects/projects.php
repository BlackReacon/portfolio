<?php
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM projects ORDER BY id ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$projects = $stmt->get_result();

$projectImgPath = './moduls/img/projects/';

$projectImages = [];
$projectImgQuery = $mysqli->query("SELECT * FROM projectImages ORDER BY name ASC");
if ($projectImgQuery) {
    while ($row = $projectImgQuery->fetch_assoc()) {
        $projectImages[] = $row;
    }
}

echo '
        <div class="d-flex justify-content-between align-items-center mt-4">
            <h2 class="text-white">Projekte</h2>
            <div class="text-end">
                <button class="btn btn-primary" onclick="toggleUploadProjectImg()">Projekt Bild hochladen</button>
                <button class="btn btn-success" onclick="addProject()">Projekt hinzufügen</button>
            </div>
        </div>
                
        <section class="projectsContainer">';

while ($row = $projects->fetch_assoc()) {
    echo '
        <div class="projectsCard bg-light text-dark border">
            <div class="text-start">
                <div class="projectId">' . htmlspecialchars($row['id']) . '</div>
                <img src="' . htmlspecialchars($projectImgPath . $row['image']) . '" alt="' . htmlspecialchars($row['title']) . ' Icon" class="projectImg img-thumbnail" style="width:240px">
                <div class="projectTitle">' . htmlspecialchars($row['title']) . '</div>
                <div class="projectDescription">' . htmlspecialchars($row['description']) . '</div>
            </div> 
            
            <div class="text-end">
                <button class="btn btn-primary editSkillBtn" onclick="toggleEditProjectModal(' . htmlspecialchars($row['id']) . ')">Bearbeiten</button>
                <button class="btn btn-danger deleteSkillBtn" onclick="confirmProjectDelete(' . htmlspecialchars($row['id']) . ')" ">Löschen</button>
            </div>
        </div>

        <div class="modal fade" id="editProjectModal_' . htmlspecialchars($row['id']) . '" tabindex="-1" aria-labelledby="editProjectModalLabel_' . htmlspecialchars($row['id']) . '" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <form action="./moduls/projects/editProject.php" method="POST">
                <div class="modal-header">
                  <h5 class="modal-title" id="editModalLabel_' . htmlspecialchars($row['id']) . '">Projekt bearbeiten</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="project_id" value="' . htmlspecialchars($row['id']) . '">

                    <div class="mb-3">
                        <label for="edit_projectImg_' . $row['id'] . '" class="form-label">Projekt Bild</label>
                        <select class="form-control" name="edit_projectImg" id="edit_projectImg_' . $row['id'] . '" value="' . htmlspecialchars($row['image']) . '" required>';
    foreach ($projectImages as $proImg) {
        $selected = '';
        if ($row['image'] === $proImg['file_name']) {
            $selected = 'selected';
        }
        echo '<option value="' . htmlspecialchars($proImg['file_name']) . '" ' . $selected . '>' .
            htmlspecialchars($proImg['name']) . '</option>';
    }

    echo ' </select>
                        </div>

                    <div class="mb-3">
                        <label for="edit_title_' . $row['id'] . '" class="form-label">Titel</label>
                        <input type="text" class="form-control" name="edit_title" id="edit_title_' . $row['id'] . '" value="' . htmlspecialchars($row['title']) . '" required>
                    </div>

                    <div class="mb-3">
                        <label for="edit_description_' . $row['id'] . '" class="form-label">Beschreibung</label>
                        <textarea class="form-control" name="edit_description" id="edit_description_' . $row['id'] . '" required>' . htmlspecialchars($row['description']) . '</textarea>
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
<div class="modal fade" id="uploadProjectImg" tabindex="-1" aria-labelledby="uploadProjectImgLabel" aria-hidden="true">
 <div class="modal-dialog">
  <div class="modal-content">
   <form action="./moduls/projects/uploadProjectImg.php" method="POST" enctype="multipart/form-data">
    <div class="modal-header">
        <h5 class="modal-title" id="uploadProjectImgLabel">Projekt Bild hochladen</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
    </div>
    <div class="modal-body">

        <div class="mb-3">
            <label for="projectImg_name" class="form-label">Projekt Bild Name (Dropdown-Name)</label>
            <input type="text" class="form-control" name="projectImg_name" id="projectImg_name" required placeholder="z.B. Errinnerungs-App">
        </div>

        <div class="mb-3">
            <label for="projectImg_file" class="form-label">Projekt Bild Datei (PNG)</label>
            <input type="file" class="form-control" name="projectImg_file" id="projectImg_file" accept=".png" required>
        </div>

    </div>
    <div class="modal-footer">
        <button type="submit" class="btn btn-success" name="upload_projectImg">Hochladen</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>    
    </div>
   </form>
  </div>
 </div>
</div>';

echo '</section>';
?>

<script>
    function confirmProjectDelete(id) {
        let text = "Dieses Projekt löschen?";
        if (confirm(text) === true) {
            window.location.replace(`./moduls/projects/deleteProject.php?id=${id}`);
        } else {
            return false;
        }
    }

    function toggleEditProjectModal(id) {
        const modal = new bootstrap.Modal(document.getElementById('editProjectModal_' + id));
        modal.show();
    }

    function toggleUploadProjectImg() {
        const modal = new bootstrap.Modal(document.getElementById('uploadProjectImg'));
        modal.show();
    }

    function addProject() {
        window.location.href = './moduls/projects/frm_createProject.php';
    }
</script>