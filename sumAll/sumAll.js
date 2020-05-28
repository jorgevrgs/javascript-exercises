const sumAll = function(min, max) {
  if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number") return "ERROR";

  if (min > max) {
    max = [min, min = max][0];
  }

  // const sum = max + min;
  // const substract = max - min;
  // const subByTwo = substract / 2;
  // const isInteger = subByTwo % 1 == 0;
  // const ceilSubByTwo = Math.ceil(subByTwo);

  // let result = sum * ceilSubByTwo;
  // result += isInteger ? min + subByTwo : 0;

  // return result;
  return (min + max) * Math.ceil((max - min) / 2) + (((max - min) / 2) % 1 == 0 ? min + ((max - min) / 2) : 0);
}

module.exports = sumAll
