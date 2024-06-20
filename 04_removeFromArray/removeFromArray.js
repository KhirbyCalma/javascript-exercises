const removeFromArray = function(array, ...elementsToRemove) {
    // loop through elements to remove 
    for (const element of elementsToRemove) {
        // while the specific element is still in the given array
        while (array.indexOf(element) !== -1) {
            // remove it
            array.splice(array.indexOf(element), 1);
        }
    }
    // return new array with specified elements removed
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
