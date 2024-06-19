const repeatString = function(string, numOfIterations) {
    // If number of iterations is negative (invalid), return error string
    if (numOfIterations < 0) {
        return 'ERROR';
    }
    // Initialize empty string that will store the repeated string, and store in variable
    let repeatedString = '';
    // Make loop based on number of iterations to add to string x times
    for (let i = 0; i < numOfIterations; i++) {
        // in the loop, add the given string to the new string
        repeatedString += string;
    }
    // return new string that contains the repeated string based on number of iterations
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
