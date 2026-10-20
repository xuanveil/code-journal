//Factorial of a number
function calculateFactorial(N) {
  let product = 1;
  
  for (let i = 1; i <= N; i++) {
    product *= i;
  }
  
  return product;
}

// Example usage:
console.log(calculateFactorial(5)); // Output: 120 (1 * 2 * 3 * 4 * 5)