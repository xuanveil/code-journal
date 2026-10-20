//Calculate average marks
function calculateAverageMarks(marksArray) {
  let total = 0;
  
  for (let i = 0; i < marksArray.length; i++) {
    total += marksArray[i];
  }
  
  return total / marksArray.length;
}

// Example usage:
const marks = [85, 90, 78, 92];
console.log("Average Marks:", calculateAverageMarks(marks)); // Output: 86.25