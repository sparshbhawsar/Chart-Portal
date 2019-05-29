<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-type");

require('config.php');

$userdata=json_decode(file_get_contents("php://input"));  
$pass=hash('sha512',$userdata->password);
$username=$userdata->username;
$result=new \StdClass();

$check_user_exists="SELECT count(*),userID FROM users WHERE userName='$username' AND password='$pass'";
$res=mysqli_fetch_assoc(mysqli_query($conn,$check_user_exists));
if(($res)['count(*)']==1){
    $result->logged_in=true;
    $result->userID=$res['userID'];
}else{
    $result->logged_in=false;
}
echo(json_encode($result));
mysqli_close($conn);
?>