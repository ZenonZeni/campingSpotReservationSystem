$(document).ready(function() {
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'SQL/addUser.php',
            data: $(this).serialize(),
            success: function(response)
            {
                var jsonData = JSON.parse(response);

				if(jsonData.success == 0){
					var error ="";
					for (var i = 0; i<jsonData.error.length; i++){
						error = error + " " + jsonData.error[i];
					}
					alert("Please Enter Valid INPUTS | Note: Must fill in all in registration page" + " error: " + error)
				}
				else if(jsonData.success == 1){
					eraseUser();
                    alert('Account Created Successfully, Please Login before proceeding');
                    window.location.href = "exampleLogin.html";
				}
				else if(jsonData.success == 2) {
					alert("Something went wrong creating the account in the query error:" + jsonData.error + " " + jsonData.errorText);
				}
				else{
					alert("Server is not responding");
				}
		  }
      });
     });
});