$(document).ready(function() {
  $('.nav--item').click(function(e) {
    e.preventDefault();
    $('.nav--item--detail').hide();
    var detail = $(this).find('.nav--item--detail');
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