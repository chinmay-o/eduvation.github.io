
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('.carouselMobile').carousel({
    interval: 2500
});

$("#Guidance").click(function() {

    $('html, body').animate({
        scrollTop: $("#GuidanceContent").offset().top - 120
      }, 1000);
});

$("#Counselling").click(function() {

    $('html, body').animate({
        scrollTop: $("#CounsellingContent").offset().top - 160
      }, 1000);
});

$("#Education").click(function() {

    $('html, body').animate({
        scrollTop: $("#EducationContent").offset().top - 160
      }, 1000);
});

$("#Clients").click(function() {

    $('html, body').animate({
        scrollTop: $("#ClientsContent").offset().top - 160
      }, 1000);
});

$(".contact").click(function() {

    $('html, body').animate({
        scrollTop: $(".footer").offset().top - 160
      }, 1000);
});

$(".takeTestOne").click(function() {

    window.location.href = "https://rzp.io/l/mi0fyHW";
});

$(".takeTestTwo").click(function() {

    window.location.href = "https://rzp.io/l/rLLou7v";
});
