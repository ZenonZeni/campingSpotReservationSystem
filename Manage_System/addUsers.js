$(document).ready(function() {
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'Manage_System/addUser.php',
            data: $(this).serialize(),
            success: function(response)
            {

				if(response == 0){
					alert("Please Enter Valid INPUTS | Note: Must fill in all inputs")
				}
				else if(response == 1){
                    alert('Account Created Successfully');
				}
				else{
					alert("Something went wrong creating the account in the query error:" + response);
				}
		  }
      });
     });
});