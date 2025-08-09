const removeFromArray = function(array, ...args) {
  for (const arg of args) {
    while (true) {
      const argIndex = array.findIndex(item => item === arg);
      if (argIndex === -1) break;
      array.splice(argIndex, 1);
    };
  };
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
