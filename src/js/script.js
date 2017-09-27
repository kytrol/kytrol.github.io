'use strict';

// Allow referencing external svgs in IE.
svg4everybody();

// Import static assets for webpack.
import '../css/styles.scss';
import '../assets/img/icon/defs.svg';

import { animateIconOverlay, animateArrow } from './components/animator';
import { bindLinks, bindIcons } from './components/navigation';
import { getElementByClass, dropClass } from './components/ele-util';

document.addEventListener('DOMContentLoaded', () => {
  bindLinks();
  bindIcons();

  const arrow = getElementByClass('arrow');

  // If in desktop view, fade in and animate section arrow.
  if (!getElementByClass('menu').offsetHeight) {
    dropClass(arrow, 'hide');
    animateArrow();
  }

  window.onscroll = () => {
    const isMobileView = !!getElementByClass('menu').offsetHeight;

    // Animate text overlays for mobile icons.
    if (isMobileView) {
      animateIconOverlay();

    // If in desktop view, animate arrow on scroll.
    } else {
      animateArrow();
      dropClass(arrow, 'hide');
    }
  };
});
