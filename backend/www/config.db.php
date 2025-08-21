<?php
require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();


mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($_ENV["hostname"], $_ENV["username"],$_ENV["password"], $_ENV["database"]);
if ($mysqli->connect_errno) {
    throw new RuntimeException('mysqli-Verbindungsfehler: '. $mysqli->connect_error);
}

