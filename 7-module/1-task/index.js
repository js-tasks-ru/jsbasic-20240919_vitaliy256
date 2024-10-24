import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.menu();
    this.nav = this.navElem();
    this.nav.addEventListener('scroll', this.scroll);
    this.next = this.button('next');
    this.prev = this.button('prev');
  }

  menu() {
    const menu = document.createElement('div');
    menu.className = 'ribbon';
    menu.append(this.next, this.prev, this.nav);
    menu.addEventListener('click', this.click);
    return menu;
  }

  navElem() {
    const nav = document.createElement('nav');
    nav.className = 'ribbon__inner';
    nav.innerHTML = this.categories.map(el =>
      `<a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>`).join('');
    return nav;
  }

  button(direction) {
    const button = document.createElement('button');
    button.className = `ribbon__arrow ${direction === 'prev'
      ? 'ribbon__arrow_left'
      : 'ribbon__arrow_right ribbon__arrow_visible'}`;
    button.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;
    return button;
  }

  click = e => {
    const next = e.target.closest('.ribbon__arrow_right');
    const prev = e.target.closest('.ribbon__arrow_left');
    const ribbon = e.target.closest('.ribbon__item');
    if (next) {this.nav.scrollBy(350, 0);}
    if (prev) {this.nav.scrollBy(-350, 0);}
    if (ribbon) {
      e.preventDefault();
      this.clickRibbon(ribbon);
    }
  };

  clickRibbon(ribbon) {
    const link = this.nav.querySelectorAll('.ribbon__item');
    const id = ribbon.dataset;
    link.map(e => e.classList.remove('ribbon__item_active'));
    ribbon.classList.add('ribbon__item_active');
    const select = new CustomEvent('ribbon-select', {
      bubbles: true,
      detail: id
    });
    this.elem.dispatchEvent(select);
  }

  hide() {
    const scrollLeft = this.nav;
    const scrollWidth = this.nav;
    const clientWidth = this.nav;
    const right = scrollWidth - scrollLeft - clientWidth;
    this.next.classList.toggle('ribbon__arrow_visible', right >= 1);
    this.prev.classList.toggle('ribbon__arrow_visible', this.nav.scrollLeft !== 0);
  }

  scroll = () => this.hide();
}
