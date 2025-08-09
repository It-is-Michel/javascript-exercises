const sumAll = function(first, last) {
  // Args must be positives integers
  if (first < 0
      || last < 0
      || !Number.isInteger(first)
      || !Number.isInteger(last)
  ) return "ERROR";
  // If first greater than last, swap values
  if (first > last) [first, last] = [last, first];
  // first - last give us the difference, then we have to sum 1 to count the first number
  const howManyNumbers = (last - first + 1);
  return (first + last) * howManyNumbers / 2;
};

// Do not edit below this line
module.exports = sumAll;
