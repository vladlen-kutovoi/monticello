document.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  runHeroSlider();
  runNewsSlider();
  runGalleryPopup();
});

function toggleMobileMenu() {
  const NAV = document.querySelector('.header__nav');
  const MENU_BUTTON = NAV.querySelector('.menu-button');
  const LINK = NAV.querySelectorAll('.main-menu__link');

  MENU_BUTTON.addEventListener('click', function () {
    NAV.classList.toggle('header__nav_active');
    document.body.classList.toggle('no-scroll');
  });

  LINK.forEach(item => {
    item.addEventListener('click', function () {
      NAV.classList.remove('header__nav_active');
      document.body.classList.remove('no-scroll');
    });
  });
}

function runHeroSlider() {
  $('.hero-slider__list').slick({
    autoplay: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    speed: 700,
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: true,
      }
    }],
  });
}

function runNewsSlider() {
  $('.news').slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    mobileFirst: true,
    dots: true,
    responsive: [{
      breakpoint: 800,
      settings: {
        variableWidth: true,
      }
    }],
  });
}

function runGalleryPopup() {
  $('.gallery__link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });
}

function initMap() {
  let center = { lat: 40.66269967882884, lng: -73.89080823791476, };
  let icon = {
    url: 'img/map-marker.svg',

  };
  const MAP = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center,
    disableDefaultUI: true,
  });
  let marker = new google.maps.Marker({
    position: { lat: 40.677477470289496, lng: -73.90631677431017 },
    map: MAP,
    icon: icon,
  });
}