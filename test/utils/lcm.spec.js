/**
 * File: lcm.spec.js
 * Description: Unit tests for the LCM function.
 */
"use strict";

const { lcm } = require("../../src/utils/lcm");

describe("lcm.js", () => {
  it("should calculate the LCM of two positive integers", () => {
    const result = lcm(4, 6);
    expect(result).toBe(12);
  });

  it("should return 0 when one number is zero", () => {
    const result = lcm(0, 5);
    expect(result).toBe(0);
  });

  it("should calculate a positive LCM with a negative integer", () => {
    const result = lcm(-4, 6);
    expect(result).toBe(12);
  });
});
