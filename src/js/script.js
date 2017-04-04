'use_strict';

import EleUtil from './components/ele-util.js';

require('../css/styles.scss');


document.addEventListener('DOMContentLoaded', function () {
  setNavigation();

  loadSectionFromImg();
  loadSectionFromCaption();

  initialSectionLoad();

  setProjectBar();
});

function setNavigation() {
  const menu = document.getElementById('menu-btn');
  const nav = document.getElementsByTagName('nav')[0];

  menu.onclick = function () {
    EleUtil.toggleClass(nav, 'active');
    EleUtil.toggleClass(this, 'open');
    setTimeout(() => {
      const hr = document.getElementsByClassName('hline')[0].children[0];

      if (EleUtil.hasClass(this, 'open')) EleUtil.addClass(hr, 'extend');
      else EleUtil.dropClass(hr, 'extend');
    }, 200);
  };
}

function loadSection(tag) {
  const container = document.getElementsByClassName('description')[0];
  const pageEle = container.firstElementChild;
  const currTag = pageEle.id.split('-')[0];
  if (tag !== currTag) {
    EleUtil.addClass(pageEle, 'hide');
    setTimeout(() => {
      EleUtil.dropChildren(container);
      const section = document.getElementById(`${tag}-page-hidden`).cloneNode(true);
      const sectionId = section.id;
      section.id = sectionId.substring(0, sectionId.length - 7);
      container.appendChild(section);
      EleUtil.dropClasses(section, ['no-display', 'hide']);
    }, 300);
  }
}

function loadSectionFromImg() {
  const imgs = document.getElementsByClassName('nav-img');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
      const tag = this.id;
      if (tag !== 'resume') loadSection(tag);
    };
  }
}

function loadSectionFromCaption() {
  const captions = document.getElementsByClassName('caption');
  for (let i = 0; i < captions.length; i++) {
    captions[i].onclick = function () {
      const img = this.parentNode.firstElementChild;
      const tag = img.id;
      if (tag !== 'resume') loadSection(tag);
      else img.click();
    };
  }
}

function initialSectionLoad() {
  const container = document.getElementsByClassName('description')[0];
  EleUtil.dropChildren(container);
  const section = document.getElementById('proj-page-hidden').cloneNode(true);

  container.appendChild(section);
  EleUtil.dropClass(section, 'hide');
  EleUtil.dropClass(section, 'no-display');
}

function setProjectBar() {
  const container = document.getElementsByClassName('proj-icons')[0];
  const icons = container.getElementsByClassName('proj-icon');

  setIconClick(icons);
}

function setIconClick(icons) {
  for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
      EleUtil.dropClass(this, 'inactive');
      for (let j = 0; j < icons.length; j++) {
        if (this !== icons[j]) EleUtil.addClass(icons[j], 'inactive');
      }

      slidePlatform(i);

      revealProject(i);
    };
  }
}

function slidePlatform(index) {
  const platform = document.getElementsByClassName('platform')[0];
  if (index === 0) {
    EleUtil.dropClasses(platform, ['plat-mid', 'plat-right']);
  } else if (index === 1) {
    EleUtil.dropClass(platform, 'plat-right');
    EleUtil.addClass(platform, 'plat-mid');
  } else {
    EleUtil.dropClass(platform, 'plat-mid');
    EleUtil.addClass(platform, 'plat-right');
  }
}

function revealProject(index) {
  const projects = document.getElementsByClassName('desc-container')[0].children;
  const currProj = projects.item(index);

  for (let i = 0; i < projects.length; i++) {
    if (currProj !== projects[i]) {
      EleUtil.addClass(projects[i], 'hide');

      setTimeout(() => {
        EleUtil.addClass(projects[i], 'no-display');
        EleUtil.dropClasses(currProj, ['no-display', 'hide']);
      }, 200);
    }
  }
}
