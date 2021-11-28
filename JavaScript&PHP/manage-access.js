$(document).ready(function() {
  $("#user-1").on("click", function() {
   $("#user-1-detail").css("display","inline-block");

});
    $("#btn-more").on("click", function() {
        $(".modal-bookings").css("display", "inline-block");
});
    $(".close-booking"). click(function() {
        $(".modal-bookings").css("display","none");

});
$(document).click(function (e) {
    if ($(e.target).is(".modal-bookings")) {
        $(".modal-bookings").css("display","none");
    }

});
  $("#btn-detail").on("click", function() {
       $(".modal-bookings-details").css("display", "inline-block");

});

   $(".close-booking-detail"). click(function() {
        $(".modal-bookings-details").css("display","none");

});
$(document).click(function (e) {
    if ($(e.target).is(".modal-bookings-details")) {
        $(".modal-bookings-details").css("display","none");
    }

});
 $("#btn-delete").on("click", function() {
         $("#user-1-detail").css("display","none");
         $("#profile-1").css("display", "none");
});
});
