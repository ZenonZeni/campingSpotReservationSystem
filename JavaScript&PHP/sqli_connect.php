<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "camping"

// Create connection to sql server
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>