import console = require("console");

const assert = require("assert");

function reverseVowels(s: string): string {
  let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  if (s.length === 0) return s;
  let chars = s.split('');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (vowels.includes(chars[left]!.toLowerCase()) && vowels.includes(chars[right]!.toLowerCase())) {
      [chars[left], chars[right]] = [chars[right]!, chars[left]!];
      left++;
      right--;
    } else if (!vowels.includes(chars[left]!.toLowerCase())) {
      left++;
    } else if (!vowels.includes(chars[right]!.toLowerCase())) {
      right--;
    }
  }
  return chars.join('');
}

const tests = [
  { s: "IceCreAm", expected: "AceCreIm" },
  { s: "leetcode", expected: "leotcede" },
];

let passed = 0;
for (const t of tests) {
  const result = reverseVowels(t.s);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: reverseVowels("${t.s}") = "${t.expected}"`);
    passed++;
  } catch {
    console.log(`FAIL: reverseVowels("${t.s}") = "${result}", expected "${t.expected}"`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
