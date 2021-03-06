/* 
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

示例 2：
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var left = 0, right = nums.length - 1;
    var arr = [];
    while(left < right) {
        while(nums[left] + nums[right] < target) left ++;
        while(nums[left] + nums[right] > target) right --;
        if(nums[left] + nums[right] == target) {
            arr.push(nums[left], nums[right]);
            return arr;
        }
    }
    return arr;
};

console.log(twoSum([2,7,11,15], 9))