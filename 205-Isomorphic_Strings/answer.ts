const assert = require("assert");

function isIsomorphic(s: string, t: string): boolean {
  let sMap: { [key: string]: string } = {}
  let tMap: { [key: string]: string } = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]!] !== undefined && sMap[s[i]!] !== t[i]) return false;
    if (tMap[t[i]!] !== undefined && tMap[t[i]!] !== s[i]) return false;
    sMap[s[i]!] = t[i]!;
    tMap[t[i]!] = s[i]!;
  }
  return true;
}
const tests = [
  { s: "egg", t: "add", expected: true },
  { s: "f11", t: "b23", expected: false },
  { s: "paper", t: "title", expected: true },
  { s: "badc", t: "baba", expected: false },
];

let passed = 0;
for (const test of tests) {
  const result = isIsomorphic(test.s, test.t);
  try {
    assert.strictEqual(result, test.expected);
    console.log(`PASS: isIsomorphic("${test.s}", "${test.t}") = ${test.expected}`);
    passed++;
  } catch {
    console.log(`FAIL: isIsomorphic("${test.s}", "${test.t}") = ${result}, expected ${test.expected}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);