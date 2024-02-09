
import { quantize } from "./build/release.js";
const canvas = document.body.firstElementChild;
const context = canvas.getContext('2d');
const canvasImg = new Image();

canvasImg.onload = () => {
  if (canvasImg.width === 120) return;
  canvas.height = canvasImg.height;
  canvas.width = canvasImg.width;
  context.drawImage(canvasImg, 0, 0);

  const data = context.getImageData(0, 0, canvasImg.width, canvasImg.height).data;

  document.body.appendChild(document.createTextNode(JSON.stringify(data)))
  document.body.appendChild(JSON.stringify(quantize(data)));
}
canvasImg.crossOrigin = '';
canvasImg.src = './bigBuckBunny.webp';
