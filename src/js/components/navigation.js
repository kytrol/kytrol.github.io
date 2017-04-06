'use_strict';

import EleUtil from './ele-util';

// Class containing functions relating to page navigation.
export default class Navigation {
  static bindMenu() {
    const self = this;
    document.getElementById('menu-btn').onclick = function () {

      self.animateMenu(this);
    };

    //EleUtil.addClass(document.getElementsByTagName('nav')[0], 'active');
  }

  static bindLinks() {
    const menu = document.getElementById('menu-btn');
    const isMobileView = !!menu.offsetHeight;

    const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
    const self = this;
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {

        if (isMobileView) self.animateMenu(menu);
      };
    }

  }

  static animateMenu(menu) {
    EleUtil.toggleClass(menu, 'shrink-icon');

    setTimeout(() => {
      if (menu.innerHTML === 'menu') menu.innerHTML = 'close';
      else menu.innerHTML = 'menu';

      EleUtil.toggleClass(menu, 'shrink-icon');
    }, 100);

    EleUtil.toggleClass(document.getElementsByTagName('nav')[0], 'active');
  }

  static animateArrow() {
    const sectionIndex = getSectionInViewport();
    const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
    const currSectionName = links[sectionIndex].href.split('#')[1];

    const arrow = document.getElementsByClassName('arrow')[0];
    const classes = arrow.className.split(' ');

    if (EleUtil.hasClass(arrow, `arrow-${currSectionName}`)) return;

    for (let i = 0; i < classes.length; i++) {
      if (classes[i] !== 'arrow' && classes[i].indexOf('arrow') >= 0) {
        EleUtil.dropClass(arrow, classes[i]);
      }
    }

    EleUtil.addClass(arrow, `arrow-${currSectionName}`);

    function getSectionInViewport() {
      const viewportHeight = window.innerHeight;
      const sectionNum = document.getElementsByTagName('section').length;
      const currPosition = document.getElementById('contact').getBoundingClientRect().top;

      for (let i = 0; i < sectionNum; i++) {
        const j = i + 1;

        if (currPosition <= (sectionNum - i) * viewportHeight && currPosition >= (sectionNum - j) * viewportHeight - viewportHeight / 2) {
          return i;
        }
      }
    }
  }
}
