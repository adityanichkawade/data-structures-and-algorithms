/**
 * Function to sort the given array using bubble sort
 * @param {Array} aItems
 */
const bubbleSort = (aItems) => {
  const arr = aItems;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export default bubbleSort;
