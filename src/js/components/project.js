'use_strict';

import EleUtil from './ele-util';

// Class containing functions specific to project page.
export default class Project {
  static setProjectBar() {
    const container = document.getElementsByClassName('proj-icons')[0];
    const icons = container.getElementsByClassName('proj-icon');

    setIconClick(icons);

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
  }
}
