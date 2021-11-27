<?php
	
	require_once('sqli_connect.php');
	
	$username = "";
	$fname = $_POST["firstname"];
	$lname = $_POST["lastname"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$account_password = $_POST["password"];
	$birthyear = $_POST["birthyear"];
	$birthmonth = $_POST["birthmonth"];
	$birthday = $_POST["birthday"];
	$gender = $_POST["gender"];
	$account_type = "c";
	
	$username = $email;
	
	
	if($fname == "" or $lname == "" or $email == "" or $phone == "" or $account_password == "" or $birthyear == "0" or $birthmonth == "0" or $birthday == "0" or $gender == "0"){
		$error[]= $fname;
		$error[]= $lname;
		$error[]= $email;
		$error[]= $phone;
		$error[]= $account_password;
		$error[]= $birthyear;
		$error[]= $birthmonth;
		$error[]= $birthday;
		$error[]= $gender;
		echo json_encode(array('success' => 0, 'error' => $error));
		//'Please Enter Valid INPUTS | Note: Must fill in all in registration page'
	}
	else{
		$sql = "INSERT INTO Account (username,account_fname,account_lname,email,phone,account_password,gender,birthyear,birthmonth,birthday,account_type) 
		VALUES ('".$email."','".$fname."','".$lname."','".$email."','".$phone."','".$account_password."','".$gender."','".$birthyear."','".$birthmonth."','".$birthday."','C');";
		
		if ($conn->query($sql) === TRUE) {
		  echo json_encode(array('success' => 1));
		  //New record created successfully
		} else {
			$errortype = $sql;
			$errorText = $conn->error;
			echo json_encode(array('success' => 2 ,'error' => $errortype, 'errorText' => $errorText));
		}
	}

	$conn->close();

?>