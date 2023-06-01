class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  //Since we are doing it recursively and no changes to the original array, we can use slice which returns a shallow copy given the start and optionally the end.

  binarySearch(nums, target) {
    // The base case should be that once we have iterated through the entire array and there is nothing left to compare, we should return false
    if (nums.length == 0) {
      return false;
    }
    // We want the middle to be rounded down for accuracy
    let mid = Math.floor(nums.length/2);
    
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      return this.binarySearch(nums.slice(mid+1), target);
    } else {
      return this.binarySearch(nums.slice(0, mid), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;