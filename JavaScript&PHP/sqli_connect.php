<?php
$servername = "database-1.cswynyoi30d6.us-east-2.rds.amazonaws.com:3306";
$username = "admin";
$password = 'Akt3587VeXRBAv#j';
$dbname = "campingSpotSystem";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>