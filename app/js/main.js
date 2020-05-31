
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
  var header__mobi = document.querySelector('.header__top-mobile'); 

  if (window.innerWidth > 800 &  window.pageYOffset > 150) {
    header__top.classList.add('header--fixed');
    header__main.classList.add('header-main__box--fixed');
  } else if (window.innerWidth > 800 & window.pageYOffset < 1) {
    header__top.classList.remove('header--fixed');
    header__main.classList.remove('header-main__box--fixed');
  } else if (window.innerWidth <= 800 &  window.pageYOffset > 70){
    header__mobi.classList.add('header__top-mobile--fixed');
    header__main.classList.add('header-main__box--fixed-mobile');
  } else if (window.innerWidth <= 800 &  window.pageYOffset < 1){
    header__mobi.classList.remove('header__top-mobile--fixed');
    header__main.classList.remove('header-main__box--fixed-mobile');
  }
};



$(document).ready(function () {
  $('.skins__slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
  }
  );
});

$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active'); 
});