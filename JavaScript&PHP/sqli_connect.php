<?php
$servername = "sql5.freemysqlhosting.net:3306";
$username = "sql5476730";
$password = 'Jm6kWQFsyz';
$dbname = "sql5476730";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>