//Electricity Bill Calculator
let units = 150;
let ratePerUnit = 5;
if (units >= 100) {
  ratePerUnit = 8; // Increase rate for units above 100
}
let billAmount = units * ratePerUnit;
console.log("Units Consumed:", units);
console.log("Rate Per Unit:", ratePerUnit);
console.log("Bill Amount:", billAmount);