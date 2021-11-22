
$(document).ready(function() {
  $(".myBtn").click(function() {
    $(".modal").css("display","block");
  });
    $(".close"). click(function() {
        $(".modal").css("display","none");



});
$('body').click(function (event)
{
   if(!$(event.target).closest(".myBtn").length && !$(event.target).is(".myBtn")) {
     $(".modal").css("display","none");
   }
});
});
