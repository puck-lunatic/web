/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    var romanArray = s.split('');
    var i = 0;
    var res = 0;
    while(i < romanArray.length){
        if(romanArray[i] === 'I' && romanArray[i+1] && romanArray[i+1] === 'V'){
            res += 4;
            i += 2;
            continue;
        }
        
        if(romanArray[i] === 'I' && romanArray[i+1] && romanArray[i+1] === 'X'){
            res += 9;
            i += 2;
            continue;
        }
        
        if(romanArray[i] === 'X' && romanArray[i+1] && romanArray[i+1] === 'L'){
            res += 40;
            i += 2;
            continue;
        }
        
        if(romanArray[i] === 'X' && romanArray[i+1] && romanArray[i+1] === 'C'){
            res += 90;
            i += 2;
            continue;
        }
        
        if(romanArray[i] === 'C' && romanArray[i+1] && romanArray[i+1] === 'D'){
            res += 400;
            i += 2;
            continue;
        }
        
        if(romanArray[i] === 'C' && romanArray[i+1] && romanArray[i+1] === 'M'){
            res += 900;
            i += 2;
            continue;
        }
        
        res += romanMap[romanArray[i]];
        i++;
    }
    
    return res;
};
