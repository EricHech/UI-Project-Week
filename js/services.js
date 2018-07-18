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