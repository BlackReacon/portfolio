<?php
header("Content-Type: application/json");

require_once __DIR__ . './../config.db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Nur GET requests erlaubt']);
    exit;
}

try {
    $data = [];

    // Skills
    $result = $mysqli->query("SELECT * FROM Skills ORDER BY id ASC");
    $data['skills'] = [];
    while ($row = $result->fetch_assoc()) {
        $data['skills'][] = $row;
    }

    // Projects
    $result = $mysqli->query("SELECT * FROM Projects ORDER BY id ASC");
    $data['projects'] = [];
    while ($row = $result->fetch_assoc()) {
        $projectId = $row['id'];

        // Technologies for this Project
        $techStmt = $mysqli->prepare("
            SELECT technologies.id, technologies.title 
            FROM technologies
            INNER JOIN projects_technologies ON projects_technologies.technologie_id = technologies.id
            WHERE projects_technologies.project_id = ?
            ORDER BY technologies.title ASC
        ");
        $techStmt->bind_param("i", $projectId);
        $techStmt->execute();
        $techResult = $techStmt->get_result();

        $technologies = [];
        while ($techRow = $techResult->fetch_assoc()) {
            $technologies[] = $techRow;
        }

        $row['technologies'] = $technologies;

        $data['projects'][] = $row;
    }

    echo json_encode(['success' => true, 'data' => $data]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Datenbankfehler: ' . $e->getMessage()
    ]);
}
