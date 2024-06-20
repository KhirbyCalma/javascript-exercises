const leapYears = function(year) {
    // if year divided by 4 has no remainder, true that the year is leap year
    if (year % 4 === 0) {
        return true;
    }
    // if year divided by 100 has no remainder, check further
    else if (year % 100 === 0) {
        // if year divided by 400 has no remainder, true that the year is leap year
        if (year % 400 === 0) {
            return true;
        }
        // otherwise, year is not leap year
        else {
            return false;
        }
    }
    // otherwise, year is not leap year
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
