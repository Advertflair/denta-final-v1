let windowWidth = window.innerWidth;

// Open Dental Slider

// Animate on Scroll
AOS.init({
  once: true,
});
$(window).bind("orientationchange", function (event) {
  location.reload(true);
});

// Burger Menus
let menu = document.querySelector(".menu-lines");
let menuSec = document.querySelector(".overall-menus");
let overlay = document.querySelector(".overlay");
function burgerMenus(e) {
  e.target.classList.toggle("menu-active");
  if (e.target.classList.contains("menu-active")) {
    menuSec.classList.add("slide-in");
    overlay.classList.add("d-block");
  } else {
    menuSec.classList.remove("slide-in");
    overlay.classList.remove("d-block");
  }
}
menu.addEventListener("click", burgerMenus);

// Header Scroll
let navigations = document.querySelector("nav");

document.querySelector(".banner,.headline").style.marginTop = `${
  navigations.clientHeight - 6
}px`;
function header() {
  if (scrollY > 50) {
    navigations.classList.add("fix-active");
    document
      .querySelector(".logo img")
      .setAttribute("src", "./assets/images/denta-logo.svg");
  } else {
    navigations.classList.remove("fix-active");
    document
      .querySelector(".logo img")
      .setAttribute("src", "./assets/images/denta-logo-white.svg");
  }
}
header();
function fixedHeader(e) {
  header();
}
window.addEventListener("scroll", fixedHeader);

// Review Slider
var reviewSlider = new Swiper(".review-slider", {
  slidesPerView: "1.5",
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    999: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    640: {
      navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
      },
    },
    320: {
      slidesPerView: "1",
      spaceBetween: 20,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
      },
    },
  },
});

// Accordion
let accordionTab = $(".accordion .accordion-title");
accordionTab.each(function (index, ele) {
  if ($(ele).hasClass("active")) {
    $(ele).parent().find("img").attr("src", "./assets/images/minus.svg");
    $(ele).parent().find(".accordion-copy").slideToggle();
    setTimeout(function () {
      tabSlider.update();
    }, 500);
  }
  $(ele).click(function (e) {
    // tabSlider.update();

    $(ele).toggleClass("active");
    $(ele).parent().find(".accordion-copy").slideToggle();
    setTimeout(function () {
      tabSlider.update();
    }, 500);
    if ($(ele).hasClass("active")) {
      $(ele).parent().find("img").attr("src", "./assets/images/minus.svg");
    } else {
      $(ele).parent().find("img").attr("src", "./assets/images/add.svg");
    }
  });
});

// Hash

$(".drop-tree > a").click(function (e) {
  // e.preventDefault();
});
$(".drop-arrow svg").click(function (e) {
  e.preventDefault();
  $(".drop").slideToggle(1000);
  $(this).toggleClass("rotate");
});
