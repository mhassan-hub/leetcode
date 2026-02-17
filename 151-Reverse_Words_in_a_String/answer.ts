const assert = require("assert");

function reverseWords(s: string): string {
  const sentence: string[] = s.trim().split(' ').filter(word => word !== '');

  let left = 0;
  let right = sentence.length - 1;

  while (left < right) {
    [sentence[left], sentence[right]] = [sentence[right]!, sentence[left]!]
    left++;
    right--;
  }
  return sentence.join(' ');
}

const tests = [
  { s: "the sky is blue", expected: "blue is sky the" },
  { s: "  hello world  ", expected: "world hello" },
  { s: "a good   example", expected: "example good a" },
];

let passed = 0;
for (const t of tests) {
  const result = reverseWords(t.s);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: reverseWords("${t.s}") = "${t.expected}"`);
    passed++;
  } catch {
    console.log(`FAIL: reverseWords("${t.s}") = "${result}", expected "${t.expected}"`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
