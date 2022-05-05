/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++){
      const another = target - nums[i];
      console.log("another", another)

      if(another in map){
        console.log(i)
        return [map[another], i];
      }

      map[nums[i]] = i;
      console.log("map:", map)
    }

    return null;
};

console.log(twoSum([2,7,11,15], 9))
