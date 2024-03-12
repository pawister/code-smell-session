function total(numbers) {
  return numbers
    .split(",")
    .map((part) => parseInt(part))
    .filter(checkIfInteger)
    .filter(checkIsAnIntegerIsInAValidRange)
    .reduce((acc, curr) => acc + curr, 0);
}

const checkIsAnIntegerIsInAValidRange = (integer) => {
  return integer >= 0 && integer <= 1000;
};

const checkIfInteger = (integer) => {
  return !isNaN(integer);
};

module.exports = total;
