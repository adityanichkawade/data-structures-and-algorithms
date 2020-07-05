const binarySearchRecursive = (list, search, low, high) => {
  // Process until elements to be traversed are not exhausted
  if (high >= low) {
    // Get the middle index of list
    const mid = low + (high - low) / 2;

    // If the middle element is matching to the searched element
    if (list[mid] === search) {
      return mid;
    }

    // Assuming the list is sorted if the middle element is greater than the searched element
    if (list[mid] > search) {
      // Recursively search the right part of the list which is divided into two parts
      return binarySearchRecursive(list, search, low, mid - 1);
    }

    // Recursively search the left part of the list which is divied into two parts
    return binarySearchRecursive(list, search, mid + 1, high);
  }

  return -1;
};

const binarySearch = (list, search) => {
  const low = 0;
  const high = list.length - 1;

  // Do binary search recursively i.e by divide and conquer
  return binarySearchRecursive(list, search, low, high);
};

export default binarySearch;
