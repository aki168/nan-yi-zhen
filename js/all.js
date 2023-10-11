$(document).ready(function () {
  let pathId = window.location.pathname.split("/")[1];
  if (pathId.includes("-")) {
    let [_, name, html] = pathId.match(/(\w*)-\w*(\.html)/);
    pathId = `${name}${html}`;
  }
  let navText = document?.getElementById(pathId)?.children[0];
  let navTextEn = document?.getElementById(pathId)?.children[1];
  if (navText) {
    navText.setAttribute(
      "class",
      "font-bold pb-[2px] hover:text-yellow-800 text-yellow-800"
    );
  }
  if (navTextEn) {
    navTextEn.setAttribute("class", "sub-text font-light header-clicked");
  }
  $(".nav--inner").mouseleave((e) => {
    $(".nav--item--detail").hide();
    $(".nav--item--detail--double").hide();
  });
  $(".nav--item").hover(function (e) {
    var detail = $(this).find(".nav--item--detail");
    detail.show();
    $(this).siblings().find(".nav--item--detail").hide();
    $(this).siblings().find(".nav--item--detail--double").hide();
  });
  $(".nav--item--double").hover(function (e) {
    var detail = $(this).find(".nav--item--detail--double");
    detail.show();
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

  $(".portfolio--card").each(function() {
    $(this).hover(() => {
      $(this).find("h3").toggleClass("text-yellow-800");
      $(this).find("p").toggleClass("text-yellow-800");
    });
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

  const detailsOne = Array.from(document.querySelectorAll(".qa-nav-1 details"));
  detailsOne.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const active = detailsOne.find((d) => d.open);
      if (!e.currentTarget.open && active) {
        active.open = false;
      }
    });
  });

  const detailsTwo = Array.from(document.querySelectorAll(".qa-nav-2 details"));
  detailsTwo.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const active = detailsTwo.find((d) => d.open);
      if (!e.currentTarget.open && active) {
        active.open = false;
      }
    });
  });

  const detailsThree = Array.from(document.querySelectorAll(".qa-nav-3 details"));
  detailsThree.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const active = detailsThree.find((d) => d.open);
      if (!e.currentTarget.open && active) {
        active.open = false;
      }
    });
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

  $(".news--card").click(function (e) {
    location.href = `${location.origin}/news-article.html`;
  });

  const newsDetails = Array.from(document.querySelectorAll(".accordion--menu details"));
  console.log(newsDetails);
  newsDetails.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      const active = newsDetails.find((d) => d.open);
      if (!e.currentTarget.open && active) {
        active.open = false;
      }
    });
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
  // 雙表格: 專業文章
  const mainItems = document.querySelector(
    ".nav--item--detail--double--main ul"
  ).children;
  const mainList = Array.from(mainItems);
  const subItems = document.querySelector(".nav--item--detail--double--sub");
  for (let mainItem of mainItems) {
    mainItem.addEventListener("mouseenter", (e) => {
      let idx = mainList.indexOf(e.currentTarget);
      let target = subItems.children[idx];
      Array.from(subItems.children).forEach((item) => item.setAttribute("class", "hidden"));
      if(target){
        target.setAttribute("class", "px-3");
      }
    });
  }

  $(".index--reserve--item").hover(()=>{
    $(this)
    .find("h4")
    .toggleClass("text-yellow-900");
  })
});

window.onload = function () {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");
  if (loading && content){
    setTimeout(() => {
      loading.style.display = "none";
      content.style.display = "block";
    }, 400);
  }
};

// [Layout] -----------------------------------------------------------

const Header = () => {
  return `<header class="nav">
  <nav class="nyz-container flex justify-around md:px-0">
    <a href="index.html" class="nav--logo">
      <img alt="logo" class="hidden" />
    </a>
    <!-- PC menu-->
    <ul class="nav--inner md:flex flex-wrap items-center px-4 hidden gap-2">
      <li class="nav--item">
        <a class="nav--item--link" href="about.html" id="about.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">關於我們</div>
          <div class="text-white sub-text font-light">about</div>
        </a>
        <ul class="nav--item--detail  text-center">
          <li class="nav--item--li">
            <a class="nav--item--link" href="about.html">品牌介紹</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="about-teacher.html">專業師資</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="about-contact.html">聯絡我們</a>
          </li>
        </ul>
      </li>

      <li class="nav--item">
        <a class="nav--item--link" href="portfolio.html" id="portfolio.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡作品</div>
          <div class="text-white sub-text font-light">portfolio</div>
        </a>
        <ul class="nav--item--detail">
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">眉 毛</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">眼 線</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">嘴 唇</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">髮際線</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">除 色</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="portfolio-eyebrown.html">乳 暈</a>
          </li>
        </ul>
      </li>

      <li class="nav--item">
        <a class="nav--item--link" href="price.html" id="price.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">服務價格</div>
          <div class="text-white sub-text font-light">price</div>
        </a>
        <!-- nav--item--detail -->
      </li>

      <li class="nav--item">
        <a class="nav--item--link" href="reserve.html" id="reserve.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">預約與須知</div>
          <div class="text-white sub-text font-light">reserve</div>
        </a>
        <ul class="nav--item--detail">
          <li class="nav--item--li">
            <a class="nav--item--link" href="reserve.html">我要預約</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="reserve.html">術前處理</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="reserve.html">術後處理</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="reserve.html">不適合施作</a>
          </li>
        </ul>
      </li>

      <li class="nav--item">
        <a class="nav--item--link" href="qa.html" id="qa.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">常見問題</div>
          <div class="text-white sub-text font-light">Q&A</div>
        </a>
        <ul class="nav--item--detail">
          <li class="nav--item--li">
            <a class="nav--item--link" href="qa.html">眉 毛</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="qa.html">眼 線</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="qa.html">嘴 唇</a>
          </li>
        </ul>
      </li>

      <li class="nav--item--double">
        <a class="nav--item--link" href="news.html" id="news.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">專業文章</div>
          <div class="text-white sub-text font-light">news</div>
        </a>
        <!-- 雙表格  -->
        <div class="nav--item--detail--double">
          <ul class="flex">
            <li class="nav--item--detail--double--main">
              <ul class="px-2 border-solid border-r border-r-white">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">眉 毛</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">眼 線</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">嘴 唇</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">髮際線</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">乳 暈</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">除 色</a>
                </li>
              </ul>
            </li>
            <li class="nav--item--detail--double--sub">
              <ul class="px-3">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">飄眉</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">霧眉</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">飄霧眉</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">男士眉</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">改眉</a>
                </li>
              </ul>
              <ul class="px-3 hidden">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">眼線A</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">眼線B</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">眼線C</a>
                </li>
              </ul>
              <ul class="px-3 hidden">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">唇A</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">唇B</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">唇C</a>
                </li>
              </ul>
              <ul class="px-3 hidden">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">髮際A</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">髮際B</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">髮際C</a>
                </li>
              </ul>
              <ul class="px-3 hidden">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">AAA</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">BBB</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">CCC</a>
                </li>
              </ul>
              <ul class="px-3 hidden">
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">除色A</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">除色B</a>
                </li>
                <li class="nav--item--li">
                  <a class="nav--item--link" href="news.html">除色C</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>

      <li class="nav--item">
        <a class="nav--item--link" href="class.html" id="class.html">
          <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡課程</div>
          <div class="text-white sub-text font-light">class</div>
        </a>
        <ul class="nav--item--detail">
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">開課時間</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">髮際線專班</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">眉眼唇全科班</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">眉毛專班</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">眼線專班</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">水透唇專班</a>
          </li>
          <li class="nav--item--li">
            <a class="nav--item--link" href="class.html">學員成功實例分享</a>
          </li>
        </ul>
      </li>
    </ul>
    <!-- mobile menu btn-->
    <button
      href="/"
      class="nav--mobile--open md:hidden py-3 px-5 rounded ml-auto hover:opacity-60"
    >
      <i class="fa-solid fa-bars text-white"></i>
    </button>
  </nav>
  <!-- mobile menu -->
  <ul class="hidden text-center items-center px-4 nav--mobile">
    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="about.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">關於我們</div>
        <div class="text-white sub-text font-light">about</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="portfolio.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡作品</div>
        <div class="text-white sub-text font-light">portfolio</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="price.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">服務價格</div>
        <div class="text-white sub-text font-light">price</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="reserve.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">預約與須知</div>
        <div class="text-white sub-text font-light">reserve</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="qa.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">常見問題</div>
        <div class="text-white sub-text font-light">Q&A</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="news.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">專業文章</div>
        <div class="text-white sub-text font-light">news</div>
      </a>
    </li>

    <li class="nav--item py-4 text-xl">
      <a class="nav--item--link" href="class.html">
        <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡課程</div>
        <div class="text-white sub-text font-light">class</div>
      </a>
      <ul class="nav--item--detail--mobile">
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">開課時間</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">髮際線專班</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">眉眼唇全科班</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">眉毛專班</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">眼線專班</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">水透唇專班</a>
        </li>
        <li class="nav--item--li">
          <a class="nav--item--link" href="class.html">學員成功實例分享</a>
        </li>
      </ul>
    </li>
  </ul>
</header>`;
};

const Footer = () => {
  return `<footer class="footer">
  <div class="nyz-container py-10 footer--inner">
    <nav class="md:w-1/2 mx-auto px-3 md:px-0">
      <h2 class="text-3xl py-4 mb-6 cursor-default">
        Nan Yi Zhen
      </h2>
      <ul
        class="flex flex-col md:flex-row flex-wrap gap-1 text-lg md:text-base mb-6 text-center"
      >
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="about.html">關於我們</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="portfolio.html">紋繡作品</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="price.html">服務價格</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="reserve.html">預約&須知</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="qa.html">常見問題</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="news.html">專業文章</a>
        </li>
        <li class="footer--item md:w-[23%]">
          <a class="hover:text-yellow-800 text-start" href="class.html">紋繡課程</a>
        </li>
      </ul>
      <ul
        class="flex flex-col md:flex-row flex-wrap gap-4 text-xs md:text-base mb-4"
      >
        <li class="flex flex-wrap md:w-1/3 gap-1">
          <!-- <i class="fa-solid fa-phone"></i> -->
          <img
            class="object-contain"
            src="images/footer/20230612_南以真紋繡_01-1關於我們_09.png"
            alt="icon"
          />
          <a class="hover:text-yellow-800" href="tel:+886928571472">0928-571-472</a>
        </li>
        <li class="flex flex-wrap md:w-1/2 gap-1">
          <!-- <i class="fa-solid fa-calendar-days"></i> -->
          <img
            class="object-contain"
            src="images/footer/20230612_南以真紋繡_01-1關於我們_11.png"
            alt="icon"
          />
          <a class="hover:text-yellow-800" href="mailto:nanyizhentw@gmail.com">nanyizhentw@gmail.com</a>
        </li>
        <li class="flex flex-wrap gap-1">
          <!-- <i class="fa-solid fa-map-location-dot"></i> -->
          <img
            class="object-contain"
            src="images/footer/20230612_南以真紋繡_01-1關於我們_15.png"
            alt="icon"
          />
          <a class="hover:text-yellow-800" target="_blank" href="https://ppt.cc/fnMZbx">高雄市苓雅區廣州一街122巷6號3樓</a>
        </li>
      </ul>

      <ul class="footer--icons flex flex-col gap-3">
        <li>
          <a class="hover:text-yellow-800" href="tel:+886928571472" class="hover:opacity-75">
            <img
              src="images/footer/phoneIcon.jpg"
              alt="phoneIcon"
              class="rounded-lg drop-shadow-lg"
            />
          </a>
        </li>
        <li>
          <a class="hover:text-yellow-800" href="/" class="hover:opacity-75">
            <img
              src="images/about/LINE_logo.svg.png"
              alt="lineIcon"
              class="rounded-lg drop-shadow-lg h-10 h-10"
            />
          </a>
        </li>
        <li>
          <button class="hover:text-yellow-800 footer--icons--top hover:opacity-75">
            <img
              src="images/footer/topIcon.jpg"
              alt="topIcon"
              class="rounded-lg drop-shadow-lg"
            />
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <div class="footer--end text-center font-light py-2">
    2023 © 南以真 半永久化妝.紋繡
  </div>
</footer> `;
};

const Loading = () => {
  return `    <div class="loading" id="loading">
  <svg
    aria-hidden="true"
    class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-amber-50"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>`;
};

document.getElementById("header-placeholder").innerHTML = Header();
document.getElementById("footer-placeholder").innerHTML = Footer();
// 換頁的圓形 Loading，不需要時可以註解這行:
if (document.getElementById("loading-circle-placeholder")) {
  document.getElementById("loading-circle-placeholder").innerHTML = Loading();
}