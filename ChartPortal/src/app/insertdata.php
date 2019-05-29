<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-type");
$db="chartdata";
$host="localhost";
$pass="";
$user="root";
$conn=mysqli_connect($host,$user,$pass,$db);
$request=json_decode(file_get_contents("php://input"));
$datasets=json_decode($request->datasets);
$chartid=$request->chartid;//ChartID,ValueX,ValueY
foreach ($datasets as $data) 
{
    $X=$data->x;
    $Y=$data->y;
    $insert_data="INSERT INTO userdata VALUES($chartid,$X,$Y)";
    if(!(mysqli_query($conn,$insert_data))){
        echo(json_encode($X));
    }
}
mysqli_close($conn);
?>






