<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-type");
require("config.php");

$get_types="SELECT * FROM chart_types";
$result=mysqli_query($conn,$get_types);
$res=array();
while($row=mysqli_fetch_assoc($result)){
    $res[]=$row['type'];
}
echo(json_encode($res));
?>