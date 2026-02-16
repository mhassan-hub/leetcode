function gcdOfStrings(str1: string, str2: string): string {
  let tmpString = "";
  console.log(`combo: ${str1 + str2}`)
  console.log(`combo: ${str2 + str1}`)
  if (str1.length % str2.length != 0) {
    return "MODULLLLOOOOO"
  }
  for (let i = 0; i < str1.length; i++) {
    tmpString += str1[i];
    if (tmpString === str2) {
      return tmpString
    }
  }
  return tmpString
};

function main() {
  let test1 = { str1: "ABCABC", str2: "ABC" }
  let test2 = { str1: "ABABAB", str2: "ABAB" }
  let test3 = { str1: "LEET", str2: "CODE" }
  let test3 = { str1: "AAAAAB", str2: "AAA" }
  console.log(`string is:${gcdOfStrings(test1.str1, test1.str2)}`);
}
main();