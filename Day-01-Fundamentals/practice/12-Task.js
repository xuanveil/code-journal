Find the sum of array elements (Uses an accumulator)
function sumArray(arr) {
  let accumulator = 0;
  
  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  
  return accumulator;
}

// Example usage:
console.log(sumArray([10, 20, 30, 40])); // Output: 100