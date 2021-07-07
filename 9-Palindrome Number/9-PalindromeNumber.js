/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let reverse = parseInt(x.toString().split("").reverse().join(""));
  //console.log((reverse))
  if (x === reverse) {
    return true;
  } else {
    return false;
  }
};
