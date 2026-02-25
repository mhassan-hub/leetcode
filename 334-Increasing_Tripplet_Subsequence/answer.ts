const assert = require("assert");

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}

const tests = [
  { nums: [1, 2, 3, 4, 5], expected: true },
  { nums: [5, 4, 3, 2, 1], expected: false },
  { nums: [2, 1, 5, 0, 4, 6], expected: true },
  { nums: [20, 100, 10, 12, 5, 13], expected: true },
];

let passed = 0;
for (const t of tests) {
  const result = increasingTriplet(t.nums);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: increasingTriplet(${JSON.stringify(t.nums)}) = ${t.expected}`);
    passed++;
  } catch {
    console.log(`FAIL: increasingTriplet(${JSON.stringify(t.nums)}) = ${result}, expected ${t.expected}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
