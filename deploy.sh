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
    icon VARCHAR(255),
    title VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS projects_technologies (
    project_id INT NOT NULL,
    technology_id INT NOT NULL,
    PRIMARY KEY (project_id, technology_id),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (technology_id) REFERENCES technologies(id) ON DELETE CASCADE
);

INSERT INTO skills (icon, title, description) VALUES
('<FaHtml5 className="text-orange-500" size={24} />', 'HTML5', 'Semantisches Markup und progressive Web-Standards'),
('<FaCss3Alt className="text-blue-500" size={24} />', 'CSS3', 'Advanced Styling, Animations und responsive Design'),
('<FaJs className="text-yellow-400" size={24} />', 'JavaScript', 'ES6+, Performance-Optimierung und moderne Patterns');

EOF

echo 'Tabellen erfolgreich erstellt.'
