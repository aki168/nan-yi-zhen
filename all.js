$(document).ready(function () {
  $(".nav--item").hover(function (e) {
    var detail = $(this).find(".nav--item--detail");
    detail.show("slow");
    $(this).siblings().find(".nav--item--detail").hide();
  });

  $(".nav--mobile .nav--item").click(function (e) {
    e.preventDefault();
    var detail = $(this).find(".nav--item--detail--mobile");
    detail.slideToggle();
  });

  $(".index--reserve--item").hover(function(e){
    var detail = $(this).find("span");
    detail.toggle();
  })

  $(".footer--icons--top").click(function () {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });

  $(".nav--mobile--open").click(function () {
    $(".nav--mobile").slideToggle();
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
