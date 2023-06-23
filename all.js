$(document).ready(function() {
  $('.nav--item').click(function(e) {
    e.preventDefault();
    var detail = $(this).find('.nav--item--detail');
    detail.slideToggle();
  });

  $('.nav--mobile .nav--item').click(function(e) {
    e.preventDefault();
    var detail = $(this).find('.nav--item--detail--mobile');
    detail.slideToggle();
  });

  $(".footer--icons--top").click(function(){
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 2000);
  });

  $(".nav--mobile--open").click(function(){
    $(".nav--mobile").slideToggle();
  })
});