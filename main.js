const burger__menu = document.querySelector('.burger__menu');
const header__menu_list = document.querySelector('.header__menu_list');
const burger_btn = document.querySelectorAll('.burger_btn');
const header__item = document.querySelectorAll('.header__item');



burger__menu.addEventListener('click', () => {
  header__menu_list.classList.toggle('menu__list--mobail');
 

  burger_btn.forEach(burger_btn => {
    burger_btn.classList.toggle('burger_btn--active');
  });
  header__item.forEach(header__item => {
    header__item.classList.toggle('header__item--active');
  });
});






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



