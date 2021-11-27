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

$("#resevation-detial").on("click", function() {
   $(".modal").css("display", "inline-block");
});
 $(".close"). click(function() {
        $(".modal").css("display","none");

});
$(document).click(function (e) {
    if ($(e.target).is(".modal")) {
        $(".modal").css("display","none");
    }

});
$(".review-button").on("click", function() {
   $(".modal-review").css("display", "inline-block");
});
 $(".close-review"). click(function() {
        $(".modal-review").css("display","none");

});
$(document).click(function (e) {
    if ($(e.target).is(".modal-review")) {
        $(".modal-review").css("display","none");
    }

});
});
