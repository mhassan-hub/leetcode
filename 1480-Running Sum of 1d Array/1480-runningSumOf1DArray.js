/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function (nums) {
  const runningSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sum = nums[i];
      runningSum.push(sum);
    } else {
      sum += nums[i];
      runningSum.push(sum);
    }
  }
  return runningSum;
};
