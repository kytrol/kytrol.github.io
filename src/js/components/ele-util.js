'use_strict';

// Utility to perform general operations dealing with elements.
export default class EleUtil {

  static addClass(ele, className) {
    ele.classList.add(className);
  }

  static addClasses(ele, classes) {
    classes.forEach(c => this.addClass(ele, c));
  }

  static dropClass(ele, className) {
    ele.classList.remove(className);
  }

  static dropClasses(ele, classes) {
    classes.forEach(c => this.dropClass(ele, c));
  }

  static hasClass(ele, className) {
    return ele.classList.contains(className);
  }

  static toggleClass(ele, className) {
    ele.classList.toggle(className);
  }

  static getElementByClass(className, index = 0) {
    return document.getElementsByClassName(className)[index];
  }

  // Returns the index of the section currently in view.
  static getSectionInViewport() {
    const viewportHeight = window.innerHeight;
    const sectionNum = document.getElementsByTagName('section').length;
    const currPosition = document.getElementById('projects').getBoundingClientRect().top;

    for (let i = 0; i < sectionNum; i++) {
      const j = i + 1;

      if (currPosition <= (sectionNum - i) * viewportHeight && currPosition >= (sectionNum - j) * viewportHeight - viewportHeight / 2) {
        return i;
      }
    }
  }
}
