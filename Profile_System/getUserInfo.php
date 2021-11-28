<?php
	require_once('sqli_connect.php');
	$username = $_REQUEST["q"];
	$password = "";
	$fname = "";
	$lname = "";
	$email = "";
	$phone = "";
	$gender = "";
	$birthyear ="";
	$birthmonth = "";
	$birthday ="";
	$account_type ="";
	$notifications ="";
	
	$x = '"' . $username. '"';
	$sql = "SELECT username, account_password, account_fname, account_lname, email, phone, gender, birthyear, birthmonth, birthday, account_type, notifications FROM Account
	WHERE username=".$x."";
	
	$result = $conn->query($sql);

	//SQL select
	if ($result->num_rows > 0) {
	// output data of each row
		while($row = $result->fetch_assoc()) {
			if($row["username"] == $username){
				$fname = $row["account_fname"];
				$lname = $row["account_lname"];
				$phone = $row["phone"];
				$email = $row["email"];
				$birthyear = $row["birthyear"];
				$birthmonth = $row["birthmonth"];
				$birthday = $row["birthday"];
				echo json_encode(array('error' => "1", 'username' => $username, 'password' => $password, 'fname' => $fname, 'lname' => $lname, 'email' => $email, 'phone' => $phone,
					  'gender' => $gender, 'birthyear' => $birthyear, 'birthmonth' => $birthmonth, 'birthday' => $birthday, 'account_type' => $account_type, 'notifications' => $notifications));
				$conn->close();
				break;
			}
		}
	} else {

	echo json_encode(array('Error' => "0"));
	}
?>