'use_strict';

import Navigation from './components/navigation';
import EleUtil from './components/ele-util';

// Import static assets for webpack.
import '../css/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.bindLinks();
  Navigation.bindIcons();

  const arrow = EleUtil.getElementByClass('arrow');

  // If in desktop view, fade in and animate section arrow.
  if (!EleUtil.getElementByClass('menu').offsetHeight) {
    EleUtil.dropClass(arrow, 'hide');
    Navigation.animateArrow();
  }


  window.onscroll = function () {
    const isMobileView = !!EleUtil.getElementByClass('menu').offsetHeight;

    // If in desktop view, animate arrow on scroll.
    if (!isMobileView) {
      Navigation.animateArrow();

      // Fade arrow in on initial page load.
      if (EleUtil.hasClass(arrow, 'hide')) {
        EleUtil.dropClass(arrow, 'hide');
      }

      // Animate text overlays for mobile icons.
    } else {
      Navigation.animateIconOverlay();
    }
  };
});
