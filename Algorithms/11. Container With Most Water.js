/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const length = height.length;
    let res = 0;
    for(let i = 0; i< length - 1; i++){
        for(let k = i + 1; k< length; k++){
            let volume = Math.min(height[i], height[k])*(k-i); 
            if(volume > res) res = volume; 
        }
    }
    return res;
};
