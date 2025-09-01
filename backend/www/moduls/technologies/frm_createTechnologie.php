<?php
session_start();  
require_once(__DIR__ . './../../config.db.php');

//Check logged in status
if (!isset($_SESSION['eingeloggt'])) {
    header("Location: ./../../authCheck/frm_login.php");
    exit;
}

require_once './../../structure/head.php';

echo '
<div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5 text-center">

                            <?php if ($error): ?>
                                <div class="alert alert-danger"><?php echo htmlspecialchars($error) ?></div>
                            <?php endif; ?>

                            <form method="post" action="./createTechnologie.php">
                                <h2 class="fw-bold mb-2 text-uppercase">Neue Technologie</h2>
                                <p class="text-white-50 mb-5">Bitte fühle alle Felder aus!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label for="title" class="form-label">Name</label>
                                    <input type="text" class="form-control form-control-lg" id="title" name="frm_title" required>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-secondary" onclick="cancel()">Abbrechen</button>
                                    <button data-mdb-button-init data-mdb-ripple-init type="submit" class="btn btn-success">Technologie speichern</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        ';
?>

<script>
    function cancel() {
        window.location.href = './../../index.php';
    };
</script>