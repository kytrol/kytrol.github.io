'use_strict';

import EleUtil from './ele-util';

// Class containing functions relating to page navigation.
export default class Navigation {
  static bindMenu() {
    const self = this;
    document.getElementById('menu-btn').onclick = function () {
      self.animateMenu(this);
    };
  }

  static bindLinks() {
    const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
    const self = this;
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        const menu = document.getElementById('menu-btn');
        const isMobileView = !!menu.offsetHeight;

        if (isMobileView) self.animateMenu(menu);
        else self.scrollToSection(this.href.split('#')[1]);
      };
    }
  }

  static animateMenu(menu) {
    EleUtil.toggleClass(menu, 'shrink-icon');

    setTimeout(() => {
      if (menu.innerHTML === 'menu') {
        menu.innerHTML = 'close';
      } else {
        menu.innerHTML = 'menu';
      }

      EleUtil.toggleClass(menu, 'shrink-icon');
    }, 100);

    EleUtil.toggleClass(document.getElementsByTagName('nav')[0], 'active');
  }

  static animateArrow() {
    const sectionIndex = getSectionInViewport();
    const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
    const currSectionName = links[sectionIndex].href.split('#')[1];

    const arrow = document.getElementsByClassName('arrow')[0];

    if (EleUtil.hasClass(arrow, `arrow-${currSectionName}`)) return;

    const classes = arrow.className.split(' ');

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

  static scrollToSection(target) {
    const start = window.pageYOffset;
    const startTime = window.performance.now();
    const end = document.getElementById(target).offsetTop;
    const duration = 250;
    let distance = end - start;
    const scrollingUp = distance < 0;

    window.requestAnimationFrame(animateScroll);

    function animateScroll(timestamp) {
      const currTime = (timestamp - startTime) / duration;
      let currPosition;

      if (scrollingUp) {
        currPosition = start - currTime * distance * -1;
      } else {
        currPosition = start + currTime * distance;
      }

      if ((currPosition <= end && scrollingUp) || (currPosition >= end && !scrollingUp)) {
        if (currPosition !== end) {
          window.scroll(0, end);
        }

        return;
      }

      window.scroll(0, currPosition);

      window.requestAnimationFrame(animateScroll);
    }
  }
}
