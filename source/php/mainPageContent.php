<?
require_once 'connect.php';
require_once 'selectUserInfo.php';
require_once 'lastInWorld.php';

$UI = userInfo($db, $_POST['user_id']);
$images = lastInWorld($db,"''");

$resultClient = array('user'=>$UI[0],'albums'=>$UI[1],'images'=>$images);
echo json_encode($resultClient);