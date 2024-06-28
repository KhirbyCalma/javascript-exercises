const fibonacci = function(num) {   
    if (num < 0) {
        return 'OOPS';
    }
    if (parseInt(num) === 0 || parseInt(num) === 1) {
        return parseInt(num);
    }  
    return fibonacci(parseInt(num) - 1) + fibonacci(parseInt(num) - 2);
};

// Do not edit below this line
module.exports = fibonacci;
