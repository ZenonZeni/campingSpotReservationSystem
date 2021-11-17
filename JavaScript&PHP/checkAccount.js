//by:Christopher Nguyen | 216213332
//Login page javascript using AJAX, Jquery and JSON to get credentials and check if valid or not.
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
	  console.log("No previous user has been found")
     //user = prompt("Please enter your name:","");
     //if (user != "" && user != null) {
       //setCookie("username", user, 30);
     //}
  }
}

function getCookie(pass) {
  let username = pass + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(username) == 0) {
      return c.substring(username.length, c.length);
    }
  }
  return "";
}

function getPassword(pass) {
  let password = pass + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(password) == 0) {
      return c.substring(password.length, c.length);
    }
  }
  return "";
}
