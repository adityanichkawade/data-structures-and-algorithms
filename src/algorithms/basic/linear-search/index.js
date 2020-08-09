/**
 * Function to linear search items for the given key
 * @param {Array} aItems
 * @param {string} aKey
 */

const linearSearch = (aItems, aKey) => {
  for (let i = 0; i < aItems.length; i += 1) {
    if (aItems[i] === aKey) return aKey;
  }

  return -1;
};

export default linearSearch;
