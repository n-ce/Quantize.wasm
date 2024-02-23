// The entry file of your WebAssembly module.

export default function quantize(array: Uint8ClampedArray): u8[] {
  const length = array.length;
  const nthPixel = 40; // sweet spot for performance and accuracy;
  const amount = length / nthPixel;

  let r: u8 = 0;
  let g: u8 = 0;
  let b: u8 = 0;

  for (let i = 0; i < length; i += nthPixel) {
    r = u8(r + array[i]);
    g = u8(g + array[i + 1]);
    b = u8(b + array[i + 2]);
  }

  return [
    u8(Math.floor(r / amount)),
    u8(Math.floor(g / amount)),
    u8(Math.floor(b / amount))
  ];
}
