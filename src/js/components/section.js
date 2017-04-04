'use_strict';

import Navigation from './navigation';

// Class to set event listeners on navigation elements
export default class Section {
  static loadFromImg() {
    const imgs = document.getElementsByClassName('nav-img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick = function (self) {
        const tag = this.id;
        if (tag !== 'resume') Navigation.loadSection(tag);
      };
    }
  }

  static loadFromCaption() {
    const captions = document.getElementsByClassName('caption');

    for (let i = 0; i < captions.length; i++) {
      captions[i].onclick = function () {
        const img = this.parentNode.firstElementChild;
        const tag = img.id;
        if (tag !== 'resume') Navigation.loadSection(tag);
        else img.click();
      };
    }
  }
}
