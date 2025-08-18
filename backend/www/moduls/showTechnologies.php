<?php
require_once(__DIR__ . '/../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ../authCheck/login.php");
    exit;
}

global $mysqli;

$sql = "SELECT * FROM technologies ORDER BY title ASC";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$technologies = $stmt->get_result();

echo '<section class="technologiesContainer">';
while ($row = $technologies->fetch_assoc()) {
    echo '
        <div class="technologieCard bg-light text-dark border">
            <div class="technologieId">' . htmlspecialchars($row['id']) . '</div>
            <div class="technologieTitle">' . htmlspecialchars($row['title']) . '</div>
        </div>';
}
echo '</section>';
