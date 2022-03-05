const removeFromArray = function(array,num) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == num) {
            array[i] = 1;
        }
        console.log(array)
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
