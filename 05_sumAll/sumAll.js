const sumAll = function(startNum, endNum) {
    // if start number or end number is negative, return error string
    // or if start number or end number is not a number, return error string
    if ( (startNum < 0 || endNum < 0) ||
         (typeof startNum !== 'number' || typeof endNum !== 'number')
    ) {
        return 'ERROR';
    }
    // if start number is bigger than end number, swap
    if (startNum > endNum) {
        let temp = endNum;
        endNum = startNum;
        startNum = temp;
    }
    // initialize number to 0 and store as variable
    let summedNum = 0;
    // loop starting at start number and ending on ending number (inclusively)
    for (let num = 1; num <= endNum; num++) {
        // add to initialized number based on number current at in the loop
        summedNum += num;
    }
    // return initialized number
    return summedNum;
};

// Do not edit below this line
module.exports = sumAll;
