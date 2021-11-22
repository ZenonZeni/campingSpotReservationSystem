
$(document).ready(function() {
  $(".myBtn").click(function() {
    $(".modal").css("display","block");
  });
    $(".close"). click(function() {
        $(".modal").css("display","none");



});
$(document).click(function (e) {
    if ($(e.target).is(".modal")) {
        $(".modal").css("display","none");
    }

});
});
