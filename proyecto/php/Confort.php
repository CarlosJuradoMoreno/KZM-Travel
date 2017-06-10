<?php
require_once "./Connection.php";

class Confort{

    private $ID;
    private $DESTINO;
    private $SALIDA;
    private $PRECIO;

    function __construct($ID, $DESTINO, $SALIDA, $PRECIO){
      $this->ID=$ID;
      $this->DESTINO=$DESTINO;
      $this->SALIDA=$SALIDA;
      $this->PRECIO=$PRECIO;
    }
     function setID($ID){
        $this->ID=$ID;
    }
    function getID(){
      return $this->ID;
    }

    function setDESTINO($DESTINO){
      $this->DESTINO=$DESTINO;
    }
    function getDESTINO(){
      return $this->DESTINO;
    }
    function setSALIDA($SALIDA){
      $this->SALIDA=$SALIDA;
    }
    function getSALIDA(){
      return $this->SALIDA;
    }
    function setPRECIO($PRECIO){
      $this->PRECIO=$PRECIO;
    }
    function getPRECIO(){
      return $this->PRECIO;
    }

    public static function getSalidasConfort(){
      $connection= Connection::connect();
      $result = $connection->query('SELECT DISTINCT SALIDA FROM comfort WHERE 1 ORDER BY SALIDA');
      $salidas =[];
    while($data = $result->fetchObject()){
      $salidas []= $data->SALIDA;

    }
        return $salidas;
    }

    public static function getConfort($ID){
        $connection= Connection::connect();
        $result = $connection->query("SELECT * FROM comfort WHERE ID=".$ID);
        $salidas =[];
       while($data = $result->fetchObject()){
        $salidas []= new Connectiononfort($data->ID, $data->DESTINO, $data->SALIDA, $data->PRECIO);
        }
            return $salidas;
        }

    public  static function getRandomConfort($SALIDA,$PRECIO){
        $connection= Connection::connect();
        $sql="SELECT * FROM comfort WHERE SALIDA='".$SALIDA."' and PRECIO<".$PRECIO;
        $result = $connection->query($sql);
        $salidas =[];
       while($data = $result->fetchObject()){
        $salidas []= new Confort($data->ID, $data->DESTINO, $data->SALIDA, $data->PRECIO);
        }
        if(count($salidas)==0){
          $resultado=false;
        }else{
          $resultado=$salidas[rand(0,count($salidas))];
        }
            return $resultado;
        }


        public static function listarReservas($ID){
          $connection= Connection::connect();
           $sql="SELECT ID, DESTINO, SALIDA, PRECIO FROM `comfort_usuario` left join comfort on `ID_comfort`=`ID` where `ID_USUARIO` = '$ID'";
             $result = $connection->query($sql);
            while($data = $result->fetchObject()){
             $salidas []= new Confort($data->ID, $data->DESTINO, $data->SALIDA, $data->PRECIO);
          }
          return $salidas;

        }

  
}
  ?>
