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

class TabNav {
  constructor (links, content) {
    this.links = links;
    this.content = content;
    this.links = this.links.map((eachLink) => new TabLink(eachLink, this));
    this.activeLink = this.links[0].element;
    this.activeContent = this.content[0];
    this.init();
  }

  init () {
    this.activeLink.classList.add("tab_selected");
    this.activeContent.classList.add("tab-content_revealed");
  }

  updateActive(newLink, newContent) {
    this.activeLink.classList.remove('tab_selected');
    this.activeLink = newLink;
    this.activeLink.classList.add("tab_selected");

    this.activeContent.classList.remove('tab-content_revealed');
    this.activeContent = newContent;
    this.activeContent.classList.add("tab-content_revealed");
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    const data = this.element.dataset.tab;
    this.parent.updateActive(this.element, this.parent.content[data]);
  }
}

const tabLinks = Array.from(document.querySelectorAll('.tabs .each-tab'));
const tabContent = Array.from(document.querySelectorAll('.tab-content'));

const tabNav = new TabNav(tabLinks, tabContent);