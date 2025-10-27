var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        currentCount++;
      } else {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    }
    return Math.max(maxCount, currentCount);
  };
  let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
