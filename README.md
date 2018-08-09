# Dice Probabilities

Compute the probability of rolling p on n s-sided dice.

The formula for the probability comes from
[Wolfram](http://mathworld.wolfram.com/Dice.html);
the multiplicative formula for the [binomial
coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient) comes
from Wikipedia.

This page is just interesting:
http://mathforum.org/library/drmath/view/52207.html


## Installation

## Usage

```javascript
const dice_prob = require('dice-probabilities');

// Probability for rolling 12 on 2 6-sided dice:
let p = dice_prop.P(12, 2, 6);

// Cumulative probability for rolling under 11 on 3 6-sided dice:
let cp = 0.0;
for (let i = 3; i <= 18; i++) {
  cp += dice_prop.P(i, 3, 6);
}
```
