// const repeatString = function(string, num) {
//     if (num < 0) {
//         return "ERROR";
//     } else if (num =  0) {
//         let string = "";
//         return string;
//     } else if(string.length == num) {
//         return string * num;
//     } else if(string > 0) {
//         return string * num;
//     } else if (string.length == ""){
//         let string = "";
//         return string;
//     }
// };

const repeatString = function(word, times) {
    // if num is lest than 0 return error
    if (times < 0) return 'ERROR'
    let string = ''
    // add the word to string for the conditional times
    for (let i = 0; i < times; i++) {
      string += word
    }
    return string
  };
// Do not edit below this line
module.exports = repeatString;
