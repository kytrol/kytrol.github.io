/**
 * Adds a class to an element.
 * @param {Node}   ele        Target element
 * @param {String} className  Class to add
 */
export const addClass = (ele, className) => {
  ele.classList.add(className);
};

/**
 * Removes a class from an element.
 * @param {Node}   ele        Target element
 * @param {String} className  Class to remove
 */
export const dropClass = (ele, className) => {
  ele.classList.remove(className);
};

/**
 * Checks whether an element has a certain class.
 * @param  {Node}    ele        Target element
 * @param  {String}  className  Class to check for
 * @return {Boolean}            Whether the class exists
 */
export const hasClass = (ele, className) => ele.classList.contains(className);

/**
 * Gets one element by class name.
 * @param  {String} className  Class to search for
 * @param  {Number} index      Index of element in collection
 *                             Defaults to the first element
 * @return {Node}              Element found
 */
export const getElementByClass = (className, index = 0) => (
  document.getElementsByClassName(className)[index]
);

/**
 * Determines the section currently in view.
 * @return {Number}  Index of section currently in view
 */
export const getSectionInViewport = () => {
  const viewportHeight = window.innerHeight;
  const sectionNum = document.getElementsByTagName('section').length;
  const currPosition = document.getElementById('projects').getBoundingClientRect().top;

  // TODO: Find a cleaner way to do this
  for (let i = 0; i < sectionNum; i++) {
    const j = i + 1;

    // eslint-disable-next-line max-len
    if (currPosition <= (sectionNum - i) * viewportHeight && currPosition >= (sectionNum - j) * viewportHeight - viewportHeight / 2) {
      return i;
    }
  }

  return sectionNum - 1;
};

/**
 * Retrieves name of section from id.
 * @param  {String} id  Id of section
 * @return {String}     Section name
 */
export const getSectionName = id => id.split('-')[0];
