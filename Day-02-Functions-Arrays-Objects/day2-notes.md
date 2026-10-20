# JavaScript Day 2 — Functions, Arrays & Objects

**Study order:** Functions → Arrays → Array Methods → Objects → Spread & Copying → Optional Chaining

**Goal:** Understand how to write reusable functions, work with collections of data, and represent real-world information using objects.

---

# PART 1 — FUNCTIONS

## 1. What is a function?

A function is a reusable block of code that performs a particular task.

Instead of writing the same calculation repeatedly, I can put it inside a function and call that function whenever I need it.

```javascript
function greet() {
    console.log("Hello!");
}

greet();
greet();
```

Output:

```text
Hello!
Hello!
```

**How I explain it to myself:** I define the function once, and each time I call it, JavaScript executes its body.

Important: Defining a function doesn't normally execute its body. Calling it does.

## 2. Function declaration

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result); // 30
```

Here:

- `function` declares a function.
- `add` is the function name.
- `a` and `b` are parameters.
- `10` and `20` are arguments passed during the call.
- `return` sends a result back to the caller.
- `result` stores the returned value.

### Parameters vs arguments

Parameters are the variable names in the function definition. Arguments are the actual values passed when calling the function.

```javascript
function multiply(a, b) {  // a and b are parameters
    return a * b;
}

multiply(4, 5); // 4 and 5 are arguments
```

## 3. `return` vs `console.log()`

This is one of the most important concepts to understand.

```javascript
function add(a, b) {
    console.log(a + b);
}

let answer = add(2, 3);

console.log(answer);
```

Output:

```text
5
undefined
```

Why?

The function prints `5`, but it doesn't return a value. Therefore, the function call evaluates to `undefined`, which is stored in `answer`.

Now compare:

```javascript
function add(a, b) {
    return a + b;
}

let answer = add(2, 3);

console.log(answer); // 5
```

**Remember:**

- `console.log()` displays a value.
- `return` sends a value back to the caller.
- Once a function executes `return`, it exits that function immediately.
- If a function finishes without returning a value, its result is `undefined`.

## 4. Functions with conditions

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(checkAge(21)); // Adult
console.log(checkAge(15)); // Minor
```

A function can contain conditions, loops, calculations, or calls to other functions.

## 5. Function expressions

A function can also be stored in a variable.

```javascript
const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(10, 4)); // 6
```

Here, the function is assigned to `subtract`, and we call it using `subtract()`.

A function expression assigned to a `const` variable cannot be called before that variable has been initialized.

## 6. Arrow functions

Arrow functions provide a shorter way to write function expressions.

Regular function expression:

```javascript
const square = function (n) {
    return n * n;
};
```

Arrow function:

```javascript
const square = (n) => {
    return n * n;
};

console.log(square(5)); // 25
```

### Implicit return

When an arrow function contains a single expression and uses no curly braces, the expression's result is returned automatically.

```javascript
const square = n => n * n;

console.log(square(5)); // 25
```

For multiple parameters:

```javascript
const add = (a, b) => a + b;

console.log(add(4, 6)); // 10
```

When using curly braces in an arrow function, you need an explicit `return` if you want to return a value.

```javascript
const square = n => {
    return n * n;
};
```

This is different from:

```javascript
const square = n => {
    n * n;
};
```

The second function returns `undefined` because it has no `return` statement.

## 7. Scope in functions

Scope determines where a variable can be accessed.

```javascript
let globalMessage = "Hello";

function showMessage() {
    let localMessage = "Welcome";

    console.log(globalMessage); // Hello
    console.log(localMessage); // Welcome
}

showMessage();

console.log(globalMessage); // Hello
// console.log(localMessage); // ReferenceError
```

- A global variable declared at the top level can generally be accessed from inside functions.
- A variable declared with `let` or `const` inside a function belongs to that function's scope.
- Variables declared inside a block with `let` or `const` are restricted to that block.

## 8. Callback functions — introduction

A callback is a function passed to another function as an argument.

```javascript
function processNumber(number, callback) {
    return callback(number);
}

function double(number) {
    return number * 2;
}

console.log(processNumber(5, double)); // 10
```

Here, `double` is passed as a callback to `processNumber`.

Callbacks are commonly used with array methods, events, timers, and asynchronous JavaScript.

---

# PART 2 — ARRAYS

## 9. What is an array?

An array stores multiple values in one variable.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

Array indexes start from `0`.

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
console.log(fruits[3]); // undefined
```

The last valid index is generally `array.length - 1`.

```javascript
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // Banana
```

## 10. Updating and accessing array elements

```javascript
let numbers = [10, 20, 30];

numbers[1] = 25;

console.log(numbers); // [10, 25, 30]
```

Arrays are mutable: their contents can be changed.

## 11. Adding and removing elements

### `push()`

Adds one or more elements to the end and returns the new length.

```javascript
let numbers = [1, 2];

let length = numbers.push(3);

console.log(numbers); // [1, 2, 3]
console.log(length);  // 3
```

### `pop()`

Removes and returns the last element.

```javascript
let numbers = [1, 2, 3];

let removed = numbers.pop();

console.log(removed); // 3
console.log(numbers); // [1, 2]
```

### `unshift()`

Adds elements to the beginning and returns the new length.

```javascript
let numbers = [2, 3];

numbers.unshift(1);

console.log(numbers); // [1, 2, 3]
```

### `shift()`

Removes and returns the first element.

```javascript
let numbers = [1, 2, 3];

let removed = numbers.shift();

console.log(removed); // 1
console.log(numbers); // [2, 3]
```

These four methods modify the original array.

## 12. Finding elements

### `includes()`

Checks whether an array contains a value.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Grapes")); // false
```

### `indexOf()`

Returns the first matching index, or `-1` if the value is not found.

```javascript
let numbers = [10, 20, 30, 20];

console.log(numbers.indexOf(20)); // 1
console.log(numbers.indexOf(50)); // -1
```

### `find()`

Returns the first element that satisfies a condition. If no element matches, it returns `undefined`.

```javascript
let numbers = [4, 7, 10, 13];

let answer = numbers.find(n => n > 8);

console.log(answer); // 10
```

`find()` stops once it finds the first match.

## 13. `slice()` vs `splice()`

These methods look similar but behave differently.

### `slice()`

Returns a shallow copy of a selected portion of an array without changing the original array.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.slice(1, 3);

console.log(result);  // [20, 30]
console.log(numbers); // [10, 20, 30, 40]
```

The starting index is included, and the ending index is excluded.

### `splice()`

Can remove, replace, or insert elements in the original array.

```javascript
let numbers = [10, 20, 30, 40];

let removed = numbers.splice(1, 2);

console.log(removed); // [20, 30]
console.log(numbers); // [10, 40]
```

`splice(start, deleteCount)` starts at the given index and removes up to `deleteCount` elements.

For example, insertion:

```javascript
let numbers = [10, 30];

numbers.splice(1, 0, 20);

console.log(numbers); // [10, 20, 30]
```

**Remember:** `slice()` does not mutate the original array; `splice()` does.

## 14. `join()`

Combines array elements into a string using a separator.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.join(", "));
// Apple, Mango, Banana
```

`join()` returns a string and does not modify the array.

## 15. Looping through arrays

### Traditional `for` loop

```javascript
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Output:

```text
10
20
30
```

The index `i` is used to access each element.

### `for...of`

A simpler way to iterate over array values:

```javascript
let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}
```

Use a traditional `for` loop when you need the index or want precise control over the iteration.

Use `for...of` when you mainly need the values.

### `forEach()`

Executes a callback for each array element.

```javascript
let numbers = [10, 20, 30];

numbers.forEach((number, index) => {
    console.log(index, number);
});
```

Output:

```text
0 10
1 20
2 30
```

The callback receives the current element first and its index second.

`forEach()` is useful for performing an action on each item. It does not produce a new transformed array, and its return value is `undefined`.

## 16. The three important array methods: `map()`, `filter()`, `find()`

These methods are particularly important for frontend development and React.

### `map()` — transform every element

```javascript
let numbers = [1, 2, 3];

let doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]
```

`map()` returns a new array containing the result of the callback for every element.

### `filter()` — keep matching elements

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(number => number % 2 === 0);

console.log(evens); // [2, 4, 6]
```

`filter()` returns a new array containing elements for which the callback returns a truthy value.

### `find()` — return the first matching element

```javascript
let numbers = [3, 8, 12, 15];

let result = numbers.find(number => number > 10);

console.log(result); // 12
```

### Comparison

| Method | Purpose | Result |
|---|---|---|
| `forEach()` | Perform an action on each item | `undefined` |
| `map()` | Transform every item | New array |
| `filter()` | Keep items that match a condition | New array |
| `find()` | Find the first matching item | Element or `undefined` |

---

# PART 3 — OBJECTS

## 17. What is an object?

An object stores related information using key-value pairs.

```javascript
let student = {
    name: "Alex",
    age: 21,
    branch: "CSE"
};
```

Here, `name`, `age`, and `branch` are property keys. Their associated values are `"Alex"`, `21`, and `"CSE"`.

## 18. Accessing object properties

### Dot notation

```javascript
console.log(student.name);   // Alex
console.log(student.age);    // 21
```

### Bracket notation

```javascript
console.log(student["name"]); // Alex
```

Bracket notation is useful when the property name is stored in a variable or contains spaces.

```javascript
let key = "age";

console.log(student[key]); // 21
```

Using `student.key` would look for a property literally named `key`, not the property whose name is stored in the variable.

## 19. Adding, updating and deleting properties

```javascript
let student = {
    name: "Alex",
    age: 21
};

// Add
student.branch = "CSE";

// Update
student.age = 22;

// Delete
delete student.branch;

console.log(student);
// { name: 'Alex', age: 22 }
```

Objects declared with `const` can still have their properties changed, as long as the variable itself is not reassigned to a different object.

```javascript
const user = { name: "Alex" };

user.name = "Sam"; // Allowed
// user = {};      // TypeError
```

## 20. Nested objects and arrays

Objects can contain other objects or arrays.

```javascript
let student = {
    name: "Alex",
    marks: [80, 90, 85],
    address: {
        city: "Cuttack",
        state: "Odisha"
    }
};

console.log(student.marks[0]);       // 80
console.log(student.address.city);   // Cuttack
```

Access each level using the correct property name or array index.

## 21. Useful object methods

### `Object.keys()`

Returns an array of an object's own enumerable string-keyed property names.

```javascript
let student = { name: "Alex", age: 21 };

console.log(Object.keys(student));
// ["name", "age"]
```

### `Object.values()`

Returns an array of the corresponding property values.

```javascript
console.log(Object.values(student));
// ["Alex", 21]
```

### `Object.entries()`

Returns an array of key-value pairs.

```javascript
console.log(Object.entries(student));
// [["name", "Alex"], ["age", 21]]
```

### Loop through an object

```javascript
let student = { name: "Alex", age: 21 };

for (let key of Object.keys(student)) {
    console.log(key, student[key]);
}
```

Output:

```text
name Alex
age 21
```

---

# PART 4 — SPREAD, COPYING AND OPTIONAL CHAINING

## 22. Spread syntax (`...`)

Spread syntax expands an iterable or an object's enumerable properties into another array, object, or argument list, depending on the context.

### Copying an array

```javascript
let original = [1, 2, 3];
let copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]
```

For this array of primitive values, the copy has its own array structure.

### Combining arrays

```javascript
let first = [1, 2];
let second = [3, 4];

let combined = [...first, ...second];

console.log(combined); // [1, 2, 3, 4]
```

### Copying an object

```javascript
let original = { name: "Alex", age: 21 };
let copy = { ...original };

copy.age = 22;

console.log(original.age); // 21
console.log(copy.age);     // 22
```

## 23. Shallow copy vs deep copy

Spread syntax creates a **shallow copy**, not a deep copy.

```javascript
let original = {
    name: "Alex",
    address: {
        city: "Cuttack"
    }
};

let copy = { ...original };

copy.name = "Sam";
copy.address.city = "Bhubaneswar";

console.log(original.name);         // Alex
console.log(original.address.city); // Bhubaneswar
```

Why did the nested city change in the original?

The outer object was copied, but the nested `address` object is still shared by both objects.

A deep copy duplicates nested data too, within the supported data types and cloning rules.

For suitable data, modern JavaScript provides:

```javascript
let copy = structuredClone(original);
```

`structuredClone()` supports many built-in data types, but it does not clone every possible JavaScript value, such as functions.

**Placement takeaway:** Understand the difference between copying an object and copying the nested objects it references.

## 24. Optional chaining (`?.`)

Optional chaining lets me safely access a property or call a method when the value before `?.` might be `null` or `undefined`.

```javascript
let user = {
    name: "Alex",
    address: {
        city: "Cuttack"
    }
};

console.log(user.address?.city); // Cuttack
console.log(user.contact?.phone); // undefined
```

Without optional chaining, accessing a property on `undefined` or `null` can throw a `TypeError`.

### Optional chaining with arrays

```javascript
let users = undefined;

console.log(users?.[0]); // undefined
```

### Optional chaining with functions

```javascript
let user = {};

user.sayHello?.(); // Does nothing because sayHello is undefined
```

**Important:** Optional chaining protects the specific access or call where it is used. It does not make every other operation on the same value safe.

---

# PART 5 — COMMON MISTAKES TO AVOID

## Mistake 1: Forgetting to return a value

```javascript
const add = (a, b) => {
    a + b;
};

console.log(add(2, 3)); // undefined
```

Fix:

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

## Mistake 2: Confusing `map()` with `forEach()`

```javascript
let numbers = [1, 2, 3];

let result = numbers.forEach(n => n * 2);

console.log(result); // undefined
```

Use `map()` when you want a new array of transformed values.

## Mistake 3: Forgetting that `splice()` mutates the array

```javascript
let numbers = [1, 2, 3];

numbers.splice(1, 1);

console.log(numbers); // [1, 3]
```

The original array has changed.

## Mistake 4: Assuming spread creates a deep copy

```javascript
let original = { details: { city: "Cuttack" } };
let copy = { ...original };

copy.details.city = "Delhi";

console.log(original.details.city); // Delhi
```

The nested object is shared.

## Mistake 5: Confusing dot and bracket notation

```javascript
let user = { name: "Alex" };
let key = "name";

console.log(user.key);   // undefined
console.log(user[key]);  // Alex
```

Dot notation uses a literal property name; bracket notation can evaluate an expression.

---
