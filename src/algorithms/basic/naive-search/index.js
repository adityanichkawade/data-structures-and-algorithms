const naiveSearch = (str, pattern) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < pattern.length; j += 1) {
      if (pattern[i] === str[i + j]) break;
      if (j === pattern.length - 1) count += 1;
    }
  }
  return count;
};

export default naiveSearch;
