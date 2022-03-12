<?php
$servername = "fdb33.awardspace.net:3306";
$username = "4062578_main";
$password = 'Password123!';
$dbname = "4062578_main";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>