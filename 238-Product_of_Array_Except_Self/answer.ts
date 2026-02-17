import log = require("console");
import console = require("console");

const assert = require("assert");

function productExceptSelf(nums: number[]): number[] {
  const output: number[] = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output.push(prefix);
    prefix *= nums[i]!;
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i]! * suffix;
    suffix *= nums[i]!;
  }
  return output;
}

const tests = [
  { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
  { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
];

let passed = 0;
for (const t of tests) {
  const result = productExceptSelf(t.nums);
  try {
    assert.deepStrictEqual(result, t.expected);
    console.log(`PASS: productExceptSelf(${JSON.stringify(t.nums)}) = ${JSON.stringify(t.expected)}`);
    passed++;
  } catch {
    console.log(`FAIL: productExceptSelf(${JSON.stringify(t.nums)}) = ${JSON.stringify(result)}, expected ${JSON.stringify(t.expected)}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
