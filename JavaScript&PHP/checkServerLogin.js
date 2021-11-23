function checkServer() {
	let connection = "false";
	const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      connection = this.responseText;
    };
	xmlhttp.open("GET", "JavaScript&PHP/checkServerConnection.php?");
	xmlhttp.send();
  
	setTimeout(function() {
		if (connection == "true" && checkAccount()==false) {
			window.location.href = "index.html";
		}
	}, 1000);
 }