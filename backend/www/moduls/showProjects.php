<?php
require_once(__DIR__ . '/../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM projects ORDER BY title ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$projects = $stmt->get_result();

echo '<section class="projectsContainer">';
while ($row = $projects->fetch_assoc()) {
    echo '
        <div class="projectsCard bg-light text-dark border">
            <div class="projectId">'. htmlspecialchars($row['id']) .'</div>
            <div class="projectTitle">' . htmlspecialchars($row['title']) .'</div>
            <div class="projectDescription">'. htmlspecialchars($row['description']) . '</div>
        </div>';
}
echo '</section>';
?>