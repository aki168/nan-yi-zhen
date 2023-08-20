$(document).ready(function () {
  $(".nav--inner").mouseleave((e) => {
    $(".nav--item--detail").hide();
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

// window.onload = function() {
//   const loading = document.getElementById('loading');
//   const content = document.getElementById('content');
//   setTimeout(()=>{
//     loading.style.display = 'none';
//     content.style.display = 'block';
//   }, 400)
// };

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});


// [Layout] -----------------------------------------------------------

const Header = () => {
  return ` <header class="nav">
          <nav class="nyz-container flex px-4 md:px-0">
            <a href="index.html">
              <img src="images/index/logo.png" alt="logo" class="nav--logo" />
            </a>
            <!-- PC menu-->
            <ul class="nav--inner md:flex flex-wrap items-center px-4 hidden">
              <li class="nav--item">
                <a class="nav--item--link" href="about.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    關於我們
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    about
                  </div>
                </a>
                <ul class="nav--item--detail">
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="about.html">品牌介紹</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="about.html">專業師資</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="about-contact.html"
                      >聯絡我們</a
                    >
                  </li>
                </ul>
              </li>
    
              <li class="nav--item">
                <a class="nav--item--link" href="portfolio.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    紋繡作品
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    portfolio
                  </div>
                </a>
                <ul class="nav--item--detail">
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >眉毛</a
                    >
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >眼線</a
                    >
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >嘴唇</a
                    >
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >髮際線</a
                    >
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >除色</a
                    >
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="portfolio-eyebrown.html"
                      >乳暈</a
                    >
                  </li>
                </ul>
              </li>
    
              <li class="nav--item">
                <a class="nav--item--link" href="price.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    服務價格
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    price
                  </div>
                </a>
                <!-- nav--item--detail -->
              </li>
    
              <li class="nav--item">
                <a class="nav--item--link" href="reserve.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    預約與須知
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    reserve
                  </div>
                </a>
                <ul class="nav--item--detail">
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="reserve.html">我要預約</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="reserve.html">術前處理</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="reserve.html">術後處理</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="reserve.html">不適合施作</a>
                  </li>
                </ul>
              </li>
    
              <li class="nav--item">
                <a class="nav--item--link" href="qa.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    常見問題
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    Q&A
                  </div>
                </a>
                <ul class="nav--item--detail">
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="qa.html">眉 毛</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="qa.html">眼 線</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="qa.html">嘴 唇</a>
                  </li>
                </ul>
              </li>
    
              <li class="nav--item--double">
                <a class="nav--item--link" href="news.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    專業文章
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    news
                  </div>
                </a>
                <!-- 雙表格  -->
                <div class="nav--item--detail--double">
                  <ul class="flex">
                    <li class="nav--item--detail--double--main w-1/2">
                      <ul class="px-2 border-solid border-r border-r-white">
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">眉 毛</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">眼 線</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">嘴 唇</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">髮際線</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">乳 暈</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">除 色</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav--item--detail--double--sub w-1/2">
                      <ul class="px-3">
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">飄眉</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">霧眉</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">飄霧眉</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">男士眉</a>
                        </li>
                        <li
                          class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                        >
                          <a class="nav--item--link" href="news.html">改眉</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
    
              <li class="nav--item">
                <a class="nav--item--link" href="class.html">
                  <div class="font-bold pb-[2px] hover:text-yellow-800">
                    紋繡課程
                  </div>
                  <div
                    class="text-white sub-text font-light hover:text-yellow-800/50"
                  >
                    class
                  </div>
                </a>
                <ul class="nav--item--detail">
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">開課時間</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">髮際線專班</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">眉眼唇全科班</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">眉毛專班</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">眼線專班</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html">水透唇專班</a>
                  </li>
                  <li
                    class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                  >
                    <a class="nav--item--link" href="class.html"
                      >學員成功實例分享</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <!-- mobile menu btn-->
            <button
              href="/"
              class="nav--mobile--open md:hidden border border-white py-0 px-5 rounded ml-auto hover:opacity-60"
            >
              <i class="fa-solid fa-bars text-white"></i>
            </button>
          </nav>
          <!-- mobile menu -->
          <ul class="hidden text-center items-center px-4 nav--mobile">
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="about.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">關於我們</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  about
                </div>
              </a>
              <ul class="nav--item--detail--mobile">
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="about.html">品牌介紹</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="about.html">專業師資</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="about-contact.html">聯絡我們</a>
                </li>
              </ul>
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="portfolio.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡作品</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  portfolio
                </div>
              </a>
              <ul class="nav--item--detail--mobile">
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html">眉毛</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html">眼線</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html">嘴唇</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html"
                    >髮際線</a
                  >
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html">除色</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="portfolio-eyebrown.html">乳暈</a>
                </li>
              </ul>
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="price.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">服務價格</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  price
                </div>
              </a>
              <!-- nav--item--detail--mobile -->
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="reserve.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">
                  預約與須知
                </div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  reserve
                </div>
              </a>
              <ul class="nav--item--detail--mobile">
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="reserve.html">我要預約</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="reserve.html">術前處理</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="reserve.html">術後處理</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="reserve.html">不適合施作</a>
                </li>
              </ul>
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="qa.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">常見問題</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  Q&A
                </div>
              </a>
              <ul class="nav--item--detail--mobile">
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="qa.html">眉毛</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="qa.html">眼線</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="qa.html">嘴唇</a>
                </li>
              </ul>
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="news.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">專業文章</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  news
                </div>
              </a>
              <!-- 雙表格  -->
            </li>
    
            <li class="nav--item py-4 text-xl">
              <a class="nav--item--link" href="class.html">
                <div class="font-bold pb-[2px] hover:text-yellow-800">紋繡課程</div>
                <div
                  class="text-white sub-text font-light hover:text-yellow-800/50"
                >
                  class
                </div>
              </a>
              <ul class="nav--item--detail--mobile">
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">開課時間</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">髮際線專班</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">眉眼唇全科班</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">眉毛專班</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">眼線專班</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">水透唇專班</a>
                </li>
                <li
                  class="border-solid border-b border-b-white/0 hover:border-b hover:border-b-yellow-800/50 hover:text-white mb-2 py-1"
                >
                  <a class="nav--item--link" href="class.html">學員成功實例分享</a>
                </li>
              </ul>
            </li>
          </ul>
        </header>`;
};

const Footer = () => {
  return(`<footer class="footer">
    <div class="nyz-container py-10 footer--inner">
      <nav class="md:w-1/2 mx-auto px-6 md:px-0">
        <h2 class="text-3xl py-4 mb-6 text-center md:text-start">
          Nan Yi Zhen
        </h2>
        <ul
          class="flex flex-col md:flex-row flex-wrap gap-1 text-lg md:text-base mb-6 text-center md:text-start"
        >
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="about.html">關於我們</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="portfolio.html">紋繡作品</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="price.html">服務價格</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="reserve.html">預約&須知</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="qa.html">常見問題</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="news.html">專業文章</a>
          </li>
          <li class="footer--item md:w-[23%]">
            <a class="hover:opacity-70" href="class.html">紋繡課程</a>
          </li>
        </ul>
        <ul
          class="flex flex-col md:flex-row flex-wrap gap-4 text-lg md:text-base mb-4"
        >
          <li class="flex flex-wrap md:w-1/3 gap-2">
            <!-- <i class="fa-solid fa-phone"></i> -->
            <img
              class="object-contain"
              src="images/footer/20230612_南以真紋繡_01-1關於我們_09.png"
              alt="icon"
            />
            <a href="/">0928-571-472</a>
          </li>
          <li class="flex flex-wrap md:w-1/2 gap-2">
            <!-- <i class="fa-solid fa-calendar-days"></i> -->
            <img
              class="object-contain"
              src="images/footer/20230612_南以真紋繡_01-1關於我們_11.png"
              alt="icon"
            />
            <a href="/">nanyizhentw@gmail.com</a>
          </li>
          <li class="flex flex-wrap gap-2">
            <!-- <i class="fa-solid fa-map-location-dot"></i> -->
            <img
              class="object-contain"
              src="images/footer/20230612_南以真紋繡_01-1關於我們_15.png"
              alt="icon"
            />
            <a href="/">高雄市苓雅區廣州一街122巷6號3樓</a>
          </li>
        </ul>

        <ul class="footer--icons flex flex-col gap-3">
          <li>
            <a href="/" class="hover:opacity-75">
              <img
                src="images/footer/phoneIcon.jpg"
                alt="phoneIcon"
                class="rounded-lg drop-shadow-lg"
              />
            </a>
          </li>
          <li>
            <a href="/" class="hover:opacity-75">
              <img
                src="images/footer/lineIcon.jpg"
                alt="phoneIcon"
                class="rounded-lg drop-shadow-lg"
              />
            </a>
          </li>
          <li>
            <a href="/" class="hover:opacity-75">
              <img
                src="images/footer/chatIcon.jpg"
                alt="phoneIcon"
                class="rounded-lg drop-shadow-lg"
              />
            </a>
          </li>
          <li>
            <a href="/" class="footer--icons--top hover:opacity-75">
              <img
                src="images/footer/topIcon.jpg"
                alt="phoneIcon"
                class="rounded-lg drop-shadow-lg"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer--end text-center font-light py-2">
      2023 © 南以真 半永久化妝.紋繡
    </div>
  </footer> `)
};

document.getElementById("header-placeholder").innerHTML = Header();
document.getElementById("footer-placeholder").innerHTML = Footer();