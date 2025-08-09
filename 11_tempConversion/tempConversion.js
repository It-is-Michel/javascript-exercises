const convertToCelsius = function(fahrenheitDegrees) {
  const celsiusDegrees = (fahrenheitDegrees - 32) * 5 / 9;
  const celsiusDegreesOneDecimal = Math.round(celsiusDegrees * 10) / 10;
  return celsiusDegreesOneDecimal;
};

const convertToFahrenheit = function(celciusDegrees) {
  const fahrenheitDegrees = celciusDegrees * 9 / 5 + 32;
  const fahrenheitDegreesOneDecimal = Math.round(fahrenheitDegrees * 10) / 10;
  return fahrenheitDegreesOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
