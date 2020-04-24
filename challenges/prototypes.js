// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction can access internal because internal is above the function in the scope of myFunction, and NestedFunction is a child of the parent function.

/* Task 2: Counter */

function sumation(num) {
  let count = 0
  for (let i = num; i >= 0; i--) {
    count += i;
  }
  return count
}

console.log('sumation: ', sumation(4))

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
