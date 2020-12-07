/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var res = Number((x<0 ? '-' :'') + Math.abs(x).toString().split('').reverse().join(''));
    if (res > Math.pow(2, 31) -1 || res < -Math.pow(2, 31)) return 0;
    return res;
};
