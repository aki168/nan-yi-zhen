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

  $(".index--reserve--item").hover(function (e) {
    var detail = $(this).find("span");
    detail.toggle();
  });

  $(".footer--icons--top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(".nav--mobile--open").click(function () {
    $(".nav--mobile").slideToggle();
  });

  $(".reserve-nav li").click(function (e) {
    $(this).addClass("border-b-yellow-800/50 text-yellow-800");
    $(this).siblings().removeClass("border-b-yellow-800/50 text-yellow-800");
    let currentId = e.currentTarget.id;
    let panes = $(".reserve-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });

  $(".about-nav li").click(function (e) {
    $(this).addClass("border-b-yellow-800/50 text-yellow-800");
    $(this).siblings().removeClass("border-b-yellow-800/50 text-yellow-800");
    let currentId = e.currentTarget.id;
    let panes = $(".about-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });

  $(".portfolio-eyebrown-nav li").click(function (e) {
    $(this).addClass("border-b-yellow-800/50 text-yellow-800");
    $(this).siblings().removeClass("border-b-yellow-800/50 text-yellow-800");
    let currentId = e.currentTarget.id;
    let panes = $(".portfolio-eyebrown-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });

  $(".qa-nav li").click(function (e) {
    $(this).addClass("border-b-yellow-800/50 text-yellow-800");
    $(this).siblings().removeClass("border-b-yellow-800/50 text-yellow-800");
    let currentId = e.currentTarget.id;
    let panes = $(".qa-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });

  $(".class-nav li").click(function (e) {
    $(this).addClass("border-b-yellow-800/50 text-yellow-800");
    $(this).siblings().removeClass("border-b-yellow-800/50 text-yellow-800");
    let currentId = e.currentTarget.id;
    let panes = $(".class-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });

  $(".news-nav details").click(function (e) {
    $(this)
      .find("summary")
      .addClass("border-solid border-b border-b-yellow-800/50");
    $(this)
      .siblings()
      .find("summary")
      .removeClass("border-solid border-b border-b-yellow-800/50");

    if (e.currentTarget.tagName === "DETAILS") {
      $(this).siblings().find(".news-nav-btn").removeClass("fa-angle-up");
      $(this).find(".news-nav-btn").toggleClass("fa-angle-up");
      // $(this).siblings().attr("open", false);
      // $(this).attr("open", true);
    }

    let currentId = e.currentTarget.id;
    let panes = $(".news-pane").children();
    if (panes) {
      for (i = 0; i < panes.length; i++) {
        if (panes[i].classList.contains(currentId)) {
          panes[i].classList.remove("hidden");
          panes[i].classList.add("block");
        } else {
          panes[i].classList.add("hidden");
        }
      }
    }
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
