export const addClass = (ele, className) => {
  ele.classList.add(className);
};

export const addClasses = (ele, classes) => {
  classes.forEach(c => this.addClass(ele, c));
};

export const dropClass = (ele, className) => {
  ele.classList.remove(className);
};

export const dropClasses = (ele, classes) => {
  classes.forEach(c => this.dropClass(ele, c));
};

export const hasClass = (ele, className) => ele.classList.contains(className);

export const toggleClass = (ele, className) => {
  ele.classList.toggle(className);
};

export const getElementByClass = (className, index = 0) => (
  document.getElementsByClassName(className)[index]
);

// Returns the index of the section currently in view.
export const getSectionInViewport = () => {
  const viewportHeight = window.innerHeight;
  const sectionNum = document.getElementsByTagName('section').length;
  const currPosition = document.getElementById('projects').getBoundingClientRect().top;

  for (let i = 0; i < sectionNum; i++) {
    const j = i + 1;

    if (currPosition <= (sectionNum - i) * viewportHeight && currPosition >= (sectionNum - j) * viewportHeight - viewportHeight / 2) {
      return i;
    }
  }
};
