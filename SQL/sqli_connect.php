<?php
$servername = "1ocalhost:3306";
$username = "root@localhost";
$password = "Password123!";
$dbname = "camping";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>