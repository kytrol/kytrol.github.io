import { addClass, dropClass, hasClass, getElementByClass, getSectionInViewport } from './ele-util';

/**
 * Slides arrow to current section in view.
 */
export const animateArrow = () => {
  const sectionIndex = getSectionInViewport();
  const links = getElementByClass('links').children;
  const currSectionName = links[sectionIndex].id.split('-')[0];

  const arrow = getElementByClass('arrow');

  // Return if the arrow is already pointing at correct section
  if (hasClass(arrow, `arrow-${currSectionName}`)) {
    return;
  }

  // Remove previous alignment class and apply new one
  const classes = arrow.className.split(' ');
  const baseClasses = classes.filter(c => c === 'arrow');
  baseClasses.push(`arrow-${currSectionName}`);
  arrow.setAttribute('class', baseClasses.join(' '));
};

/**
 * Fade in the text overlay for the mobile navigation icons.
 */
export const animateIconOverlay = () => {
  const sectionIndex = getSectionInViewport();

  // Icons are ordered differently than sections, so this maps to the correct indexes
  const iconMap = [1, 0, 2];

  const icons = getElementByClass('menu').getElementsByClassName('icon-wrap');
  const currIcon = icons[iconMap[sectionIndex]];

  // Return if the correct icon is already focused
  if (hasClass(currIcon, 'focused')) {
    return;
  }

  // Unfocus other sections if landing section is in view
  if (currIcon.id === icons[1].id) {
    dropClass(icons[0], 'focused');
    dropClass(icons[2], 'focused');

    return;
  }

  addClass(currIcon, 'focused');

  // Remove focus class from previously focused elements
  Array.from(icons).forEach(icon => {
    if (icon !== currIcon && icon.id !== 'about-icon') {
      dropClass(icon, 'focused');
    }
  });
};
