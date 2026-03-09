1.Ans to the question no 1:

var:
var is the traditional way we used to declare variables in JavaScript in the earlier days. It allows us to change the value of a variable and even declare the same variable again in the same scope. Because of this flexibility, it sometimes makes our code confusing or leads to unexpected results. Another thing about var is that it is function-scoped, which means when we declare it inside a block like an if statement, it can still be accessed outside that block within the function. For this reason, we usually avoid using var in modern JavaScript.

let:
let is a newer way for us to declare variables and manage our code more safely. It is block-scoped, which means the variable only works inside the block {} where we create it. This helps us keep our code more organized and reduces mistakes. With let, we cannot declare the same variable again in the same scope, but we can still change its value later if we need to. We normally use let when we know the value of a variable might change during the execution of the program.

const:
const is used when we want to declare a variable whose value should remain the same. Once we assign a value to a const variable, we cannot change it later. This makes our code easier to understand because we know that the value will stay constant throughout the program. Like let, const is also block-scoped, so it only exists inside the block where we declare it. We often prefer using const when the value does not need to change, as it helps make our code more reliable and clear.



2.Ans to the question no 2:
The spread operator (...) in JavaScript is used when we want to expand or spread the elements of an array or the properties of an object. In simple terms, it helps us take values from one array or object and place them into another. This makes our code shorter and easier to read because we do not have to write many lines of code to copy or combine data.
We often use the spread operator when copying or merging arrays and objects. For example, if we have one array and we want to create another array with the same elements, we can use ... to spread the values into the new array. It can also be used to join multiple arrays or objects together in a simple way instead of using loops or complicated methods.
Another common use of the spread operator is when passing values to a function. If the values are stored inside an array, the spread operator allows us to send them to the function as separate arguments. Because it makes tasks like copying, combining, and passing data easier, the spread operator is a very useful feature in modern JavaScript.







Ans to the question No 3:

mao():
map() is used when we want to transform or change every element in an array and create a new array with those changes. It goes through each element and applies a function to it, then returns a new array with the updated values. The original array stays unchanged. We usually use map() when we need a new array after modifying each element.

filter():
filter() is used when we want to select only certain elements from an array based on a condition. It checks each element and keeps only the ones that meet the condition we define. The result is a new array that contains only the filtered elements. We use filter() when we want to remove unwanted values and keep only the ones that match our criteria.

forEach()"
forEach() is used when we simply want to go through each element of an array and perform an action, such as printing values or updating something. Unlike map() and filter(), it does not create or return a new array. It just runs a function for every element in the array. We usually use forEach() when we need to perform operations but do not need a new array as a result.






Ans to the question No 4:
An arrow function is a shorter and simpler way for us to write functions in JavaScript. It was introduced in ES6 to make our code cleaner and easier to read. Instead of using the traditional function keyword, we use an arrow symbol => to define the function. This allows us to write functions with less code, especially when the function is small and simple.We often use arrow functions when writing quick functions, such as when working with array methods like map(), filter(), or forEach(). They help us write code in a more compact way. For example, instead of writing a full function with many lines, we can create a function in just one line using the arrow syntax.








Ans to the question no 5:

Template literals are a way for us to create strings in JavaScript using backticks instead of quotes. They let us easily include variables or expressions inside a string using ${ }, so we don’t have to use + to combine text. They also allow us to write multi-line strings naturally without extra characters, making our code cleaner and easier to read.
