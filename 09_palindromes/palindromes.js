function checkCharacterIsAlphaNumeric(char) {
    // refer to ascii table
    let charCode = char.charCodeAt(0);
    if ((charCode >= 48 && charCode <= 57) || // numeric (0-9)
        (charCode >= 97 && charCode <= 122)) { // lower alpha (a-z)
      return true;
    }
    return false;
}

const palindromes = function (string) {
    let lowerCasedString = string.toLowerCase();
    let leftPointer = 0;
    let rightPointer = string.length - 1;
    while (leftPointer <= rightPointer) {
        // move left pointer until it hits valid alphanumeric
        while (!checkCharacterIsAlphaNumeric(lowerCasedString.charAt(leftPointer))) {
            ++leftPointer;
        }
        // move right pointer until it hits valid alphanumeric
        while (!checkCharacterIsAlphaNumeric(lowerCasedString.charAt(rightPointer))) {
            --rightPointer;
        }
        if (lowerCasedString.charAt(leftPointer) !== lowerCasedString.charAt(rightPointer)) {
            return false;
        }
        ++leftPointer;
        --rightPointer;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
