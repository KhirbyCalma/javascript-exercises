const convertToCelsius = function(fahrenheit) {
  // use equation to convert given fahrenheit to celcius and store in variable
  let celcius = (fahrenheit - 32) * (5 / 9);
  // round to tenths place
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  // use equation to convert given celcius to fahrenheit and store in variable
  let fahrenheit = celcius * (9 / 5) + 32;
  // round to tenths place
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
