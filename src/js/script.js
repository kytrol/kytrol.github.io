'use_strict';

import Navigation from './components/navigation';
import Section from './components/section';

import '../css/styles.scss';
import '../assets/img/head/tree-2x.jpg';

document.addEventListener('DOMContentLoaded', function () {
  Navigation.setNavigation();

  Section.loadFromImg();
  Section.loadFromCaption();
});
