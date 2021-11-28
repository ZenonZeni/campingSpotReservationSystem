function bookNow(){
  let user = getCookie("user");
  if (user != undefined) {
    window.location.href = "Booking.html";
  }
  else{
    pleaseLogin();
    window.location.href = "ExampleLogin.html";
  }
}

function pleaseLogin() {
	alert("Please log-in or Create a new account");
}