
$('.carouselMobile').carousel({
    interval: 2500
});

$("#Guidance").click(function() {

    $('html, body').animate({
        scrollTop: $("#GuidanceContent").offset().top - 160
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
