<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once __DIR__ . './../config.db.php';

if ($mysqli->connect_error) {
    error_log("Connection failed: " . $mysqli->connect_error);
    die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Nur GET requests erlaubt']);
    exit;
}

try {
    $data = [];

    // Skills
    $result = $mysqli->query("SELECT * FROM skills ORDER BY id ASC");
    $data['skills'] = [];
    while ($row = $result->fetch_assoc()) {
        $data['skills'][] = $row;
    }

    // Projects
    $result = $mysqli->query("SELECT * FROM projects ORDER BY id ASC");
    $data['projects'] = [];
    while ($row = $result->fetch_assoc()) {
        $projectId = $row['id'];

        // Technologies for this project
        $techQuery = "SELECT technologies.id, technologies.title 
                     FROM technologies 
                     INNER JOIN projects_technologies ON projects_technologies.technologie_id = technologies.id 
                     WHERE projects_technologies.project_id = " . $projectId;

        $techResult = $mysqli->query($techQuery);
        $row['technologies'] = [];

        while ($tech = $techResult->fetch_assoc()) {
            $row['technologies'][] = $tech;
        }

        $data['projects'][] = $row;
    }

    echo json_encode(['success' => true, 'data' => $data]);
    exit;
} catch (Exception $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Datenbankfehler']);
    exit;
}
