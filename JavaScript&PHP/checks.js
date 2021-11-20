function bookNow(){
  let user = getCookie("user");
  if (user != undefined) {
    window.location.href = "Booking.html";
  }
  else{
    alert("You need to log-in - Redirecting");
    window.location.href = "ExampleLogin.html";
  }
}

function pleaseLogin() {
	alert("Please log-in or Create a new account");
}