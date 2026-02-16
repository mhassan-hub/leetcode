const assert = require("assert");

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let canPlant: number = 0;
  if (n < 1) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      canPlant++;
    }
    if (canPlant >= n) return true;
  }
  return false;
}

const tests = [
  { flowerbed: [1, 0, 0, 0, 1], n: 1, expected: true },
  { flowerbed: [1, 0, 0, 0, 1], n: 2, expected: false },
  { flowerbed: [1, 0, 0, 0, 1, 0, 0, 0], n: 2, expected: true },
  { flowerbed: [1, 0, 0, 0, 1, 0, 0], n: 2, expected: true },
  { flowerbed: [0, 0, 0, 0, 0, 1, 0, 0], n: 0, expected: true },
];

let passed = 0;
for (const t of tests) {
  const result = canPlaceFlowers(t.flowerbed, t.n);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: canPlaceFlowers(${JSON.stringify(t.flowerbed)}, ${t.n}) = ${t.expected}`);
    passed++;
  } catch {
    console.log(`FAIL: canPlaceFlowers(${JSON.stringify(t.flowerbed)}, ${t.n}) = ${result}, expected ${t.expected}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
