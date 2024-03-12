// Converts an amount in US dollars to Russian rubles.
function dollarsToRubles(dollars) {
  const DOLLAR_INFLATION_RATE = 1.25;
  const RUBLES_CONVERSION_RATE = 60;
  return dollars * DOLLAR_INFLATION_RATE * RUBLES_CONVERSION_RATE;
}

module.exports = dollarsToRubles;
