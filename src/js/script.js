'use_strict';

import Navigation from './components/navigation';

import '../css/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.bindMenu();

  Navigation.bindLinks();

  window.onscroll = function () {
    const isMobileView = !!document.getElementById('menu-btn').offsetHeight;
    
    if (!isMobileView) Navigation.animateArrow();
  };
});
