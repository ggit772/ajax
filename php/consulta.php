<?php
    $nombre    = $_POST['usuario'];
    $documento = $_POST['contraseña'];
    $opc       = $_POST['opc'];

    //echo $opc;
    
    
// datos de conexion
    $server   = 'localhost'; 
    $user     = 'root';
    $pass     = '';
    $db       = 'grupo_28';

    // $conexion = (mysqli_connect($server,$user,$pass));
    // mysqli_select_db($conexion, $db) or die ("no se encuentra la db");
    // echo 'exito';

$conexion = new mysqli($server,$user,$pass,$db);//hacemos la conexion

switch($opc){

    case 1:
        
        $sql = "SELECT * FROM persona WHERE nombre = '$nombre' AND documento = '$documento'";//consulta sql
        $consulta = mysqli_query($conexion, $sql) or die (mysqli_error());

        if($fila = mysqli_fetch_array($consulta)){
            echo true;
        }else{
            echo false;
        }
        break;
    case 2:
        
        $cel    = $_POST['cel'];
        $direcc = $_POST['direcc'];

        $sql = "INSERT INTO persona (nombre, documento, tel_1, direccion) VALUE ('$nombre', '$documento', '$cel','$direcc')";
        
        $conexion = mysqli_query($conexion, $sql) or die (mysqli_error());
        echo true;

        break;
}//fin de switch
// if(mysqli_fetch_array($consulta) > 0){
//     echo ;
// }else{
//     echo false;
// }


?>

