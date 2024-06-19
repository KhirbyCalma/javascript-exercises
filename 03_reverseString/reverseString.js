const reverseString = function(string) {
    // Initialize empty string and store as variable
    let reversedString = '';
    // loop through length of given string, starting from end, ending at start
    for (let charPosition = string.length - 1; charPosition >= 0; charPosition--) {
        // in loop, add the current character to initialized string
        reversedString += string.charAt(charPosition);
    }
    // return the new reversed string
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
