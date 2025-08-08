#!/bin/bash
set -e

# .env Variablen einlesen
set -a
source .env
set +a

# Docker Container erstellen
echo 'Erstelle Docker Container'
docker compose up -d --build
echo 'Docker Container erstellt'

# MariaDB warten -> Tabellen erstellen
echo 'Warte auf MariaDB...'
until docker exec mariadb_portfolio mariadb -u"${MYSQL_USER}" -p"${MYSQL_PASSWORD}" "${MYSQL_DATABASE}"; do
    sleep 2
done

echo 'MariaDB ist bereit. Erstelle Tabellen...'

docker exec -i mariadb_portfolio mariadb -u"${MYSQL_USER}" -p"${MYSQL_PASSWORD}" "${MYSQL_DATABASE}" <<EOF
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS technologien (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS projekte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titel VARCHAR(150) NOT NULL,
    beschreibung TEXT
);

CREATE TABLE IF NOT EXISTS projekt_technologie (
    projekt_id INT NOT NULL,
    technologie_id INT NOT NULL,
    PRIMARY KEY (projekt_id, technologie_id),
    FOREIGN KEY (projekt_id) REFERENCES projekte(id) ON DELETE CASCADE,
    FOREIGN KEY (technologie_id) REFERENCES technologien(id) ON DELETE CASCADE
);
EOF

echo 'Tabellen erfolgreich erstellt.'
