const assert = require("assert");

// Paste your solution here to test it
function gcdOfStrings(str1: string, str2: string): string {
  for (let i = str1.length; i >= 1; i--) {
    let tmpString = str1.substring(0, i);
    let len1 = str1.length;
    let len2 = str2.length;
    let lenT = tmpString.length;
    let div1 = len1 / lenT;
    let div2 = len2 / lenT;
    if (len1 % lenT !== 0 || len2 % lenT !== 0) continue;
    if (tmpString.repeat(div1) === str1 && tmpString.repeat(div2) === str2) {
      return tmpString;
    }
  }
  return ""
}

const tests = [
  { str1: "ABCABC", str2: "ABC", expected: "ABC" },
  { str1: "ABABAB", str2: "ABAB", expected: "AB" },
  { str1: "LEET", str2: "CODE", expected: "" },
  { str1: "AAAAAB", str2: "AAA", expected: "" },
];

let passed = 0;
for (const t of tests) {
  const result = gcdOfStrings(t.str1, t.str2);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: gcdOfStrings("${t.str1}", "${t.str2}") = "${t.expected}"`);
    passed++;
  } catch {
    console.log(`FAIL: gcdOfStrings("${t.str1}", "${t.str2}") = "${result}", expected "${t.expected}"`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
