'use strict';

// Allow referencing external svgs in IE.
svg4everybody();

// Import static assets for webpack.
import '../css/styles.scss';
import '../assets/img/icon/defs.svg';

import debounce from 'debounce';
import { getElementByClass, dropClass } from './components/ele-util';
import { animateIconOverlay, animateArrow } from './components/animator';
import { bindLinks, bindIcons } from './components/navigation';
import { bindHeaderLoad, bindHeaderResize } from './components/header';

document.addEventListener('DOMContentLoaded', _ => {
  // Bind necessary handlers
  bindLinks();
  bindIcons();
  bindHeaderLoad();
  bindHeaderResize();

  const arrow = getElementByClass('arrow');

  // If in desktop view, fade in and animate section arrow
  if (!getElementByClass('menu').offsetHeight) {
    dropClass(arrow, 'hide');
    animateArrow();
  }

  // Animate necessary elements on scroll
  const DEBOUNCE_WAIT = 100;
  window.onscroll = debounce(_ => {
    const isMobileView = !!getElementByClass('menu').offsetHeight;

    // Animate text overlays for mobile icons
    if (isMobileView) {
      animateIconOverlay();

    // If in desktop view, animate arrow on scroll
    } else {
      animateArrow();
      dropClass(arrow, 'hide');
    }
  }, DEBOUNCE_WAIT);
});
