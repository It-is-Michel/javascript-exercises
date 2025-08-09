const repeatString = function(string, numOfCopies) {
    if (numOfCopies < 0) return "ERROR";
    
    let result = "";
    for (let i = 0; i < numOfCopies; i++) {
        result += string;
    };
    return result;
};

// Do not edit below this line
module.exports = repeatString;
