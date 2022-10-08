document.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  runHeroSlider();
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
    })
  })
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
    }

    ],
  });
}