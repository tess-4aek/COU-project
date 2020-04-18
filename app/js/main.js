
window.onload = function preload() { 
  var html = document.querySelector('html');
  html.classList.add('html--hiden');
  setTimeout(function(){
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    html.classList.remove('html--hiden');
  }, 5000);
};





window.onscroll = function headerShow() {

  var header__top = document.querySelector('.header__top');
  var header__main = document.querySelector('.header-main__box');

  if (window.pageYOffset > 150) {
    header__top.classList.add('header--fixed');
    header__main.classList.add('header-main__box--fix');
  } else if (window.pageYOffset < 1) {
    header__top.classList.remove('header--fixed');
    header__main.classList.remove('header-main__box--fix');
  }
};


$(document).ready(function () {
  $('.skins__slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
  }
  );
});