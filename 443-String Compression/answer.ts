import console = require("console");

const assert = require("assert");

function compress(chars: string[]): number {
  if (chars.length === 1) return 1;

  let writeIndex = 0;
  let counter = 1;
  let currentChar = chars[0];
  /*
  w=0 c =1 ci=a
  w=0 c =2 ci=a
  w=1 c =2 ci=a
  */
  for (let i = 1; i < chars.length; i++) {
    if (currentChar === chars[i]) {
      counter++;
    } else { //currentChar !== chars[i]
      writeIndex++;
      chars.splice(writeIndex, counter - 1)
      console.log("after delete", chars)
      let countArr: string[] = counter.toString().split("")
      console.log(countArr)
      for (const count of countArr) {
        chars.splice(writeIndex, 0, count)
        console.log("after add", chars)

        writeIndex++;
      }
      currentChar = chars[i]
      counter = 1;
    }
    console.log("iteration ending");

  }
  return 0;
}

const tests = [
  { chars: ["a", "a", "b", "b", "c", "c", "c"], expected: 6 },
  // { chars: ["a", "a", "b", "b", "c", "c", "c"], expected: 6 },
  // { chars: ["a"], expected: 1 },
  // { chars: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], expected: 4 },
];

let passed = 0;
for (const t of tests) {
  const result = compress(t.chars);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: compress(...) = ${t.expected}`);
    passed++;
  } catch {
    console.log(`FAIL: compress(...) = ${result}, expected ${t.expected}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
