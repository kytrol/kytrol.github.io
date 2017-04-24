'use_strict';

import Navigation from './components/navigation';
import EleUtil from './components/ele-util';

import '../css/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.bindLinks();
  Navigation.bindIcons();

  const arrow = EleUtil.getElementByClass('arrow');

  if (!EleUtil.getElementByClass('menu').offsetHeight) {
    EleUtil.dropClass(arrow, 'hide');
    Navigation.animateArrow();
  }

  window.onscroll = function () {
    const isMobileView = !!EleUtil.getElementByClass('menu').offsetHeight;
    if (!isMobileView) {
      Navigation.animateArrow();

      if (EleUtil.hasClass(arrow, 'hide')) {
        EleUtil.dropClass(arrow, 'hide');
      }
    }
  };
});
