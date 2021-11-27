//by:Christopher Nguyen | 216213332
//Login page javascript using AJAX, Jquery and JSON to get credentials and check if valid or not.
function checkCookie() {
  let user = getCookie("user");
  if (user == undefined) {
	hideAccProfile();
	console.log("No previous user has been found");
	} 
	else if(user!= undefined){
		showAccProfile();
		alert("Hi " + user.username + " | " + " Login Expires on: " + user.expireDate);
	}
	else {
	  console.log("No previous user has been found");
  }
}

function checkAccount() {
	let user = getCookie("user");
  if (user == undefined) {
      return false;
	}
  else{
    return true;
  }
}

function getCookie(attribute) {
	let x = attribute + "=";
	let input = attribute;
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	if (document.cookie!= ""){
	  for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		console.log(ca[i]);
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		console.log(c.indexOf(x));
		if (c.indexOf(x) == 0) {
		console.log(c.substring(x.length, c.length));
		 var obj = JSON.parse(c.substring(x.length, c.length));
		 
		  if(input == "user"){
				console.log("user= " + obj.username);
				console.log("expireDate" + obj.expireDate);
				return obj;
		  }	  
		}
	  }
	  }
	else{
			return undefined;
	}
}

function setCookie(user, pass, days) {
	eraseUser();
    var obj = {};//Creating custom object
	var expires = "";
	if (days!= 0){
		var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = date.toUTCString();
		cookieExpire = "expires=" + date.toUTCString();
	}
    obj.username = user;
    obj.password = pass;
	obj.expireDate = expires;
  
	//Converting JavaScript object to JSON string      
	var jsonString = JSON.stringify(obj);  
	  
	document.cookie = "user" + "=" + jsonString + ";" + "name=userInfo" + ";" + cookieExpire + ";path=/";  
}

function eraseCookie(cookieName) {
    document.cookie = cookieName+'=; Max-Age=0; path=/; domain=' + location.host;
}

function eraseUser() {
    document.cookie = 'user=; Max-Age=0; path=/; domain=' + location.host;
}

