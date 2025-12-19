// src/lib/converter.js
// All conversion logic in one file. Exports functions for APR <-> APY conversions.
// Supports discrete frequencies and continuous compounding.
// Edge cases: negative rates return warning, zero returns zero, extreme values clamped to avoid Infinity.

export const frequencies = {
  daily: 365,
  weekly: 52,
  monthly: 12,
  quarterly: 4,
  annually: 1,
  continuous: 'continuous'
};

export function aprToApy(apr, freq) {
  apr = parseFloat(apr) / 100; // Convert percentage to decimal
  if (isNaN(apr) || apr < 0) {
    return { apy: null, warning: 'Rate must be a positive number.' };
  }
  if (apr === 0) {
    return { apy: 0, warning: null };
  }
  if (apr > 1000) { // Clamp extreme values (e.g., hyperinflationary crypto yields)
    return { apy: null, warning: 'Rate too high for accurate calculation.' };
  }

  let apy;
  if (freq === 'continuous') {
    apy = Math.exp(apr) - 1;
  } else {
    const n = frequencies[freq];
    apy = Math.pow(1 + apr / n, n) - 1;
  }
  apy = (apy * 100).toFixed(4); // Percentage with 4 decimals
  return { apy, warning: null };
}

export function apyToApr(apy, freq) {
  apy = parseFloat(apy) / 100; // Convert percentage to decimal
  if (isNaN(apy) || apy < 0) {
    return { apr: null, warning: 'Rate must be a positive number.' };
  }
  if (apy === 0) {
    return { apr: 0, warning: null };
  }
  if (apy > 1000) {
    return { apr: null, warning: 'Rate too high for accurate calculation.' };
  }

  let apr;
  if (freq === 'continuous') {
    apr = Math.log(apy + 1);
  } else {
    const n = frequencies[freq];
    apr = n * (Math.pow(apy + 1, 1 / n) - 1);
  }
  apr = (apr * 100).toFixed(4); // Percentage with 4 decimals
  return { apr, warning: null };
}

export function getCryptoContext(direction, rate, freq, result) {
  if (direction === 'aprToApy') {
    return `In crypto staking (e.g., Ethereum), a ${rate}% APR compounded ${freq} yields an effective APY of ${result}%, boosting returns via compounding.`;
  } else {
    return `In DeFi lending (e.g., Aave), an APY of ${rate}% compounded ${freq} equates to a base APR of ${result}%, useful for simple rate comparisons.`;
  }
}