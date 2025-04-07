import { getElementByClass, getSectionName } from './ele-util';

/**
 * Bind click event to mobile nav icons.
 */
export const bindIcons = () => {
  const icons = getElementByClass('menu').getElementsByClassName('icon-wrap');

  for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = () => {
      const sectionName = getSectionName(icons[i].id);

      // Scroll window to top of section
      const position = document.getElementById(sectionName).offsetTop;
      window.scroll(0, position);
    };
  }
};

/**
 * Smoothly scrolls window to given section.
 * @param {String} targetId  Id of section to scroll to
 */
const scrollToSection = targetId => {
  const startPos = window.pageYOffset;
  const startTime = window.performance.now();
  const endPos = document.getElementById(targetId).offsetTop;
  let distance = endPos - startPos;
  const scrollingUp = distance < 0;

  window.requestAnimationFrame(animateScroll);

  const DURATION_MS = 250;

  /**
   * Scrolls window based on time elapsed since link was clicked.
   * @param {DOMHighResTimeStamp} timestamp  Current time passed in by requestAnimationFrame
   */
  function animateScroll(timestamp) {
    const currTime = (timestamp - startTime) / DURATION_MS;
    let currPosition;

    // Change distance to negative if scrolling up
    if (scrollingUp) {
      currPosition = startPos - currTime * distance * -1;
    } else {
      currPosition = startPos + currTime * distance;
    }

    // If the destination has been reached or exceeded, stop animating
    if (
      (currPosition <= endPos && scrollingUp) ||
      (currPosition >= endPos && !scrollingUp)
    ) {
      // Ensure the final position is always aligned to the top of target section
      if (currPosition !== endPos) {
        window.scroll(0, endPos);
      }

      return;
    }

    // Incrementally scroll window
    window.scroll(0, currPosition);

    // Continue scrolling window until end position has been reached
    window.requestAnimationFrame(animateScroll);
  }
};

export { scrollToSection };

/**
 * Bind click event to desktop nav links.
 */
export const bindLinks = () => {
  const links = getElementByClass('links').children;

  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      scrollToSection(getSectionName(this.id));
    };
  }
};
