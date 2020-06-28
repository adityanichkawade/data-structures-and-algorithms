const rodCutting = (rodLength, prices) => {
  const table = [];
  table[0] = 0;

  for (let i = 1; i <= rodLength; i += 1) {
    let maxPrice = Number.MIN_VALUE;
    for (let j = 1; j <= i; j += 1) {
      maxPrice = Math.max(maxPrice, prices[j] + table[i - j]);
    }
    table[i] = maxPrice;
  }

  return table[rodLength];
};

export default rodCutting;
