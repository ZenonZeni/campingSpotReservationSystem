function showAccProfile(){
	document.getElementById("login").innerHTML = "PROFILE";
	document.getElementById("login").href ="ProfilePage.html";
}

function hideAccProfile(){
	document.getElementById("login").innerHTML = "LOGIN";
	document.getElementById("login").href ="ExampleLogin.html";
}

function manageAccess(){
	let user = getCookie("user");
	if(user == undefined){
	}
	else if(user.accountType == "A"){
		window.location.href = "manage-access.html";
	}
	else{
		alert("You don't have account privileges to access this");
	}
}