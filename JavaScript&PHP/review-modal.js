
$(document).ready(function() {
  $(".addreview").click(function() {
    $(".modal-review").css("display","block");
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
