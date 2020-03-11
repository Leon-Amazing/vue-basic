<?php

header('Content-type: text/html', 'charset: utf-8');
error_reporting(0);


$username = $_GET['username'];
$age = $_GET['age'];
$pwd = $_GET['pwd'];

echo '你的名字是'.$username.'，你的年龄是：'.$age.'，密码是：'.$pwd;
?>
