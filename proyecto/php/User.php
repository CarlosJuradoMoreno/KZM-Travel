<?php
require_once "./Connection.php";

class User{

    private $ID;
    private $EMAIL;
    private $PASSWORD;
    private $TIPO;
    private $TELEFONO;

    function __construct($ID, $EMAIL, $PASSWORD, $TIPO, $TELEFONO){
      $this->ID=$ID;
      $this->EMAIL=$EMAIL;
      $this->PASSWORD=$PASSWORD;
      $this->TIPO=$TIPO;
      $this->TELEFONO=$TELEFONO;

    }

    function setID($ID){
        $this->ID=$ID;
    }
    function getID(){
      return $this->ID;
    }

    function setEMAIL($EMAIL){
      $this->EMAIL=$EMAIL;
    }
    function getEMAIL(){
      return $this->EMAIL;
    }

    function setPASSWORD($PASSWORD){
      $this->PASSWORD=$PASSWORD;
    }
    function getPASSWORD(){
      return $this->PASSWORD;
    }

    function setTIPO($TIPO){
      $this->TIPO=$TIPO;
    }
    function getTIPO(){
      return $this->TIPO;
    }

    function setTELEFONO($TELEFONO){
      $this->TELEFONO=$TELEFONO;
    }
    function getTELEFONO(){
      return $this->TELEFONO;
    }


    public static function get_users(){
      $connection= Connection::connect();
      $result = $connection->query('SELECT * FROM usuario');

      $users =[];

    while($data = $result->fetchObject()){
      $users []= new User($data->ID, $data->EMAIL, $data->PASSWORD, $data->TIPO, $data->TELEFONO);

    }
        return $users;
    }

    public static function checkUser($email, $pass){
      $connection= Connection::connect();
      $query="SELECT * FROM usuario WHERE EMAIL='$email'";
      $result = $connection->query($query);
      $response=array("false");
      if($result->rowCount() > 0){
        while($data = $result->fetchObject()){
          $users []= new User($data->ID, $data->EMAIL, $data->PASSWORD, $data->TIPO, $data->TELEFONO);
        }
        if($users[0]->getPASSWORD()==$pass){ 
          $response[0]="true";
          $response[1]=$users[0];
        }
      }
      return $response;
    }

    public static function checkUserAdmin($email,$pass){
      $connection= Connection::connect();
      $query="SELECT * FROM usuario WHERE EMAIL='$email'";
      $result = $connection->query($query);
      $response=array("false");
      if($result->rowCount() > 0){
        while($data = $result->fetchObject()){
          $users []= new User($data->ID, $data->EMAIL, $data->PASSWORD, $data->TIPO, $data->TELEFONO);
        }
        if($users[0]->getPASSWORD()==$pass){
          if($users[0]->getTIPO()=="3"){
          $response[0]="true";
          $response[1]=$users[0];
          }
        }
      }
      return $response;
    }

    public static function deleteUser($ID){
        $connection= Connection::connect();
        $query="DELETE FROM usuario WHERE ID='$ID'";

        $result = $connection->query($query);

    }

    public static function editUser($ID,$EMAIL,$PASSWORD,$TIPO,$TELEFONO){
      $connection= Connection::connect();
      $done="true";
      $query="UPDATE `usuario` SET EMAIL='$EMAIL',PASSWORD='$PASSWORD',TIPO='$TIPO',TELEFONO='$TELEFONO' WHERE ID='$ID'";

      $result = $connection->query($query);
      return $done;

    }

    public static function getOneUser($ID){
      $connection= Connection::connect();
      $query="SELECT * FROM usuario WHERE ID='$ID'";
      $result = $connection->query($query);
      if($result->rowCount() > 0){
        while($data = $result->fetchObject()){
          $users []= new User($data->ID, $data->EMAIL, $data->PASSWORD, $data->TIPO, $data->TELEFONO);
      }
      return $users[0];
    }
  }


  public static function registrarUsuario($EMAIL, $PASSWORD, $TELEFONO){
     $connection= Connection::connect();
      $query="SELECT * FROM usuario WHERE EMAIL='$EMAIL' and PASSWORD='$PASSWORD' and TIPO='1' and TELEFONO='$TELEFONO'";
      $result = $connection->query($query);
      if($result->rowCount() > 0){
        $data=false;
      }else{
      $query="INSERT INTO `usuario` (`ID`, `EMAIL`, `PASSWORD`, `TIPO`, `TELEFONO`) VALUES (NULL, '$EMAIL', '$PASSWORD', '1', '$TELEFONO')";
      $result = $connection->query($query);
      
      $query="SELECT * FROM usuario WHERE EMAIL='$EMAIL' and PASSWORD='$PASSWORD' and TIPO='1' and TELEFONO='$TELEFONO'";
      $result = $connection->query($query);
      $data = $result->fetchObject();

      }

      return $data;
  }
}
  ?>
