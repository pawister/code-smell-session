function total(numbers) {
  var result = 0;
  var parts = numbers.split(",");
  for (var i = 0; i < parts.length; i++) {
    var integer = parseInt(parts[i]);
    if (checkIfInteger(integer) && checkIsAnIntegerIsInAValidRange(integer)) {
      result += integer;
    }
  }
  return result;
}

const checkIsAnIntegerIsInAValidRange = (integer) => {
  return integer >= 0 && integer <= 1000;
};

const checkIfInteger = (integer) => {
  return !isNaN(integer);
};

module.exports = total;
