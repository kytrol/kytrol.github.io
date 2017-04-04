'use_strict';

import EleUtil from './ele-util';
import Project from './project';

// Class containing functions relating to page navigation.
export default class Navigation {
  static setNavigation() {
    const menu = document.getElementById('menu-btn');
    const nav = document.getElementsByTagName('nav')[0];

    menu.onclick = function () {
      EleUtil.toggleClass(nav, 'active');
      EleUtil.toggleClass(this, 'open');

      const hr = document.getElementsByClassName('hline')[0].children[0];

      setTimeout(() => {
        if (EleUtil.hasClass(this, 'open')) EleUtil.addClass(hr, 'extend');
        else EleUtil.dropClass(hr, 'extend');
      }, 200);
    };
  }

  static loadSection(tag) {
    const container = document.getElementsByClassName('description')[0];
    const pageEle = container.firstElementChild;
    const currTag = pageEle.id.split('-')[0];

    if (tag !== currTag) {
      EleUtil.addClass(pageEle, 'hide');

      const section = document.getElementById(`${tag}-page-hidden`).cloneNode(true);
      const sectionId = section.id;

      setTimeout(() => {
        EleUtil.dropChildren(container);
        section.id = sectionId.substring(0, sectionId.length - 7);
        container.appendChild(section);
        EleUtil.dropClasses(section, ['no-display', 'hide']);

        if (tag === 'proj') Project.setProjectBar();
      }, 300);
    }
  }
}
