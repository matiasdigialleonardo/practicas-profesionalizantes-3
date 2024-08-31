<?php

include_once( "../database.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$nickname = $object->nickname;
$password = $object->password;

$SQLCode = "SELECT COUNT(*) AS count FROM user WHERE nickname = '$nickname' AND password = '$password'";
$result = $connection->query($SQLCode);
$row = $result->fetch();

if ($row['count'] > 0) {
    $status = array('status' => 'ok', 'description' => 'User found');
} else {
    $status = array('status' => 'error', 'description' => 'Invalid username or password');
}

echo json_encode($status);


?>
