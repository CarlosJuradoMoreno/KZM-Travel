<?php
    abstract class Connection
    {
      private static $db="u800554853_kzm";
      private static $user ="u800554853_kzm";
      private static $pass="123456";
      private static $host="mysql.hostinger.es";

      //user u800554853_kzm
      //pass 123456
      //host mysql.hostinger.es

        public static function connect()        {

          try{
            $connection = new PDO('mysql:host='.self::$host.';dbname='.self::$db, self::$user,self:: $pass);
          }catch(PDOException $e){
            echo "No se ha podido establecer conexion ";
            die ("Error: ". $e->getMessage());
          }
          return $connection;
    }
  }
?>
