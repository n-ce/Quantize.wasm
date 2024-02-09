// The entry file of your WebAssembly module.

export default function quantize(array: Uint8ClampedArray): number[] {
  const length = array.length;
  const nthPixel = 40; // sweet spot for performance and accuracy;
  const amount = length / nthPixel;

  let r = 0;
  let g = 0;
  let b = 0;

  for (let i = 0; i < length; i += nthPixel) {
    r += array[i];
    g += array[i + 1];
    b += array[i + 2];
  }

  return [
    Math.floor(r / amount),
    Math.floor(g / amount),
    Math.floor(b / amount)
  ];
}
