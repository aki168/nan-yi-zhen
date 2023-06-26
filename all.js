$(document).ready(function () {
  $(".nav--item").hover(function (e) {
    var detail = $(this).find(".nav--item--detail");
    detail.show("slow");
    $(this).siblings().find(".nav--item--detail").hide();
    $(this).siblings().find(".nav--item--detail--double").hide();
  });

  $(".nav--item--double").hover(function (e) {
    var detail = $(this).find(".nav--item--detail--double");
    detail.show("slow");
    $(this).siblings().find(".nav--item--detail").hide();
    $(this).siblings().find(".nav--item--detail--double").hide();
  });

  $(".nav--mobile .nav--item").click(function (e) {
    // e.preventDefault();
    var detail = $(this).find(".nav--item--detail--mobile");
    detail.show("slow");
    $(this).siblings().find(".nav--item--detail--mobile").hide();
  });


  $(".index--reserve--item").hover(function(e){
    var detail = $(this).find("span");
    detail.toggle();
  })

  $(".footer--icons--top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(".nav--mobile--open").click(function () {
    $(".nav--mobile").slideToggle();
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
