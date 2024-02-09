import assert from "assert";
import { quantize } from "../build/debug.js";

assert.strictEqual(quantize, 3);

console.log("ok");
