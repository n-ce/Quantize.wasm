/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/quantize
 * @param array `~lib/typedarray/Uint8ClampedArray`
 * @returns `~lib/array/Array<f64>`
 */
export declare function quantize(array: Uint8ClampedArray): Array<number>;
