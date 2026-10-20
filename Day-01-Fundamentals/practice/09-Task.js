//Check even or odd with a function
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
console.log(isEvenOrOdd(7));  // Output: "Odd"
console.log(isEvenOrOdd(12)); // Output: "Even"