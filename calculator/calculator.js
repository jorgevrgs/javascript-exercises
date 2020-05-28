function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((a, b) => a + b, 0);
}

function multiply (array) {
	return array.reduce((a, b) => a * b, 1);
}

function power(base, power) {
	return base ** power;
}

function factorial(n) {
	return n === 0 ? 1 : n * factorial(n - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}