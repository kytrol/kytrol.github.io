'use_strict';

import EleUtil from './ele-util';

// Class containing functions relating to page navigation.
export default class Navigation {

  // Bind click event to mobile nav icons.
  static bindIcons() {
    const icons = EleUtil.getElementByClass('menu').getElementsByClassName('icon');

    for (let i = 0; i < icons.length; i++) {
      icons[i].onclick = function () {
        const sectionId = icons[i].id.split('-')[0];
        const position = document.getElementById(sectionId).offsetTop;
        window.scroll(0, position);
      };
    }
  }

  // Bind click event to desktop nav links.
  static bindLinks() {
    const links = EleUtil.getElementByClass('links').children;
    const self = this;
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        self.scrollToSection(this.id.split('-')[0]);
      };
    }
  }

  /*
  * Takes in the id of the section to be scrolled to.
  * Smoothly scrolls down or up to the given section.
  */
  static scrollToSection(targetId) {
    const start = window.pageYOffset;
    const startTime = window.performance.now();
    const end = document.getElementById(targetId).offsetTop;
    const duration = 250;
    let distance = end - start;
    const scrollingUp = distance < 0;

    window.requestAnimationFrame(animateScroll);

    /*
    * Passed to requestAnimationFrame to handle scrolling animation.
    * Scrolls the window based on the time elapsed since link was clicked.
    */
    function animateScroll(timestamp) {
      const currTime = (timestamp - startTime) / duration;
      let currPosition;

      // Change distance to negative if scrolling up.
      if (scrollingUp) {
        currPosition = start - currTime * distance * -1;
      } else {
        currPosition = start + currTime * distance;
      }

      // If the destination has been reached or exceeded, stop animating.
      if ((currPosition <= end && scrollingUp) || (currPosition >= end && !scrollingUp)) {

        // Ensure the final position is always aligned to the top of target section.
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
