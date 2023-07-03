const convertToCelsius = function(fahrenheit) {
  let res=(fahrenheit-32)*5/9;
  res=Math.round(res*10)/10;
  return res;
};

const convertToFahrenheit = function(celsius) {
  let res=9/5*celsius+32;
  res=Math.round(res*10)/10;
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
