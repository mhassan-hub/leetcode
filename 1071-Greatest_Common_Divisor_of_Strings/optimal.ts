// Euclidean algorithm: finds the greatest common divisor of two numbers.
// It works by repeatedly replacing the larger number with the remainder
// of dividing it by the smaller, until the remainder is 0.
// Example: gcd(6, 4) → gcd(4, 2) → gcd(2, 0) → 2
function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function gcdOfStrings(str1: string, str2: string): string {
  // The GCD string's length must divide both string lengths evenly.
  // The LARGEST such length is the GCD of the two lengths.
  // Example: lengths 6 and 4 → gcd = 2, so candidate is first 2 chars.
  const candidateLen = gcd(str1.length, str2.length);
  const candidate = str1.substring(0, candidateLen);

  // Verify the candidate actually rebuilds both strings when repeated.
  // Length alone isn't enough — e.g. "LEET" and "CODE" both have length 4,
  // gcd(4,4) = 4, but "LEET" repeated 1x is not "CODE".
  if (candidate.repeat(str1.length / candidateLen) === str1 &&
      candidate.repeat(str2.length / candidateLen) === str2) {
    return candidate;
  }

  return "";
}

const tests = [
  { str1: "ABCABC", str2: "ABC", expected: "ABC" },
  { str1: "ABABAB", str2: "ABAB", expected: "AB" },
  { str1: "LEET", str2: "CODE", expected: "" },
  { str1: "AAAAAB", str2: "AAA", expected: "" },
];

for (const t of tests) {
  const result = gcdOfStrings(t.str1, t.str2);
  const status = result === t.expected ? "PASS" : "FAIL";
  console.log(`${status}: gcdOfStrings("${t.str1}", "${t.str2}") = "${result}", expected "${t.expected}"`);
}
