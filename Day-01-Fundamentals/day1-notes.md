# JavaScript Placement Preparation
# DAY 01 — JavaScript Fundamentals

**Goal for today:** I should understand how JavaScript works, how values behave, how to compare them, and how to make decisions using conditions. I should also be able to predict the output of basic JavaScript code without randomly guessing.

---

## 1. Introduction to JavaScript

### 1.1 What exactly is JavaScript?

JavaScript is a programming language that adds logic and behaviour to websites.

Think of a website this way:

- HTML gives the website its structure.
- CSS makes the website look good.
- JavaScript makes the website interactive.

For example, when I click a button and a popup appears, JavaScript can handle that behaviour. It can also validate forms, update content, fetch data from an API, and run backend applications using Node.js.

### 1.2 Is JavaScript the same as Java?

No. They are two different programming languages. Their names sound similar, but JavaScript is not a version of Java.

### 1.3 What is ECMAScript?

ECMAScript is the standard that defines JavaScript's language features.

ES6, also called ES2015, introduced many features that I will use regularly, such as `let`, `const`, arrow functions, template literals, destructuring, and spread syntax.


### 1.4 Where does JavaScript run?

**In a browser:** JavaScript can interact with the webpage through the DOM.

**In Node.js:** JavaScript can run outside the browser. This is what I'm using in VS Code to execute my `.js` files.

One important distinction: Node.js does not provide the browser's DOM by default. The JavaScript language and the environment in which it runs are not the same thing.

### 1.5 My first JavaScript program

```javascript
console.log("Hello, JavaScript!");
console.log(10 + 20);
```

Output:

```text
Hello, JavaScript!
30
```

Here, `console.log()` prints a value to the console. The first line prints text, while the second line calculates the sum and prints the result.

### Questions I should be able to answer

1. What is JavaScript, and why is it used?
2. What is the difference between Java and JavaScript?
3. What is ECMAScript?
4. What is Node.js?
5. What does `console.log()` do?
6. What is the difference between JavaScript and the browser's DOM APIs?

---

## 2. Basic Syntax and Comments

### 2.1 Is JavaScript case-sensitive?

Yes. This means uppercase and lowercase letters matter.

```javascript
let age = 20;
let Age = 25;

console.log(age);
console.log(Age);
```

Output:

```text
20
25
```

`age` and `Age` are two different variables.

### 2.2 What is a statement?

A statement is an instruction that JavaScript executes.

```javascript
let a = 10;
let b = 20;
console.log(a + b);
```

Output:

```text
30
```

Semicolons are often optional because JavaScript can automatically insert them in certain situations. I'll use them consistently to keep my code clear.

### 2.3 What are comments?

Comments are explanations written inside code. JavaScript ignores them during execution.

```javascript
// This is a single-line comment.

/*
This is a
multi-line comment.
*/

console.log("Learning JavaScript");
```

Output:

```text
Learning JavaScript
```

### Questions I should be able to answer

1. What does case-sensitive mean?
2. What is a JavaScript statement?
3. What is the purpose of comments?
4. Are semicolons always compulsory?
5. Can `age` and `Age` represent the same variable?

---

## 3. Variables: `var`, `let`, and `const`

### 3.1 What is a variable?

A variable is a named binding that lets me store or refer to a value.

For example, instead of writing the number `90` repeatedly, I can store it in a variable called `marks`.

```javascript
let marks = 90;
console.log(marks);
```

Output:

```text
90
```

### 3.2 When should I use `let`?

I use `let` when I expect the variable to be reassigned.

```javascript
let score = 80;

score = 95;

console.log(score);
```

Output:

```text
95
```

The value changed from `80` to `95`.

### 3.3 When should I use `const`?

I use `const` when I don't want to reassign the variable.

```javascript
const country = "India";

console.log(country);
```

Output:

```text
India
```

This is invalid:

```javascript
const age = 21;
age = 22;
```

It throws a `TypeError` because the `const` binding cannot be reassigned.

A `const` declaration also needs an initial value.

### 3.4 Then why do we have `var`?

`var` is the older way of declaring variables. I should understand it because it appears in older code, but I will generally prefer `const` and `let`.

```javascript
var score = 80;
score = 95;

console.log(score);
```

Output:

```text
95
```

### 3.5 Difference between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration in the same scope | Allowed | Not allowed | Not allowed |
| Scope | Function or global | Block | Block |
| Must be initialized at declaration | No | No | Yes |

**My rule:** Use `const` by default. Use `let` when reassignment is needed. Learn `var` mainly to understand existing code and interview questions.

### 3.6 What is block scope?

A block is code enclosed in curly braces `{ }`. Variables declared with `let` and `const` inside that block cannot be accessed from outside it.

```javascript
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c);

// console.log(a);
// console.log(b);
```

Output:

```text
30
```

If I uncomment the last two lines, they cause `ReferenceError`s because `a` and `b` are block-scoped. The `var` variable is not restricted to that block.

### 3.7 Does `const` make an array completely unchangeable?

No! This is a common confusion.

```javascript
const numbers = [10, 20];

numbers.push(30);

console.log(numbers);
```

Output:

```text
[10, 20, 30]
```

This works because `const` prevents reassignment of the variable binding, not modification of the array itself.

However, this is invalid:

```javascript
// numbers = [40, 50];
```

### 3.8 What is hoisting?

Hoisting describes how JavaScript handles declarations during execution setup. It does not literally mean the source code is moved upward.

With `var`:

```javascript
console.log(score);

var score = 10;

console.log(score);
```

Output:

```text
undefined
10
```

The declaration is available before its assignment executes, so the first output is `undefined`.

With `let` and `const`, accessing the variable before initialization throws a `ReferenceError`.

```javascript
// console.log(age);
let age = 20;
```

The period between entering the scope and initializing the variable is called the **Temporal Dead Zone (TDZ)**.

Function declarations also have different hoisting behaviour:

```javascript
greet();

function greet() {
    console.log("Hello!");
}
```

Output:

```text
Hello!
```

I don't need to memorize every hoisting edge case today, but I should understand the differences between `var`, `let`, and `const`.

### Questions I should be able to answer

1. What is a variable?
2. What is the difference between `var`, `let`, and `const`?
3. What is block scope?
4. Can a `const` array be modified?
5. What is hoisting?
6. What is the Temporal Dead Zone?
7. What happens if I access a `let` variable before initialization?
8. Why does the first `console.log(score)` in the `var` example print `undefined`?
9. Why can a function declaration be called before its position in the code?

---

## 4. Data Types in JavaScript

### 4.1 What is a data type?

A data type tells me what kind of value I'm working with and how that value behaves.

For example, a string represents text, a number is used for arithmetic, and a Boolean represents `true` or `false`.

JavaScript has **seven primitive types**.

### 4.2 The seven primitive types

| Type | Example | Meaning |
|---|---|---|
| String | `"Hello"` | Text |
| Number | `25`, `3.14` | Ordinary numeric values |
| Boolean | `true`, `false` | Logical value |
| Undefined | `undefined` | Value not assigned |
| Null | `null` | Intentional absence of a value |
| BigInt | `123n` | Large integers |
| Symbol | `Symbol("id")` | Unique identifiers |

Example:

```javascript
let name = "Sibani";
let age = 21;
let isStudent = true;
let result;
let selectedUser = null;
let largeNumber = 12345678901234567890n;
let id = Symbol("id");

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof result);
console.log(typeof selectedUser);
console.log(typeof largeNumber);
console.log(typeof id);
```

Output:

```text
string
number
boolean
undefined
object
bigint
symbol
```

Notice that `typeof null` returns `"object"`. This is a historical JavaScript quirk. `null` is not actually an ordinary object.

### 4.3 What is a reference value?

Objects, arrays, and functions are object values. Arrays are specialized objects used for ordered collections, and functions are callable objects.

```javascript
const student = {
    name: "Asha",
    marks: 90
};

const numbers = [10, 20, 30];

function greet() {
    console.log("Hello");
}

console.log(typeof student);
console.log(typeof numbers);
console.log(typeof greet);
```

Output:

```text
object
object
function
```

### 4.4 Why does `typeof []` return `"object"`?

Because arrays are objects in JavaScript. If I specifically need to check whether a value is an array, I use `Array.isArray()`.

```javascript
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
```

Output:

```text
true
false
```

### 4.5 What is dynamic typing?

JavaScript is dynamically typed, meaning I can assign values of different types to the same variable.

```javascript
let value = 10;

console.log(typeof value);

value = "ten";

console.log(typeof value);
```

Output:

```text
number
string
```

I don't have to declare the variable as an integer or string beforehand.

### 4.6 Primitive values vs reference values

With primitive values, assigning one variable to another copies the value.

```javascript
let a = 10;
let b = a;

b = 99;

console.log(a);
console.log(b);
```

Output:

```text
10
99
```

Changing `b` doesn't affect `a`.

With objects, assignment copies the reference to the same object.

```javascript
const original = { score: 80 };
const alias = original;

alias.score = 100;

console.log(original.score);
console.log(alias.score);
```

Output:

```text
100
100
```

Both variables refer to the same object, so changing its property is visible through both variables.

Two separately created objects are different references:

```javascript
console.log({ x: 1 } === { x: 1 });
```

Output:

```text
false
```

### Questions I should be able to answer

1. What are JavaScript's seven primitive types?
2. What is the difference between `null` and `undefined`?
3. Why does `typeof null` return `"object"`?
4. Why does `typeof []` return `"object"`?
5. How do I check whether a value is an array?
6. What is dynamic typing?
7. What is the difference between primitive and reference values?
8. Why do two separate objects with identical properties compare as unequal?
9. What happens when I assign one object variable to another?

---

## 5. Type Conversion and Type Coercion

### 5.1 What is type conversion?

Type conversion means changing a value from one type to another.

There are two main ideas:

- **Explicit conversion:** I deliberately convert the value.
- **Implicit coercion:** JavaScript automatically converts a value during an operation.

### 5.2 Explicit conversion using `Number()`

```javascript
console.log(Number("25"));
console.log(Number("3.5"));
console.log(Number("hello"));
console.log(Number(""));
```

Output:

```text
25
3.5
NaN
0
```

`NaN` means "Not-a-Number". It is a special numeric value representing an invalid numeric result.

### 5.3 Explicit conversion using `String()`

```javascript
console.log(String(100));
console.log(String(true));
console.log(String(null));
```

Output:

```text
100
true
null
```

The results are strings even though the console doesn't display quotation marks around them.

### 5.4 Explicit conversion using `Boolean()`

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));
```

Output:

```text
true
false
false
true
```

### 5.5 `parseInt()` and `parseFloat()`

These functions parse numbers from the beginning of a string.

```javascript
console.log(parseInt("42px"));
console.log(parseFloat("3.14kg"));
console.log(Number("42px"));
```

Output:

```text
42
3.14
NaN
```

`Number("42px")` fails because the entire string is not a valid numeric representation. `parseInt()` can parse the numeric prefix.

### 5.6 What is implicit coercion?

Implicit coercion happens when JavaScript automatically converts values.

```javascript
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("10" / 2);
```

Output:

```text
52
3
25
5
```

Why does this happen?

- With `+`, JavaScript performs string concatenation when string conversion applies.
- With `-`, `*`, and `/`, JavaScript usually converts the operands to numbers.

### 5.7 Why does the order of operations matter?

```javascript
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
```

Output:

```text
345
75
```

The operations are evaluated from left to right here.

First expression:

```text
"3" + 4  →  "34"
"34" + 5 →  "345"
```

Second expression:

```text
3 + 4    →  7
7 + "5"  →  "75"
```

### Questions I should be able to answer

1. What is type conversion?
2. What is the difference between explicit conversion and implicit coercion?
3. What does `Number("hello")` return?
4. What is `NaN`?
5. What is the difference between `Number()` and `parseInt()`?
6. Why does `"5" + 2` produce `"52"` but `"5" - 2` produce `3`?
7. Why do the two `"3" + 4 + 5` examples produce different outputs?
8. What does `Boolean("false")` return, and why?

---

## 6. Truthy and Falsy Values

### 6.1 What do truthy and falsy mean?

When JavaScript evaluates a condition, it can convert a value to a Boolean.

A **falsy** value behaves like `false` in a Boolean context. A **truthy** value behaves like `true`.

The falsy values I should memorize are:

- `false`
- `0`
- `-0`
- `0n`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

### 6.2 Examples

```javascript
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```

Output:

```text
false
false
false
false
false
false
```

Now look at these:

```javascript
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));
```

Output:

```text
true
true
true
true
```

Why? `"0"` and `"false"` are non-empty strings. Empty arrays and empty objects are also truthy.

### 6.3 How does this work inside an `if` statement?

```javascript
if ("hello") {
    console.log("This runs");
}

if (0) {
    console.log("This does not run");
}
```

Output:

```text
This runs
```

The first condition is truthy. The second is falsy, so its block doesn't execute.

### Questions I should be able to answer

1. What are truthy and falsy values?
2. Which falsy values should I memorize?
3. Why is `"false"` truthy?
4. Why are `[]` and `{}` truthy?
5. How does JavaScript use truthiness in an `if` statement?

---

## 7. Equality: `==` vs `===`

### 7.1 What is the difference?

`==` is loose equality. It may convert values before comparing them.

`===` is strict equality. It doesn't perform the usual type coercion before comparing the operands.

### 7.2 Examples

```javascript
console.log(5 == "5");
console.log(5 === "5");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);
```

Output:

```text
true
false
true
false
true
false
```

For example, `5 == "5"` returns `true` because loose equality converts the string to a number for the comparison. Strict equality sees a number and a string, so the result is `false`.

### 7.3 What about `!=` and `!==`?

- `!=` is loose inequality.
- `!==` is strict inequality.

```javascript
console.log(5 != "5");
console.log(5 !== "5");
```

Output:

```text
false
true
```

**My rule:** I should normally use `===` and `!==` in my code.

### 7.4 Why are two arrays not equal?

```javascript
console.log([] === []);
console.log({} === {});
```

Output:

```text
false
false
```

Each expression creates a new object. Objects and arrays are compared by identity, not by comparing all their contents.

### 7.5 What about `NaN`?

```javascript
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
```

Output:

```text
false
true
```

`NaN` is not equal to itself. I can use `Number.isNaN()` to check for it.

### Questions I should be able to answer

1. What is the difference between `==` and `===`?
2. What is the difference between `!=` and `!==`?
3. Why is `5 == "5"` true but `5 === "5"` false?
4. Why is `null == undefined` true?
5. Why are two separately created arrays not strictly equal?
6. Why is `NaN === NaN` false?
7. Which equality operator should I normally use?

---

## 8. Operators

### 8.1 What are operators?

Operators perform operations on values, such as calculations, comparisons, assignments, and logical checks.

### 8.2 Arithmetic operators

| Operator | Meaning |
|---|---|
| `+` | Addition or string concatenation |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Remainder |
| `**` | Exponentiation |
| `++` | Increment by one |
| `--` | Decrement by one |

Example:

```javascript
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(2 ** 3);
```

Output:

```text
13
7
30
3.3333333333333335
1
8
```

The `%` operator gives the remainder. For example, `10 % 3` is `1` because 3 goes into 10 three times with 1 left over.

### 8.3 Assignment operators

```javascript
let total = 10;

total += 5;
console.log(total);

total -= 2;
console.log(total);
```

Output:

```text
15
13
```

`total += 5` is shorthand for `total = total + 5`.

### 8.4 Prefix and postfix increment

```javascript
let a = 5;

console.log(a++);
console.log(a);

let b = 5;

console.log(++b);
console.log(b);
```

Output:

```text
5
6
6
6
```

With postfix `a++`, the old value is returned first, then the variable increments.

With prefix `++b`, the variable increments first, then the new value is returned.

### 8.5 Comparison operators

```javascript
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 4);
```

Output:

```text
true
false
true
false
```

Comparisons return a Boolean result.

### 8.6 Logical AND: `&&`

`&&` returns the first falsy operand. If all operands are truthy, it returns the last operand.

```javascript
console.log(true && false);
console.log("hello" && 42);
console.log(0 && "hello");
```

Output:

```text
false
42
0
```

### 8.7 Logical OR: `||`

`||` returns the first truthy operand. If all operands are falsy, it returns the last operand.

```javascript
console.log(true || false);
console.log("" || "default");
console.log("hello" || "default");
```

Output:

```text
true
default
hello
```

### 8.8 Logical NOT: `!`

`!` converts a value to Boolean and reverses its truthiness.

```javascript
console.log(!true);
console.log(!0);
console.log(!"hello");
```

Output:

```text
false
true
false
```

### 8.9 Ternary operator

The ternary operator is a short way to choose between two values based on a condition.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse
```

Example:

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Output:

```text
Adult
```

### 8.10 Nullish coalescing: `??`

`??` uses the right-hand value only when the left-hand value is `null` or `undefined`.

```javascript
console.log(null ?? "Guest");
console.log(undefined ?? "Guest");
console.log(0 ?? 100);
console.log("" ?? "Default");
```

Output:

```text
Guest
Guest
0

```

The last output is a blank line because the result is an empty string.

### 8.11 Difference between `||` and `??`

```javascript
console.log(0 || 100);
console.log(0 ?? 100);
```

Output:

```text
100
0
```

`||` treats zero as falsy and uses the fallback. `??` accepts zero because it only checks for `null` or `undefined`.

### 8.12 Optional chaining: `?.`

Optional chaining lets me access a property without throwing an error if the value before it is `null` or `undefined`.

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```text
undefined
```

Without optional chaining, trying to access `user.address.city` would throw a `TypeError` because `user.address` is undefined.

### 8.13 Operator precedence

Multiplication happens before addition unless parentheses change the order.

```javascript
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
```

Output:

```text
14
20
```

I'll use parentheses whenever they make the intended calculation clearer.

I don't need to master every bitwise operator today. I should first be comfortable with arithmetic, assignment, comparison, equality, logical operators, `??`, `?.`, and the ternary operator.

### Questions I should be able to answer

1. What is the difference between `=` and `===`?
2. What does the `%` operator return?
3. What is the difference between prefix and postfix increment?
4. What does `&&` return when one operand is falsy?
5. What does `||` return when all operands are falsy?
6. What is short-circuit evaluation?
7. What is the difference between `||` and `??`?
8. What is optional chaining?
9. What is the ternary operator?
10. How does operator precedence work?

---

## 9. Conditional Statements

### 9.1 What are conditionals?

Conditionals let me execute different blocks of code depending on whether a condition is true or false.

### 9.2 `if`

```javascript
const age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}
```

Output:

```text
Eligible to vote
```

The message prints because `age >= 18` evaluates to true.

### 9.3 `if...else`

```javascript
const number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

Output:

```text
Odd
```

The remainder when 7 is divided by 2 is 1, so the condition is false.

### 9.4 `if...else if...else`

```javascript
const marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

Output:

```text
Grade B
```

JavaScript checks the conditions in order. Once a condition matches, its block runs and the remaining branches are skipped.

### 9.5 Nested `if`

```javascript
const age = 22;
const hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}
```

Output:

```text
Entry allowed
```

The inner condition is checked only when the outer condition is true.

### 9.6 `switch`

When I need to select from multiple cases, `switch` can make the code easier to read.

```javascript
const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Tuesday
```

`break` stops execution from falling through to the next case. `default` runs when no case matches.

A `switch` compares the case value using strict equality, so the type matters.

### Questions I should be able to answer

1. What are conditional statements?
2. What is the difference between `if` and `if...else`?
3. When should I use `else if`?
4. What is a nested `if`?
5. When is `switch` useful?
6. What is the purpose of `break` and `default`?
7. What happens if I omit `break` from a switch case?
8. How can I check whether a number is even or odd?
9. How does JavaScript evaluate a string or number used directly as a condition?

---

## 10. Basic Error Handling

### 10.1 What is an error?

An error occurs when code cannot be parsed or an operation cannot be completed as expected.

Three common error types I should recognize:

- `SyntaxError`: the code has invalid syntax.
- `ReferenceError`: a variable or reference cannot be resolved.
- `TypeError`: an operation is invalid for the value being used.

### 10.2 What does `try...catch` do?

It lets me handle an exception rather than allowing it to terminate the current flow without handling.

```javascript
try {
    JSON.parse("{invalid json}");
} catch (error) {
    console.log("Invalid JSON");
    console.log(error.name);
}
```

Output:

```text
Invalid JSON
SyntaxError
```

`JSON.parse()` throws a `SyntaxError` because the supplied text is not valid JSON.

### 10.3 What does `throw` do?

I can throw an error when my own validation fails.

```javascript
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    return age >= 18;
}

try {
    console.log(checkAge(-2));
} catch (error) {
    console.log(error.message);
}
```

Output:

```text
Age cannot be negative
```

For Day 1, I only need the basics of `try`, `catch`, `throw`, and `error.message`. Advanced error-handling techniques can wait.

### Questions I should be able to answer

1. What is an exception?
2. What is the difference between `SyntaxError`, `ReferenceError`, and `TypeError`?
3. What is the purpose of `try...catch`?
4. What does `throw` do?
5. How do I access an error's message?

---

# 11. Placement Practice — Predict the Output

I should try these questions before checking the answers. I need to explain *why* each result occurs, not just memorize the output.

### Question 1

```javascript
console.log("5" + 2);
console.log("5" - 2);
```

### Question 2

```javascript
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
```

### Question 3

```javascript
console.log(Boolean("false"));
console.log(Boolean(""));
console.log(Boolean([]));
```

### Question 4

```javascript
console.log(null ?? "Guest");
console.log(0 ?? 10);
console.log(0 || 10);
```

### Question 5

```javascript
let x = 5;

console.log(x++);
console.log(++x);
console.log(x);
```

### Question 6

```javascript
console.log(typeof null);
console.log(typeof []);
console.log(Array.isArray([]));
```

### Question 7

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a, b);
```

### Question 8

```javascript
const user = { score: 10 };
const copy = user;

copy.score = 50;

console.log(user.score);
```

### Question 9

```javascript
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
```

### Question 10

```javascript
const marks = 85;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}
```

---

# 12. Answers to Output Questions

**1.**
```text
52
3
```

`+` concatenates the string and number; `-` converts the string to a number.

**2.**
```text
true
false
true
```

Loose equality can coerce types. Strict equality doesn't perform that ordinary coercion.

**3.**
```text
true
false
true
```

Non-empty strings and arrays are truthy, including empty arrays.

**4.**
```text
Guest
0
10
```

`??` only falls back for `null` or `undefined`. `||` also falls back for other falsy values such as zero.

**5.**
```text
5
7
7
```

Postfix returns the old value, then increments. Prefix increments first.

**6.**
```text
object
object
true
```

Arrays are objects, and `Array.isArray()` specifically identifies them.

**7.**
```text
10 20
```

The primitive value was copied, so changing `b` doesn't affect `a`.

**8.**
```text
50
```

Both variables refer to the same object.

**9.**
```text
345
75
```

Evaluation proceeds left to right, with string concatenation when `+` operates on a string.

**10.**
```text
B
```

The first condition is false, but `85 >= 60` is true.

---

# Day 1 — Mistakes I Must Not Repeat

These are the JavaScript concepts I need to revise

## 1. `typeof` — Know What It Returns

The `typeof` operator returns a string describing the type of a value.

```javascript
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"
console.log(typeof 42n);        // "bigint"
console.log(typeof [1, 2, 3]);  // "object"
console.log(typeof true);       // "boolean"
```

**Why these outputs?**

- `typeof null` returns `"object"` because of a historical JavaScript quirk. `null` itself represents the absence of a value; it is not an object.
- `typeof undefined` returns `"undefined"`.
- `42n` is a BigInt literal, so its type is `"bigint"`.
- Arrays are objects in JavaScript, so `typeof` an array returns `"object"`.

### Important: Operator precedence

```javascript
console.log(typeof 10 / 2);  // NaN
```

JavaScript evaluates this as:

```javascript
(typeof 10) / 2
```

First:

```javascript
typeof 10  // "number"
```

Then:

```javascript
"number" / 2  // NaN
```

The division attempts to convert `"number"` into a number, which fails.

**Remember:** `typeof 10 / 2` is not the same as `typeof (10 / 2)`.

```javascript
console.log(typeof (10 / 2));  // "number"
```

## 2. Type Conversion in Arithmetic

JavaScript sometimes converts values automatically when arithmetic operators are used.

```javascript
console.log(true + 2);        // 3
console.log(6 + null);        // 6
console.log(12 / "3");        // 4
console.log(7 + undefined);   // NaN
```

**Why?**

- `true + 2`: `true` converts to `1`, so `1 + 2 = 3`.
- `6 + null`: In numeric addition, `null` converts to `0`, so `6 + 0 = 6`.
- `12 / "3"`: The string `"3"` converts to the number `3`, so `12 / 3 = 4`.
- `7 + undefined`: `undefined` converts to `NaN` during numeric addition, so the result is `NaN`.

### Remember the special behaviour of `+`

The `+` operator can perform either numeric addition or string concatenation.

```javascript
console.log(10 + 20);       // 30
console.log("10" + 20);     // "1020"
console.log(10 - "5");      // 5
console.log("5" * 2);       // 10
```

When one operand is a string, `+` can concatenate strings. Other arithmetic operators generally attempt numeric conversion.

**Placement takeaway:** Never assume that every arithmetic expression containing a string produces a string.

## 3. `NaN` — Not a Number

`NaN` represents an invalid or unrepresentable numeric result.

```javascript
console.log(Number("hello"));   // NaN
console.log(Number("123abc"));  // NaN
console.log(7 + undefined);     // NaN
console.log(NaN === NaN);       // false
```

Even this comparison is false:

```javascript
console.log(NaN === NaN);  // false
```

`NaN` is unequal to every value, including itself.

To check whether a value is `NaN`, use:

```javascript
console.log(Number.isNaN(NaN));            // true
console.log(Number.isNaN(Number("hello"))); // true
console.log(Number.isNaN("hello"));         // false
```

`Number.isNaN()` checks whether the value itself is the numeric `NaN`; it does not first convert arbitrary values into numbers.

## 4. Truthy and Falsy Values

JavaScript converts values to booleans when a condition needs a truth value.

### Common falsy values

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy, including empty arrays, empty objects and nonempty strings.

```javascript
console.log(Boolean(0));       // false
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
console.log(Boolean(" "));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
```

**Why?**

- `0` is the numeric zero, so it is falsy.
- `"0"` is a nonempty string, so it is truthy.
- `"false"` is also a nonempty string, so it is truthy.
- `" "` contains a space, meaning it is not an empty string, so it is truthy.
- `[]` and `{}` are objects, and objects are truthy even when empty.

### Convert a value versus check a condition

```javascript
console.log(Number(""));   // 0
console.log(Boolean(""));  // false

console.log(Number(" "));  // 0
console.log(Boolean(" ")); // true
```

`Number()` converts these strings to numeric zero, but `Boolean()` checks whether the original string is empty. These operations answer different questions.

## 5. `||` Returns an Operand, Not Necessarily a Boolean

The logical OR operator, `||`, returns one of its operands.

```javascript
console.log(0 || 15);        // 15
console.log("" || "Guest");  // "Guest"
console.log("Hello" || "Guest"); // "Hello"
```

It returns the left operand if that operand is truthy; otherwise, it returns the right operand.

For example:

```javascript
let active = 0;
active = active || 7;

console.log(active);  // 7
```

Step by step:

1. `active` is `0`.
2. `0` is falsy.
3. `0 || 7` returns `7`.
4. `active` is updated to `7`.

**Important:** `||` does not always return `true` or `false`. It returns an operand, and that operand can be a number, string, object or another value.

## 6. Primitive Assignment Copies the Value

Primitive values include strings, numbers, booleans, `undefined`, `null`, BigInts and Symbols.

When one variable is assigned a primitive value from another variable, the value is copied.

```javascript
let a = 5;
let b = a;

b = 9;

console.log(a);  // 5
console.log(b);  // 9
```

**Why?**

1. `a` contains `5`.
2. `b = a` copies the primitive value `5` into `b`.
3. Changing `b` to `9` does not change `a`.

The variables now hold independent values.

## 7. Prefix and Postfix Increment/Decrement

Both `++` and `--` change a variable's value by one. The difference is what the expression evaluates to.

### Postfix: `x++`

The current value is used first; the variable is then incremented.

```javascript
let points = 9;

console.log(points++);  // 9
console.log(points);    // 10
```

### Prefix: `++x`

The variable is incremented first; the expression then evaluates to the new value.

```javascript
let points = 5;

console.log(++points);  // 6
console.log(points);    // 6
```

The same principle applies to decrement:

```javascript
let count = 3;

console.log(count--);  // 3
console.log(count);    // 2
```

**Memory trick:**

- `x++`: use the old value, then increment.
- `++x`: increment first, then use the new value.

## 8. Compound Assignment Operators

Compound assignment operators update a variable using its current value.

```javascript
let price = 20;

price -= 6;  // price = price - 6  → 14
price *= 2;  // price = price * 2  → 28

console.log(price);  // 28
```

Other common examples:

```javascript
let total = 12;

total += 3;  // 15
total -= 2;  // 13
total *= 2;  // 26
total /= 2;  // 13
total %= 5;  // 3

console.log(total);  // 3
```

`%` returns the remainder. In the last operation, `13 % 5` equals `3`.

## 9. Equality: `==` versus `===`

The loose equality operator `==` may convert types before comparing. The strict equality operator `===` compares types as well as values.

```javascript
console.log(8 == "8");   // true
console.log(8 === "8");  // false

console.log(1 == true);  // true
console.log(1 === true); // false

console.log(9 == true);  // false
```

For `9 == true`, JavaScript converts `true` to `1`. Since `9` is not equal to `1`, the result is `false`.

**Best practice:** Prefer `===` unless you have a specific reason to use loose equality.

## 10. Number Parsing and Default Values

### Parsing numbers

```javascript
console.log(Number("45.8"));      // 45.8
console.log(parseInt("45.8"));    // 45
console.log(parseFloat("45.8"));  // 45.8
console.log(parseInt("24px"));    // 24
console.log(Number("24px"));      // NaN
```

- `Number()` attempts to convert the entire value.
- `parseInt()` reads an integer from the beginning of a string.
- `parseFloat()` reads a decimal number from the beginning of a string.

### `??` versus `||`

```javascript
console.log("" ?? "Guest");  // ""
console.log("" || "Guest");  // "Guest"

console.log(0 ?? 100);       // 0
console.log(0 || 100);       // 100
```

- `||` uses the fallback for any falsy left operand.
- `??` uses the fallback only when the left operand is `null` or `undefined`.

## Final Self-Check

Before moving to the next JavaScript topic, I should be able to explain these without looking at my notes:

1. Why does `typeof null` return `"object"`?
2. Why does `typeof 10 / 2` return `NaN`?
3. Why does `true + 2` return `3`?
4. Why does `6 + null` return `6`?
5. Why is `NaN === NaN` false?
6. Why is `"0"` truthy but `0` falsy?
7. Why is `" "` truthy but `Number(" ")` equal to `0`?
8. Why does `0 || 15` return `15`?
9. Why does changing `b` not change `a` when `b` was assigned a primitive value from `a`?
10. What is the difference between `x++` and `++x`?
11. What is the difference between `==` and `===`?
12. When should I use `??` instead of `||`?
