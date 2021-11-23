$(document).ready(function() {
  $("#account-button").on("click",function(){

    $("#account-setting").css("display","inline-block");
    $("#password-setting").css("display","none");
    $("#notification-setting").css("display","none");
    $("#reservation-setting").css("display","none");
});
 $("#password-button").on("click",function(){

    $("#account-setting").css("display","none");
    $("#password-setting").css("display","inline-block");
    $("#notification-setting").css("display","none");
    $("#reservation-setting").css("display","none");
});
$("#notification-button").on("click",function(){

    $("#account-setting").css("display","none");
    $("#password-setting").css("display","none");
    $("#notification-setting").css("display","inline-block");
    $("#reservation-setting").css("display","none");
});

$("#reservation-button").on("click",function(){

    $("#account-setting").css("display","none");
    $("#password-setting").css("display","none");
    $("#notification-setting").css("display","none");
    $("#reservation-setting").css("display","inline-block");
});
});
