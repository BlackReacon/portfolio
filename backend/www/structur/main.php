<?php
echo '
    <main class="container mt-4">
        <div class="row">
            <div class="col-md-12">';

               
require './moduls/skills/skills.php'; 
          
require './moduls/projects/projects.php';

           echo '<div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Technologien</h2>
                    <a href="./moduls/technologies/addTechnologie.php" class="btn btn-success">Technologie hinzufügen</a>
                </div>';
require './moduls/technologies/technologies.php';

      echo '</div>
        </div>
    </main>
    ';