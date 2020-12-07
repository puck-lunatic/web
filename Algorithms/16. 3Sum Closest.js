/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // const sortByDistance = (a, b) => Math.abs(a - target) - Math.abs(b - target);
    // const accumulator = (acc, curr) => acc + curr;
    let sum = nums[0] + nums[1] + nums[2];
    const length = nums.length;
    for(let i = 0; i < length -2; i++){
        for(let j = i + 1; j < length - 1; j++){
            for(let k = j + 1; k < length; k++){
                let temp = nums[i] + nums[j] + nums[k];
                if(Math.abs(temp - target) - Math.abs(sum - target) < 0) sum = temp; 
            }
        }
    }
    // sumArray.sort(sortByDistance);
    // console.log(sumArray);
    
    // const nearest3Nums = nums.sort(sortByDistance).slice(0, 3);
    
    return sum;
};
