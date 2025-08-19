<?php
session_start();
session_destroy();
header('Location: ../authCheck/login.php');
exit;
?>