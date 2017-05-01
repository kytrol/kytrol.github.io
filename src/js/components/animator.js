'use_strict';

import EleUtil from './ele-util';

// Class containing functions for element animations.
export default class Animator {

  // Slides arrow to current section in view.
  static animateArrow() {
    const sectionIndex = EleUtil.getSectionInViewport();
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

  // Fade in the text overlay for the mobile navigation icons.
  static animateIconOverlay() {
    const sectionIndex = EleUtil.getSectionInViewport();

    // Icons are ordered differently than sections, so this maps to the correct indexes.
    const iconMap = [1, 0, 2];

    const icons = EleUtil.getElementByClass('menu').getElementsByClassName('icon-wrap');
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

    // Remove focus class from previously focused elements.
    for (let i = 0; i < icons.length; i++) {
      if (icons[i] !== currIcon && icons[i].id !== 'about-icon') {
        EleUtil.dropClass(icons[i], 'focused');
      }
    }
  }
}
