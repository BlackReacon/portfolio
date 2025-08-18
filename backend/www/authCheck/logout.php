<?php
session_start();
session_destroy();
header('Location: /www/authCheck/login.php');
exit;
?>