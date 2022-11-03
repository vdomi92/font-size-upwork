const btnZoomInRef = document.querySelector('#zoomIn');
const btnZoomOutRef = document.querySelector('#zoomOut');
const bodyRef = document.querySelector('body');

const currentFontSize = parseInt(window.getComputedStyle(bodyRef).fontSize);

const getDefaultFontSize = () => {
  const html = document.querySelector('html');
  html.style.fontSize = 'unset';
  const htmlFontSize = parseInt(window.getComputedStyle(html).fontSize);
  return htmlFontSize;
};

const getZoomLevel = () => {
  return localStorage.getItem('zoomLevel');
};

window.onload = () => {
  const defaultFontSize = getDefaultFontSize();
  const zoomLevel = getZoomLevel();
  if (!zoomLevel) {
    localStorage.setItem('zoomLevel', 0);
  } else {
    // setBodyStyleFromZoomLevel(zoomLevel);
  }
};

btnZoomInRef.addEventListener('click', () => zoomInClickHandler());
const zoomInClickHandler = () => {
  const zoomLevel = getZoomLevel();
  if (!zoomLevel) {
    localStorage.setItem('zoomLevel', 1);
  } else {
    if (zoomLevel < 3) {
      zoomLevel++;
      localStorage.setItem('zoomLevel', zoomLevel);
      //setBodyStyleFromZoomLevel(zoomLevel);
    }
  }
};

btnZoomOutRef.addEventListener('click', () => zoomOutClickHandler());
const zoomOutClickHandler = () => {
  const zoomLevel = getZoomLevel();
  if (!zoomLevel) {
    localStorage.setItem('zoomLevel', -1);
  } else {
    if (zoomLevel > -3) {
      zoomLevel--;
      localStorage.setItem('zoomLevel', zoomLevel);
      //setBodyStyleFromZoomLevel(zoomLevel);
    }
  }
};

const setBodyStyleFromZoomLevel = (zoomLevel) => {
  switch (zoomLevel) {
    case -3:
      //
      break;
    case -2:
      //
      break;
    case -1:
      //
      break;
    case 0:
      //
      break;
    case 1:
      //
      break;
    case 2:
      //
      break;
    case 3:
      //
      break;
    default:
      //
      break;
  }
};
