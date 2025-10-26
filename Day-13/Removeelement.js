// Function to remove all occurrences of 'val' from 'nums'
var removeElement = function(nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};

// Example usage
let nums = [3, 2, 2, 3];
let val = 3;

let newLength = removeElement(nums, val);

console.log("New length:", newLength);  // Output: 2
console.log("Modified array:", nums.slice(0, newLength)); // Output: [2, 2]
