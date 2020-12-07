/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    
    const findFirstShortestWord = a => {
        let res = a[0];
        for(let i = 1; i < a.length; i++){
            if(a[i].length > res.length) res = a[i];
        }
        return res;
    }
    
    const firstShortestWord = findFirstShortestWord(strs);
    
    const isCommonPrefix = (prefix, strArray) => strArray.every(str => str.startsWith(prefix));
    
    // let result = '';
    for(let k = firstShortestWord.length; k > 0; k--){
        const prefix = firstShortestWord.slice(0, k);
        if(isCommonPrefix(prefix, strs)) return prefix;
    }
    
    return '';
};
