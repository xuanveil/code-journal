//Count even elements
function countEvenInArray(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  
  return count;
}

// Example usage:
console.log(countEvenInArray([1, 2, 3, 4, 5, 6, 8])); // Output: 4