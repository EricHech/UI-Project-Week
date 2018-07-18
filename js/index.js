const navBtn = document.querySelector('.menu .navbar img');
const menu = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-items li');

const menuTween = new TimelineMax({paused:true, reversed:true});
menuTween.from(menu, .25, {height: 0, ease: Power2.easeOut, opacity: 0});
menuTween.staggerFrom(menuItems, .2, {y: -20, opacity: 0}, .015);

navBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-items_revealed');
  menuTween.reversed() ? menuTween.play() : menuTween.reverse();
});