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
        $data['projects'][] = $row;
    }

    // Technologies
    $result = $mysqli->query("SELECT * FROM Technologies ORDER BY id ASC");
    $data['technologies'] = [];
    while ($row = $result->fetch_assoc()) {
        $data['technologies'][] = $row;
    }

    echo json_encode(['success' => true, 'data' => $data]);

    if (mysqli_connect_errno()) {
        throw new Exception("Keine verbindung zur Datenbank möglich");
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Datenbankfehler']);
    return;
}
