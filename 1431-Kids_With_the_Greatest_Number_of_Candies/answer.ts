const assert = require("assert");

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies = Math.max(...candies)

  return candies.map(candy => candy + extraCandies >= maxCandies)
}

const tests = [
  { candies: [2, 3, 5, 1, 3], extraCandies: 3, expected: [true, true, true, false, true] },
  { candies: [4, 2, 1, 1, 2], extraCandies: 1, expected: [true, false, false, false, false] },
  { candies: [12, 1, 12], extraCandies: 10, expected: [true, false, true] },
];

let passed = 0;
for (const t of tests) {
  const result = kidsWithCandies(t.candies, t.extraCandies);
  try {
    assert.deepStrictEqual(result, t.expected);
    console.log(`PASS: kidsWithCandies(${JSON.stringify(t.candies)}, ${t.extraCandies}) = ${JSON.stringify(t.expected)}`);
    passed++;
  } catch {
    console.log(`FAIL: kidsWithCandies(${JSON.stringify(t.candies)}, ${t.extraCandies}) = ${JSON.stringify(result)}, expected ${JSON.stringify(t.expected)}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
