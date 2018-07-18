const navBtn = document.querySelector('.menu .navbar img');
const menu = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-items li');

const menuTween = new TimelineMax({ paused: true, reversed: true });
menuTween.from(menu, 0.25, { height: 0, ease: Power2.easeOut, opacity: 0 });
menuTween.staggerFrom(menuItems, 0.2, { y: -20, opacity: 0 }, 0.015);

navBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-items_revealed');
  menuTween.reversed() ? menuTween.play() : menuTween.reverse();
});

//--------------------------------------------------------------------

class Tabs {
  constructor (element) {
    this.element = element;
    this.tabs = this.element.map((eachTab) => new TabItem(eachTab, this));
    this.active = this.tabs[0].element;
    this.init();
  }

  init () {
    console.log(this.active);
    this.active.classList.add("tab_selected");
  }

  updateActive(activate) {
    this.active.classList.remove('tab_selected');
    this.active = activate;
    this.active.classList.add("tab_selected");
  }
}

class TabItem {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.parent.updateActive(this.element);
  }
}

const tabs = new Tabs(Array.from(document.querySelectorAll('.tabs .each-tab')));
const tabContent = document.querySelectorAll('.tabs .tab-content');
console.log(tabContent);
