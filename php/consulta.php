<?php
    $nombre   = $_POST['usuario'];
    $documento= $_POST['contraseña'];
// datos de conexion
    $server   = 'localhost';
    $user     = 'root';
    $pass     = '';
    $db       = 'consultas_28';

    // $conexion = (mysqli_connect($server,$user,$pass));
    // mysqli_select_db($conexion, $db) or die ("no se encuentra la db");
    // echo 'exito';

$conexion = new mysqli($server,$user,$pass,$db);//hacemos la conexion

// comptobamos si hay conexion
// if($conexion -> connect_error){
//     print ('la conexion fallo');
// }else{
//     die ('conecto');
// }

$sql = "SELECT * FROM usuario WHERE nombre = '$nombre' AND documento = '$documento'";//consulta sql
$consulta = mysqli_query($conexion, $sql) or die (mysqli_error());

if($fila = mysqli_fetch_array($consulta)){
    echo true;
}else{
    echo false;
}

// if(mysqli_fetch_array($consulta) > 0){
//     echo ;
// }else{
//     echo false;
// }


?>

