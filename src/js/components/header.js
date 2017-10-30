import debounce from 'debounce';
import { addClass, dropClass } from './ele-util';

const MAX_MOBILE_WIDTH = 880;

function getImgSrc() {
  const useMobileImg = window.innerWidth < MAX_MOBILE_WIDTH;

  if (useMobileImg) {
    return require('../../assets/img/head/tree.jpg');
  }

  return require('../../assets/img/head/forest.jpg');
}

function setImgSrc(src) {
  const aboutSection = document.getElementById('about');
  aboutSection.style.backgroundImage = `url(${src})`;
}

function loadImg(imgSrc) {
  const img = new Image();

  img.onload = () => {
    const bgCover = document.getElementById('bg-cover');
    requestAnimationFrame(() => {
      setImgSrc(imgSrc);
      requestAnimationFrame(() => addClass(bgCover, 'hide'));
    });
  };

  img.src = imgSrc;
}

export const bindHeaderLoad = () => {
  const imgSrc = getImgSrc();
  loadImg(imgSrc);
};

export const bindHeaderResize = () => {
  const DEBOUNCE_WAIT = 300;

  window.onresize = debounce(() => {
    const aboutSection = document.getElementById('about');
    const currentImg = aboutSection.style.backgroundImage;
    const imgSrc = getImgSrc();

    if (currentImg.indexOf(imgSrc) === -1) {
      const bgCover = document.getElementById('bg-cover');
      dropClass(bgCover, 'hide');

      const OPACITY_TRANSITION_DURATION = 500;
      setTimeout(() => loadImg(imgSrc), OPACITY_TRANSITION_DURATION);
    }
  }, DEBOUNCE_WAIT);
};
