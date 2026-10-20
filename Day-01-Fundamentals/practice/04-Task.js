//Count even numbers from 1 to N
function countEvenNumbers(N) {
  let counter = 0;
  
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      counter++;
    }
  }
  
  return counter;
}

// Example usage:
console.log(countEvenNumbers(10)); // Output: 5 (2, 4, 6, 8, 10)