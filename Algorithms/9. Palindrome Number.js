/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let dump = x;
    let reversedNumber = 0;
    while (dump > 0) {
        const lastDigit = dump % 10;
        reversedNumber = (reversedNumber * 10) + lastDigit;
        dump = (dump / 10) | 0;
    }
    return x === reversedNumber;
};
