//Prints the table of a given number from 1 to 10 (Multiplication Table)
function printMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Example usage:
printMultiplicationTable(5);