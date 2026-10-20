//Find the largest element
function findLargest(arr) {
  let largest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  
  return largest;
}

// Example usage:
console.log(findLargest([4, 18, 2, 99, 45])); // Output: 99