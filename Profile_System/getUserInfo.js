
var username = "";
var password = "";
var firstname ="";
var lastname ="";
var email ="";
var phone = "";
var gender = "";
var birthyear ="";
var birthmonth= "";
var birthday ="";
var account_type ="";
var notifications ="";

function getUserInfo(){
	var jsonData;
	username = getCookie("user").username;
	const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
       jsonData = JSON.parse(this.responseText);
	   if (jsonData.error == "0") {
			alert("Couldn't find data");
	   }
	   else{
			username = jsonData.username;
		   password = jsonData.password;
		   firstname = jsonData.fname;
		   lastname = jsonData.lname;
		   email = jsonData.email;
		   phone = jsonData.phone;
		   gender = jsonData.gender;
		   birthyear = jsonData.birthyear;
		   birthmonth = jsonData.birthmonth;
		   birthday = jsonData.birthday;
		   account_type = jsonData.account_type;
		   notifications = jsonData.notifications;
	   }
    };
	xmlhttp.open("GET", "Profile_System/getUserInfo.php?q=" + username);
	xmlhttp.send();
  
	setTimeout(function() {
		document.getElementById("firstName").value = firstname;
		document.getElementById("lastName").value = lastname;
		document.getElementById("email").value = email;
		document.getElementById("phone").value = phone;
		document.getElementById("birthyear").value = birthyear;
		document.getElementById("birthmonth").value = birthmonth;
		document.getElementById("birthday").value = birthday;
	}, 500);
}

function setAccountSettings(firstname, lastname, email, phone) {
	//code
}

function setPassword(oldP, newP, confirmation) {
	//code
}
