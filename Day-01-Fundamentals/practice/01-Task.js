// User Profile & Type Conversion
let userProfile = {
  name: "Sibani",
  age: "21",
  numericAge: Number("21"),
};

// Type Conversion Examples
console.log("Name:", userProfile.name);
console.log("Age:", userProfile.numericAge);
console.log("Is adult:", userProfile.numericAge >= 18);