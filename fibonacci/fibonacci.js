const fibonacci = function(number) {
    number = parseInt(number);

    if (number < 0) return 'OOPS';
    if (number == 0) return 0;
    let sum = [0, 1];
    for (i = 1; i < number; i++) {
        sum = [sum[sum.length - 1], sum[sum.length - 1] + sum[sum.length - 2]];
    }

    return sum[sum.length - 1];
}

module.exports = fibonacci
