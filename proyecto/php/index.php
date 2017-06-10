<?php
 	header("Access-Control-Allow-Origin: *");

  $function = $_GET["function"];
  require_once "./Connection.php";


  if($function=="getUsers"){          //GET ALL USERS
    require_once "User.php";
    $data = User::get_users();
    $result = array();
    $result= usersToArray($data);
  echo  json_encode($result);
}
else if($function =="checkUser"){        //checkea login
    require_once "User.php";
    $email= $_GET["email"];
    $pass= $_GET["pass"];
    $data = User::checkUser($email, $pass);
    $result=array($data[0]);
    if($data[0]=="true"){
      $result[1]=oneUsertoArray($data[1]);
    }
    echo json_encode($result);
  }
  else if($function =="checkUserAdmin"){        //checkea login
    require_once "User.php";
    $email= $_GET["email"];
    $pass= $_GET["pass"];
    $data = User::checkUserAdmin($email, $pass);
    $result=array($data[0]);
    if($data[0]=="true"){
      $result[1]=oneUsertoArray($data[1]);
    }
    echo json_encode($result);
  }
  else if($function =="deleteUser"){       //borra User
    require_once "User.php";
    $ID= $_GET["ID"];
    $data = User::deleteUser($ID);
  }
  else if($function =="updateUser"){         //Edita usuario
    require_once "User.php";
    $ID= $_GET["ID"];
    $EMAIL= $_GET["EMAIL"];
    $PASSWORD= $_GET["PASSWORD"];
    $TIPO= $_GET["TIPO"];
    $TELEFONO= $_GET["TELEFONO"];
    $data = User::editUser($ID,$EMAIL,$PASSWORD,$TIPO,$TELEFONO);
    echo json_encode($data);
  }
  else if($function =="getOneUser"){         //Consulta un Usuario
    require_once "User.php";
    $ID= $_GET["ID"];
    $data = User::getOneUser($ID);
    $result = array();
    $result= oneUsertoArray($data);
    echo  json_encode($result);
  }
  else if($function =="registrarUsuario"){
    require_once "User.php";
    $EMAIL= $_GET["EMAIL"];
    $PASSWORD= $_GET["PASSWORD"];
    $TELEFONO= $_GET["TELEFONO"];
    $data = User::registrarUsuario($EMAIL,$PASSWORD,$TELEFONO);
    if($data==false){

    }else{
      
    }


    echo  json_encode($data);
  }
  //confort FUNCTIONS
  else if($function =="getSalidasConfort"){
     require_once "Confort.php";
     $data = Confort::getSalidasConfort();
     $resultado= array();
    foreach($data as $key => $value) {
      $att= array();
      $att["SALIDA"]= $value;
      $resultado[$key]=$att;
   }
    echo  json_encode($resultado); 
  }
  else if($function =="getConfort"){
     require_once "Confort.php";
     $ID= $_GET["ID"];
     $data = Confort::getConfort($ID);
     $salida = oneConforttoArray($data[0]);
      
    echo  json_encode($salida);
  }
  else if($function =="getRandomConfort"){
     require_once "Confort.php";
     $SALIDA= $_GET["SALIDA"];
     $PRECIO= $_GET["PRECIO"];
     $data = Confort::getRandomConfort($SALIDA,$PRECIO);
     if($data==null){
      $salida[0]=false;
     }else{
     $salida = oneConforttoArray($data);
     }
    echo  json_encode($salida);
  }
  else if($function =="reservaConfort"){
    require_once "./Connection.php";
     $connection= Connection::connect();
     $confortID= $_GET["confortID"];
     $userID= $_GET["userID"];
     $notas=$_GET["notas"];
      $query="SELECT * FROM comfort_usuario WHERE ID_USUARIO='$userID' and ID_comfort='$confortID' ";
       $result = $connection->query($query);
        if($result->rowCount() > 0){
      $salida=false;
    }else{
    $salida=true;
    $query="INSERT INTO `comfort_usuario` (`ID_USUARIO`, `ID_comfort`, `NOTAS`) VALUES ('$userID', '$confortID', '$notas');";
       $result = $connection->query($query);
    }
     echo  json_encode($salida);
  }
    else if($function =="listarReservas"){
     require_once "Confort.php";
     $ID= $_GET["ID"];
     $data = Confort::listarReservas($ID);
     $resultado= array();
      foreach($data as $key => $value) {
        $att= array();
        $att["ID"]= $value->getID();
        $att["DESTINO"]= $value->getDESTINO();
        $att["SALIDA"]= $value->getSALIDA();
        $att["PRECIO"]= $value->getPRECIO();
        $resultado[$key]=$att;
    }
   echo  json_encode($resultado);
  }else{
    echo "function not found";
};







//FUNCTIONS
function oneConforttoArray($data){
   $att= array();
     $att["ID"]= $data->getID();
     $att["DESTINO"]= $data->getDESTINO();
     $att["SALIDA"]= $data->getSALIDA();
     $att["PRECIO"]= $data->getPRECIO();
     $result[0] = $att;
   return $result;
}


function  oneUsertoArray($data){
     $att= array();
     $att["ID"]= $data->getID();
     $att["EMAIL"]= $data->getEMAIL();
     $att["PASSWORD"]= $data->getPASSWORD();
     $att["TIPO"]= $data->getTIPO();
     $att["TELEFONO"]= $data->getTELEFONO();
     $result[0] = $att;
   return $result;
}
function  usersToArray($data){
  foreach($data as $key => $value) {
     $att= array();
     $att["ID"]= $value->getID();
     $att["EMAIL"]= $value->getEMAIL();
     $att["PASSWORD"]= $value->getPASSWORD();
     $att["TIPO"]= $value->getTIPO();
     $att["TELEFONO"]= $value->getTELEFONO();
     $result[$key] = $att;
   }
   return $result;
}




 

?>
