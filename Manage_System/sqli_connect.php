<?php
$servername = "database-1.cswynyoi30d6.us-east-2.rds.amazonaws.com:3306";
$username = "campingspot";
$password = 'password123!';
$dbname = "campingSpotSystem";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>