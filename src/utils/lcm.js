/**
 * File: lcm.js
 * Description: Calculates the least common multiple
 * of two integers.
 */
"use strict";

// Find the greatest common divisor (GCD).
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// Calculate the least common multiple (LCM).
function lcm(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Inputs must be integers");
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs((a / gcd(a, b)) * b);
}

module.exports = { lcm };
