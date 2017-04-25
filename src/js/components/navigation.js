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

  // Slides arrow to current section in view.
  static animateArrow() {
    const sectionIndex = this.getSectionInViewport();
    const links = EleUtil.getElementByClass('links').children;
    const currSectionName = links[sectionIndex].id.split('-')[0];

    const arrow = EleUtil.getElementByClass('arrow');

    // Return if the arrow is already pointing at correct section.
    if (EleUtil.hasClass(arrow, `arrow-${currSectionName}`)) return;

    const classes = arrow.className.split(' ');

    // Drop previous alignment classes from arrow.
    for (let i = 0; i < classes.length; i++) {
      if (classes[i] !== 'arrow' && classes[i].indexOf('arrow') >= 0) {
        EleUtil.dropClass(arrow, classes[i]);
      }
    }

    EleUtil.addClass(arrow, `arrow-${currSectionName}`);
  }

  // Returns the index of the section currently in view.
  static getSectionInViewport() {
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

  // Fade in the text overlay for the mobile navigation icons.
  static animateIconOverlay() {
    const sectionIndex = this.getSectionInViewport();

    // Icons are ordered differently than sections, so this maps to the correct indexes.
    const iconMap = [1, 0, 2];

    const icons = EleUtil.getElementByClass('menu').getElementsByClassName('icon');
    const currIcon = icons[iconMap[sectionIndex]];

    // Return if the correct icon is already focused.
    if (EleUtil.hasClass(currIcon, 'focused')) return;

    // Unfocus other sections if landing section is in view.
    if (currIcon.id === icons[1].id) {
      EleUtil.dropClass(icons[0], 'focused');
      EleUtil.dropClass(icons[2], 'focused');

      return;
    }

    EleUtil.addClass(currIcon, 'focused');

    for (let i = 0; i < icons.length; i++) {
      if (icons[i] !== currIcon && icons[i].id !== 'about-icon') {
        EleUtil.dropClass(icons[i], 'focused');
      }
    }
  }
}
