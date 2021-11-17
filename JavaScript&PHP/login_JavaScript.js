//by:Christopher Nguyen | 216213332
//Login page javascript using AJAX, Jquery and JSON to get credentials and check if valid or not.
$(document).ready(function() {
    $('#login-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'JavaScript&PHP/login.php',
            data: $(this).serialize(),
            success: function(response)
            {
                var jsonData = JSON.parse(response);

                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.success == "1")
                {
					eraseCookie();
					setCookie(jsonData.username, jsonData.password, 0.001);
                    alert('Valid Credentials! Redirecting to Home Page');
                    window.location.href = "index.html";
                }
                else if(jsonData.success == "2"){
                    alert('Invalid UserName! Please enter correct UserName');
                }
                else if(jsonData.success == "3"){
                    alert('Invalid Password! Please enter correct Password ' + jsonData.passwordErr);
                }
                else if(jsonData.success == "4"){
                  alert('Inavlid Password! Please enter a password');
                }
                else
                {
                    alert('Invalid Credentials! Please enter a correct Username and Password');
                }
           }
       });
     });
});
