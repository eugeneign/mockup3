$(document).ready


$('.nav__item-mobile').on("click", function (e) {
  e.preventDefault();
  $('.nav__item, .nav__item-mobile').toggleClass('is-opened')
});