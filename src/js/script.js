'use_strict';

import Navigation from './components/navigation';
import EleUtil from './components/ele-util';

import '../css/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.bindMenu();

  Navigation.bindLinks();

  const arrow = document.getElementsByClassName('arrow')[0];

  if (!document.getElementById('menu-btn').offsetHeight) {
    EleUtil.dropClass(document.getElementsByClassName('arrow')[0], 'hide');
    Navigation.animateArrow();
  }

  window.onscroll = function () {
    const isMobileView = !!document.getElementById('menu-btn').offsetHeight;
    if (!isMobileView) {
      Navigation.animateArrow();

      if (EleUtil.hasClass(arrow, 'hide')) {
        EleUtil.dropClass(arrow, 'hide');
      }
    }
  };
});
