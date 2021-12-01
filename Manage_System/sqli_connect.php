<?php
$servername = "remotemysql.com:3306";
$username = "JSBoJ3Pjgp";
$password = 'Ox6qU96aFL';
$dbname = "JSBoJ3Pjgp";

// Create connection to sql server
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>