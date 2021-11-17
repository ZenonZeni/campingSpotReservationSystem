//by:Christopher Nguyen | 216213332
//Login page javascript using AJAX, Jquery and JSON to get credentials and check if valid or not.
function checkCookie() {
  let user = getCookie("username");
  let expireDate = getCookie("expireDate");
  if (user == undefined) {
	console.log("No previous user has been found")
	} 
	else if(user!= undefined){
		alert("Hi " + user + " | " + " Login Expires on: " + expireDate)
	}
	else {
	  console.log("No previous user has been found")
  }
}

function getCookie(attribute) {
	let x = attribute;
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	  for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			
		 var obj = JSON.parse(c.substring(name.length, c.length));
		  if(x == "username"){
		  return obj.username;
		  }
		  else{
			  return obj.expireDate;
		  }
		}
	  }
 // if (document.cookie.length != 0) {
	//  var obj = JSON.parse(document.cookie);
	 // if(x == "username"){
	//	  return obj.username;
	 // }
	 // else{
		  //return obj.expireDate;
	//  }
  //}

}

function setCookie(user, pass, days) {
	eraseCookie();
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
	  
	document.cookie = jsonString + ";" + cookieExpire + ";path=/";  
}

function eraseCookie() {
    document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + location.host;
}

