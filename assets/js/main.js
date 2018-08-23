$(function(){

  //Initialize the bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Scrollreveal
  ScrollReveal().reveal('.project');

  //Bounce the down arrow every 3 seconds
  var bounceArrow = setInterval(function(){
    $("#down-arrow").removeClass("fadeInUp faster");
    $("#down-arrow").toggleClass("bounce");
  }, 1000 * 3);

  // Clear bounce interval when the user scrolls
  $(window).scroll(function() {
    clearInterval(bounceArrow);
  });

});
