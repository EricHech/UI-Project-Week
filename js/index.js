const navBtn = document.querySelector('nav .navbar img');
const menu = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-items li');

const menuTween = new TimelineMax({ paused: true, reversed: true });
menuTween.from(menu, 0.25, { height: 0, ease: Power2.easeOut, opacity: 0 });
menuTween.staggerFrom(menuItems, 0.2, { y: -20, opacity: 0 }, 0.015);

navBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu-items_revealed');
  !isOpen ? navBtn.src =  "img/nav-hamburger.png" : navBtn.src = "img/nav-hamburger-close.png";
  menuTween.reversed() ? menuTween.play() : menuTween.reverse();
});
