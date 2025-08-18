<?php
require_once(__DIR__ . '/../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM skills ORDER BY title ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$skills = $stmt->get_result();

echo '<section class="skillsContainer">';
while ($row = $skills->fetch_assoc()) {
    echo '
        <div class="skillCard bg-light text-dark border">
            <div class="skillId">' . htmlspecialchars($row['id']) . '</div>
            <div class="skillIcon">' . htmlspecialchars($row['icon']) . '</div>
            <div class="skillTitle">' . htmlspecialchars($row['title']) . '</div>
            <div class="skillDescription">' . htmlspecialchars($row['description']) . '</div>
        </div>';
}
echo '</section>';
