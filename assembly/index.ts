// The entry file of your WebAssembly module.

export default function quantize(array: Uint8ClampedArray): i8[] {
  const length = array.length;
  const nthPixel = 40; // sweet spot for performance and accuracy;
  const amount = length / nthPixel;

  let r: i8 = 0;
  let g: i8 = 0;
  let b: i8 = 0;

  for (let i = 0; i < length; i += nthPixel) {
    r += array[i];
    g += array[i + 1];
    b += array[i + 2];
  }

  return [
    <i8>Math.floor(r / amount),
    <i8>Math.floor(g / amount),
    <i8>Math.floor(b / amount)
  ];
}
