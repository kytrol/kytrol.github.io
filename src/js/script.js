'use_strict';

// Allow referencing external svgs in IE.
svg4everybody(); // eslint-disable-line

// Import static assets for webpack.
import '../css/styles.scss';
import '../assets/img/icon/defs.svg';

import Animator from './components/animator';
import Navigation from './components/navigation';
import EleUtil from './components/ele-util';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.bindLinks();
  Navigation.bindIcons();

  const arrow = EleUtil.getElementByClass('arrow');

  // If in desktop view, fade in and animate section arrow.
  if (!EleUtil.getElementByClass('menu').offsetHeight) {
    EleUtil.dropClass(arrow, 'hide');
    Animator.animateArrow();
  }


  window.onscroll = function () {
    const isMobileView = !!EleUtil.getElementByClass('menu').offsetHeight;

    // Animate text overlays for mobile icons.
    if (isMobileView) {
      Animator.animateIconOverlay();

      // If in desktop view, animate arrow on scroll.
    } else {
      Animator.animateArrow();

      // Fade arrow in on initial page load.
      if (EleUtil.hasClass(arrow, 'hide')) {
        EleUtil.dropClass(arrow, 'hide');
      }
    }
  };
});
