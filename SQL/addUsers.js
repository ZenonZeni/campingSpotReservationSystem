$(document).ready(function() {
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'SQL/addUser.php',
            data: $(this).serialize(),
            success: function(response)
            {

				if(response == 0){
					alert("Please Enter Valid INPUTS | Note: Must fill in all in registration page")
				}
				else if(response == 1){
					eraseUser();
                    alert('Account Created Successfully, Please Login before proceeding');
                    window.location.href = "exampleLogin.html";
				}
				else{
					alert("Something went wrong creating the account in the query error:" + response);
				}
		  }
      });
     });
});