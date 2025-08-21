<?php
session_start();
require_once 'config.db.php';



if (empty($_SESSION['eingeloggt'])) {
    header('Location: ./authCheck/frm_login.php');
    exit;
}

require_once './structur/head.php';

if ($_SESSION['eingeloggt'] == 1):

    require_once './structur/header.php'; ?>

    <main class="container mt-4">
        <div class="row">
            <div class="col-md-12">

                <div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Skills</h2>
                    <a href="./moduls/addSkill.php" class="btn btn-success">Skill hinzufügen</a>
                </div>
                <?php require './moduls/showSkills.php'; ?>

                <div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Projekte</h2>
                    <a href="./moduls/addProject.php" class="btn btn-success">Projekt hinzufügen</a>
                </div>
                <?php require './moduls/showProjects.php'; ?>

                <div class="d-flex justify-content-between align-items-center mt-4">
                    <h2 class="text-white">Technologien</h2>
                    <a href="./moduls/addTechnologie.php" class="btn btn-success">Technologie hinzufügen</a>
                </div>
                <?php require './moduls/showTechnologies.php'; ?>

            </div>
        </div>
    </main>
<?php else: ?>
    <p>hallo</p>

<?php endif; ?>

<?php require_once './structur/footer.php'; ?>