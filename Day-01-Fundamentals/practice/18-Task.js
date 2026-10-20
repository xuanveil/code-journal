const studentDetails = {
  name: "Sarah",
  age: 21,
  marks: [75, 82, 60, 95, 88]
};

function checkStudentResult(studentObj) {
  let sum = 0;
  
  // 1. Loop through marks to calculate average
  for (let i = 0; i < studentObj.marks.length; i++) {
    sum += studentObj.marks[i];
  }
  
  const average = sum / studentObj.marks.length;
  let status = "";
  
  // 2. Determine pass/fail status using conditions
  if (average >= 50) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }
  
  // 3. Return summary object/result
  return {
    name: studentObj.name,
    averageMarks: average.toFixed(2),
    status: status
  };
}

// Example usage:
const result = checkStudentResult(studentDetails);
console.log(`${result.name} - Average: ${result.averageMarks} | Status: ${result.status}`);
// Output: Sarah - Average: 80.00 | Status: PASSED