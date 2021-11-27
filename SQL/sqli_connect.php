<?php
$servername = "127.0.0.1:3306";
$username = "root";
$password = "Password123!";
$dbname = "camping";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>