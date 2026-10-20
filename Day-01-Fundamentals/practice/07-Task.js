//Reverses the digits of an integer using a loop
function reverseNumber(num) {
  let reversed = 0;
  let temp = Math.abs(num); // handle positive conversion
  
  while (temp > 0) {
    let lastDigit = temp % 10;
    reversed = (reversed * 10) + lastDigit;
    temp = Math.floor(temp / 10);
  }
  
  return num < 0 ? -reversed : reversed;
}

// Example usage:
console.log(reverseNumber(12345)); // Output: 54321