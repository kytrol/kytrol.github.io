'use_strict';

import EleUtil from './ele-util';

// Class containing functions relating to page navigation.
export default class Navigation {
  static bindIcons() {
    const icons = EleUtil.getElementByClass('menu').children;

    for (let i = 0; i < icons.length; i++) {
      icons[i].onclick = function () {
        const sectionId = icons[i].id.split('-')[0];
        const position = document.getElementById(sectionId).offsetTop;
        window.scroll(0, position);
      };
    }
  }

  static bindLinks() {
    const links = EleUtil.getElementByClass('links').children;
    const self = this;
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        self.scrollToSection(this.id.split('-')[0]);
      };
    }
  }

  static animateArrow() {
    const sectionIndex = getSectionInViewport();
    const links = EleUtil.getElementByClass('links').children;
    const currSectionName = links[sectionIndex].id.split('-')[0];

    const arrow = EleUtil.getElementByClass('arrow');

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
      const currPosition = document.getElementById('projects').getBoundingClientRect().top;

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
