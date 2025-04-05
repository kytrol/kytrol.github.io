'use strict';

import debounce from 'debounce';
import { getElementByClass, dropClass } from './components/ele-util';
import { animateIconOverlay, animateArrow } from './components/animator';
import { bindLinks, bindIcons } from './components/navigation';
import { bindHeaderLoad, bindHeaderResize } from './components/header';

document.addEventListener('DOMContentLoaded', () => {
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
  const DEBOUNCE_WAIT_MS = 100;
  window.onscroll = debounce(() => {
    const isMobileView = !!getElementByClass('menu').offsetHeight;

    // Animate text overlays for mobile icons
    if (isMobileView) {
      animateIconOverlay();

      // If in desktop view, animate arrow on scroll
    } else {
      animateArrow();
      dropClass(arrow, 'hide');
    }
  }, DEBOUNCE_WAIT_MS);
});
