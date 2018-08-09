'use strict';

// Compute the probability of rolling p on n s-sided dice.
// 
// The formula for the probability comes from
// [Wolfram](http://mathworld.wolfram.com/Dice.html);
// the multiplicative formula for the [binomial
// coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient) comes
// from Wikipedia.
//
// This page is just interesting: http://mathforum.org/library/drmath/view/52207.html

/// The number of ways to choose k items from a collection of n.
function binomialCoefficient(n, k) {
	let prod = 1.0;
	for (let i = 1; i <= k; ++i) {
		prod *= (n + 1 - i) / i;
	}
	return prod;
}

/// The probability of rolling p on n s-sided dice.
function probability(p, n, s) {
	let sum = 0.0;
	for (let k = 0; k <= Math.floor( (p - n) / s ); k++) {
		let prod = Math.pow(-1, k);
		prod *= binomialCoefficient(n, k);
		prod *= binomialCoefficient(p - (s * k) - 1, n - 1);
		sum += prod;
	}
	return (1 / Math.pow(s, n)) * sum;
}

module.exports = {
	P: probability,
}
