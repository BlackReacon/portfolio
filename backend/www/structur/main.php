<?php
echo '
    <main class="container mt-4">
        <div class="row">
            <div class="col-md-12">';

               
require './moduls/skills/showSkills.php'; 

          echo '<div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Projekte</h2>
                    <a href="./moduls/projects/addProject.php" class="btn btn-success">Projekt hinzufügen</a>
                </div>';
require './moduls/projects/showProjects.php';

           echo '<div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Technologien</h2>
                    <a href="./moduls/technologies/addTechnologie.php" class="btn btn-success">Technologie hinzufügen</a>
                </div>';
require './moduls/technologies/showTechnologies.php';

      echo '</div>
        </div>
    </main>
    ';