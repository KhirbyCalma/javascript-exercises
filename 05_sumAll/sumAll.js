const sumAll = function(startNum, endNum) {
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
