import debounce from 'debounce';
import { addClass, dropClass } from './ele-util';

import treeImgPath from '../../assets/img/head/tree.jpg';
import forestImgPath from '../../assets/img/head/forest.jpg';

const MAX_MOBILE_WIDTH = 1018;

/**
 * Determines which background image should be used based on viewport.
 * @return {String}  Relative path of img
 */
function getImgSrc() {
  const useMobileImg = window.innerWidth < MAX_MOBILE_WIDTH;

  if (useMobileImg) {
    return treeImgPath;
  }

  return forestImgPath;
}

/**
 * Sets background-image of the about section to the given url.
 * @param {String} src  Relative path of background img
 */
function setImgSrc(src) {
  const aboutSection = document.getElementById('about');
  aboutSection.style.backgroundImage = `url(${src})`;
}

/**
 * Sets background img once img has fully loaded.
 * @param {String} imgSrc  Relative path of img
 */
function loadImg(imgSrc) {
  const img = new Image();

  // Set background img and fade out solid background once img has loaded
  img.onload = () => {
    const bgCover = document.getElementById('bg-cover');
    requestAnimationFrame(() => {
      setImgSrc(imgSrc);
      requestAnimationFrame(() => addClass(bgCover, 'hide'));
    });
  };

  // Begin loading img
  img.src = imgSrc;
}

/**
 * Load background image on initial page load.
 */
export const bindHeaderLoad = () => {
  const imgSrc = getImgSrc();
  loadImg(imgSrc);
};

/**
 * If necessary, adjust background-image when window is resized.
 */
export const bindHeaderResize = () => {
  const DEBOUNCE_WAIT_MS = 300;

  window.onresize = debounce(() => {
    const aboutSection = document.getElementById('about');
    const currentImg = aboutSection.style.backgroundImage;
    const imgSrc = getImgSrc();

    // If background-image needs to be changed
    if (currentImg.indexOf(imgSrc) === -1) {
      // Fade in solid background
      const bgCover = document.getElementById('bg-cover');
      dropClass(bgCover, 'hide');

      // Apply new img to background
      const OPACITY_TRANSITION_DURATION = 400;
      setTimeout(() => loadImg(imgSrc), OPACITY_TRANSITION_DURATION);
    }
  }, DEBOUNCE_WAIT_MS);
};
