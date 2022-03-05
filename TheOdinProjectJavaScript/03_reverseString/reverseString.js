const reverseString = function(string) {
    // declare an empty arry and string
    let stringArray = [];
    let reverseString = '';
    //to reverse, start from the last index of the string and decrement
    for (i = string.length - 1; i >= 0; i--) {
        //push index of letter to the empty list
        stringArray.push(string[i]);
    } for (i = 0; i < stringArray.length; i++) {
        //add each letter from the list to an empty string
        reverseString += stringArray[i];
    }
    // return reversed string
    return reverseString;
};


// Do not edit below this line
module.exports = reverseString;
