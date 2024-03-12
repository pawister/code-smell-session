function total(numbers) {
    var result = 0;
    var parts = numbers.split(',');
    for (var i = 0; i < parts.length; i++) {
        var integer = parseInt(parts[i]);
        //Check if integer
        if (!isNaN(integer)) {
            //Check is an integer is in a valid range
            if (integer >= 0) {
                if (integer <= 1000) {
                    result += integer;
                }
            }
        }
    }
    return result;
}

module.exports = total;