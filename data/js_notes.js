const javascript = {
  "JS Introduction": [
    "<h2 style='text-align: center;'>Introduction to JavaScript</h2>",
    "<li>JavaScript is a versatile, high-level programming language that is commonly used to create interactive effects within web browsers.</li>",
    "<li>It was created by Brendan Eich in 1995 and has since become one of the core technologies of the World Wide Web, alongside HTML and CSS.</li>",
    "<li>JavaScript is a prototype-based, multi-paradigm language that supports event-driven, functional, and imperative programming styles.</li>",
    "<li>It is widely used for both client-side and server-side web development.</li>",
    "<li>With the advent of Node.js, JavaScript can now also be used for server-side scripting, building scalable network applications.</li>",
    "<li>Popular frameworks and libraries such as React, Angular, and Vue.js are built on top of JavaScript.</li>",
  ],
  "JS Output": [
    "<h2 style='text-align: center;'>JavaScript Output</h2>",
    "<li>JavaScript can display data in different ways:</li>",
    "<ul><li><code>innerHTML</code> - To access and modify the HTML content of an element.</li>",
    "<li><code>document.write()</code> - To write directly to the HTML output stream.</li>",
    "<li><code>alert()</code> - To display an alert box with a message.</li>",
    "<li><code>console.log()</code> - To write output to the browser's console.</li></ul>",
    "<li>Example of using <code>innerHTML</code>:</li>",
    "<code>const demo = document.getElementById('demo');</code><br>",
    "<code>demo.innerHTML = 'Hello World!';</code>",
    "<li>Example of using <code>alert()</code>:</li>",
    "<code>alert('Hello World!');</code>",
    "<li>Example of using <code>console.log()</code>:</li>",
    "<code>console.log('Hello World!');</code>",
  ],
  "JS Statements": [
    "<h2 style='text-align: center;'>JavaScript Statements</h2>",
    "<li>JavaScript statements are instructions to be executed by the web browser.</li>",
    "<li>A JavaScript program is a list of programming statements.</li>",
    "<li>Statements can include values, operators, expressions, keywords, and comments.</li>",
    "<li>Each statement is usually written on a new line, and most statements end with a semicolon.</li>",
    "<li>Example of JavaScript statements:</li>",
    "<code>let x = 5;<br>let y = 6;<br>let z = x + y;</code>",
    "<li>JavaScript is case-sensitive, and white spaces are ignored.</li>",
  ],
  "JS Syntax": [
    "<h2 style='text-align: center;'>JavaScript Syntax</h2><p>Placeholder text for JavaScript Syntax.</p>",
  ],
  "JS Comments": [
    "<h2 style='text-align: center;'>JavaScript Comments</h2><p>Placeholder text for JavaScript Comments.</p>",
  ],
  "JS Type Conversion": [
    "<h2 style='text-align: center;'>JavaScript Type Conversion</h2>",
    "<li>JavaScript Type Conversion.</li>",
    "<li>JavaScript variables can be converted to a new variable and another data type:</li>",
    "<p style='font-size:18px;'>Converting Strings to Numbers:</p>",
    "<li>The global method Number() converts a variable (or a value) into a number.</li>",
    "<li>An empty string (like '') converts to 0.</li>",
    "<li>A non numeric string (like 'John') converts to NaN (Not a Number).</li>",
    "<li>The unary + operator can be used to convert a variable to a number.</li>",
    "<li>parseFloat(): Parses a string and returns a floating point number.</li>",
    "<li>parseInt(): Parses a string and returns an integer.</li>",
    "<p style='font-size:18px;'>Converting  Numbers to Strings:</p>",
    "<li>The global method String() can convert numbers to strings.</li>",
    "<li>It can be used on any type of numbers, literals, variables, or expressions.</li>",
    "<li>The Number method .toString() does the same.</li>",
  ],
  "JS Var": [
    "<h2 style='text-align: center;'>JavaScript Var</h2>",
    "<li>The var statement declares a variable.</li>",
    "<li>Variables are containers for storing information.</li>",
    "<li>Creating a variable in JavaScript is called declaring a variable.</li>",
    "<li>After the declaration, the variable is empty.</li>",
  ],
  "JS Let": [
    "<h2 style='text-align: center;'>JavaScript Let</h2><p>Placeholder text for JavaScript Let.</p>",
  ],
  "JS Const": [
    "<h2 style='text-align: center;'>JavaScript Const</h2><p>Placeholder text for JavaScript Const.</p>",
  ],
  "JS Operators": [
    "<h2 style='text-align: center;'>JavaScript Operators</h2><p>Placeholder text for JavaScript Operators.</p>",
  ],
  "JS Arithmetic": [
    "<h2 style='text-align: center;'>JavaScript Arithmetic</h2>",
    "<li>Arithmetic operators perform arithmetic on numbers.</li>",
    "<li>+ 	Addition.</li>",
    "<li>- 	Subtraction.</li>",
    "<li>* 	Multiplication.</li>",
    "<li>** 	Exponentiation.</li>",
    "<li>/	Division.</li>",
    "<li>%	Modulus it returns the division remainder.</li>",
    "<li>++	Increment.</li>",
    "<li>--	Decrement.</li>",
  ],
  "JS Assignment": [
    "<h2 style='text-align: center;'>JavaScript Assignment</h2><p>Placeholder text for JavaScript Assignment.</p>",
  ],
  "JS Data Types": [
    "<h2 style='text-align: center;'>JavaScript Data Types</h2>",
    "<li>Here are some JavaScript data types:</li>",
    `<ol><li>String: A string (or a text string) is a series of characters like "John Doe".Strings are written with quotes. You can use single or double quotes.</li>
    <li>Number: All JavaScript numbers are stored as decimal numbers. Numbers can be written with, or without decimals.</li>
    <li>Bigint: JavaScript BigInt is a new datatype that can be used to store integer values that are too big to be represented by a normal JavaScript Number.</li>
    <li>Boolean: Booleans can only have two values: true or false.</li>
    <li>Undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined.</li>
    <li>Object types can be: objects, arrays, dates, maps and more</li></ol>`,
  ],
  "JS Functions": [
    "<h2 style='text-align: center;'>JavaScript Functions</h2>",
    "<li>A JavaScript function is a block of code designed to perform a particular task.</li>",
    "<li>A JavaScript function is executed when 'something' invokes it (calls it).</li>",
    "<li>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().</li>",
    "<li>Function names can contain letters, digits, underscores, and dollar signs.</li>",
    "<li>The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...)</li>",
    "<li>The code to be executed, by the function, is placed inside curly brackets: {}</li>",
    "<li>Function parameters are listed inside the parentheses () in the function definition.</li>",
    "<li>When JavaScript reaches a return statement, the function will stop executing.</li>",
    "<li>Accessing a function without () returns the function and not the function result.</li>",
    "<li>Function parameters are listed inside the parentheses () in the function definition.</li>",
    "<li>Function parameters are the names listed in the function definition.</li>",
    "<li>Function arguments are the real values passed to (and received by) the function.</li>",
    "<li>JavaScript function definitions do not specify data types for parameters.</li>",
    "<li>JavaScript functions do not perform type checking on the passed arguments.</li>",
    "<li>JavaScript functions do not check the number of arguments received.</li>",
    "<li>If a function is called with missing arguments (less than declared), the missing values are set to undefined.</li>",
    "<li>Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.</li>",
    "<li>The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.</li>",
  ],
  "JS Arrow Function": [
    "<h2 style='text-align: center;'>JavaScript Arrow Function</h2>",
    "<li>Arrow functions were introduced in ES6.</li>",
    "<li>Before Arrow:</li>",
    `<code>let hello = function() {<br>
      return "Hello World!";<br>
      }</code><br>`,
    "<li>With Arrow Function:</li>",
    `<code>let hello = () => {<br>
    return "Hello World!";<br>
    }</code>`,
    "<li>It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.</li>",
    "<li>Note: This works only if the function has only one statement.</li>",
    `<code>let hello = () => "Hello World!";</code>`,
    "<li>Arrow Function With Parameters:</li>",
    `<code>let calc = (val1,val2,....) => + val1+val2+....+;</code>`,
    "<li>Arrow Function With one Parenthese:</li>",
    `<code>let hello = (val) => "Hello World!"+val;</code>`,
    "<li>Arrow Function Without Parenthese:</li>",
    `<code>let hello = _ => "Hello";</code>`,
  ],
  "JS Hoisting": [
    "<h2 style='text-align: center;'>JavaScript Hoisting</h2>",
    "<li>Hoisting is JavaScript's default behavior of moving declarations to the top.</li>",
    "<li>In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.</li>",
    "<li>Hoisting applies to variable declarations and to function declarations.</li>",
    "<li>Because of this, JavaScript functions can be called before they are declared.</li>",
    "<li>Variables defined with let and const are hoisted to the top of the block, but not initialized.</li>",
    "<li>The block of code is aware of the variable, but it cannot be used until it has been declared.</li>",
    "<li>Using a let or const variable before it is declared will result in a ReferenceError.</li>",
  ],
  "JS Scope": [
    "<h2 style='text-align: center;'>JavaScript Scope</h2>",
    "<li>Scope determines the accessibility (visibility) of variables.</li>",
    "<li>JavaScript variables have 3 types of scope:</li>",
    "<ol><li>Block scope</li>",
    "<li>Function scope</li>",
    "<li>Global scope</li></ol>",
    "<li>Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope</li>",
    "<li>ES6 introduced two important new JavaScript keywords: let and const.</li>",
    "<li>These two keywords provide Block Scope in JavaScript.</li>",
    "<li>Variables declared inside a { } block cannot be accessed from outside the block.</li>",
    "<li>Variables declared within a JavaScript function, are LOCAL to the function.</li>",
    "<li>Since local variables are only recognized inside their functions.</li>",
    "<li>Local variables are created when a function starts, and deleted when the function is completed.</li>",
    "<li>JavaScript has function scope, Each function creates a new scope.</li>",
    "<li>Variables defined inside a function are not accessible (visible) from outside the function.</li>",
    "<li>Variables declared with var, let and const are quite similar when declared inside a function. They all have Function Scope.</li>",
    "<li>A variable declared outside a function, becomes GLOBAL.</li>",
  ],
  "JS Objects": [
    "<h2 style='text-align: center;'>JavaScript Objects</h2>",
    "<li>In real life, objects are things like: houses, cars, people, animals, or any other subjects.</li>",
    "<li>A real life car has properties like weight and color:</li>",
    "<li>car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.</li>",
    "<li>Car objects have the same properties, but the values differ from car to car.</li>",
    "<li>Objects are variables too. But objects can contain many values.</li>",
    "<li>This code assigns many values (Fiat, 500, white) to an object named car with 3 properties.</li>",
    "<li><code>const car = {type:'Fiat', model:'500', color:'white'};</code></li>",
    "<li>This example creates an empty JavaScript object, and then adds 4 properties.</li>",
    `<li><code>// Create an Object<br>
    const person = {};<br><br>
    // Add Properties<br>
    person.firstName = "John";<br>
    person.lastName = "Doe";<br>
    person.age = 50;<br>
    person.eyeColor = "blue";</code></li>`,
  ],
  "JS Object Properties": [
    "<h2 style='text-align: center;'>JavaScript Object Properties</h2>",
    "<li>Properties are the most important part of JavaScript objects.</li>",
    "<li>Properties can be changed, added, deleted, and some are read only.</li>",
    "<li>The syntax for accessing the property of an object is:</li>",
    `<li><code>objectName.property</code> or <code>objectName["property"]</code>.</li>`,
    "<li>We can add new properties to an existing object by simply giving it a value.</li>",
    `<li>The delete keyword deletes a property from an object:</li>`,
    `<li><code>delete objectName.property;</code></li>`,
  ],
  "JS Object Methods": [
    "<h2 style='text-align: center;'>JavaScript Object Methods</h2>",
    "`<li>Object methods are actions that can be performed on objects.</li>",
    "<li>A method is a function definition stored as a property value.</li>",
    "<li>If we invoke the property with (), it will execute as a function.</li>",
    "<li>But if we access the property without (), it will return the function definition.</li>",
    "<li>Adding a new method to an object is easy:</li>",
    `<li><code>person.name = function () { };</code></li>`,
  ],
  "JS Object Display": [
    "<h2 style='text-align: center;'>JavaScript Object Display</h2><p>Placeholder text for JavaScript Object Display.</p>",
  ],
  "JS Object Constructors": [
    "<h2 style='text-align: center;'>JavaScript Object Constructors</h2><p>Placeholder text for JavaScript Object Constructors.</p>",
  ],
  "JS Events": [
    "<h2 style='text-align: center;'>JavaScript Events</h2><p>Placeholder text for JavaScript Events.</p>",
  ],
  "JS Strings": [
    "<h2 style='text-align: center;'>JavaScript Strings</h2>",
    "<li>A JavaScript string is zero or more characters written inside quotes.</li>",
    "<li>We can use single or double quotes. There is no difference between the two.</li>",
    "<li>You can use quotes inside a string, as long as they don't match the quotes surrounding the string.</li>",
    "<li>To find the length of a string, use the built-in length property.</li>",
  ],
  "JS String Methods": [
    "<h2 style='text-align: center;'>JavaScript String Methods</h2>",
    "<li>Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.</li>",
    "<li>The length property returns the length of a string.</li>",
    "<li>The charAt() method returns the character at a specified index (position) in a string.</li>",
    "<li>The property access [] like in arrays, returns the character at a specified index (position) in a string</li>",
    "<li>If no character is found, [] returns undefined, while charAt() returns an empty string.</li>",
    "<li>If no character is found, [ ] returns undefined, while charAt() returns an empty string.</li>",
    "<li>slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position.</li>",
    "<li>substring() is similar to slice().</li>",
    "<li>The difference is that start and end values less than 0 are treated as 0 in substring(). But If a parameter is negative in slice(), the position is counted from the end of the string</li>",
    "<li>substr() is similar to slice().</li>",
    "<li>The difference is that the second parameter specifies the length of the extracted part.</li>",
    "<li>The trimStart() method removes whitespace only from the start of a string.</li>",
    "<li>The trimEnd() method removes whitespace only from the end of a string.</li>",
    "<li>The trim() method removes whitespace from both sides of a string.</li>",
  ],
  "JS String Search": [
    "<h2 style='text-align: center;'>JavaScript String Search</h2>",
    "<li>JavaScript String Search allows you to search for a small string within a large string</li>",
    "<li>The indexOf() method returns the index (position) of the first occurrence of a string in a string.</li>",
    "<li>JavaScript counts positions from zero.</li>",
    "<li>The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.</li>",
    "<li>Both indexOf(), and lastIndexOf() return -1 if the text is not found.</li>",
    "<li>Both methods accept a second parameter as the starting position for the search.</li>",
    "<li>The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.</li>",
    "<li>The includes() method returns true if a string contains a specified value.</li>",
    "<li>The startsWith() method returns true if a string begins with a specified value.</li>",
    "<li>The endsWith() method returns true if a string ends with a specified value.</li>",
    "<li>The endsWith() can takes 2 parameters the second parameter specifies the length of the detected part.</li>",
  ],
  "JS String Templates": [
    "<h2 style='text-align: center;'>JavaScript String Templates</h2><p>Placeholder text for JavaScript String Templates.</p>",
  ],
  "JS Numbers": [
    "<h2 style='text-align: center;'>JavaScript Numbers</h2><p>Placeholder text for JavaScript Numbers.</p>",
  ],
  "JS BigInt": [
    "<h2 style='text-align: center;'>JavaScript BigInt</h2><p>Placeholder text for JavaScript BigInt.</p>",
  ],
  "JS Number Methods": [
    "<h2 style='text-align: center;'>JavaScript Number Methods</h2><p>Placeholder text for JavaScript Number Methods.</p>",
  ],
  "JS Comparison": [
    "<h2 style='text-align: center;'>JavaScript Comparison</h2>",
    "<li>Comparison operators are used in logical statements to test for true or false.</li>",
    "<li>To determine equality or difference between variables or values</li>",
    "<li>Comparison operators can be used in conditional statements to compare values and take action depending on the result.</li>",
    "<li>Here are some comparison operators:</li>",
    "<ol><li>==: equal to</li>",
    "<li>===:	equal value and equal type</li>",
    "<li>!=:	not equal</li>",
    "<li>!==	not equal value or not equal type</li>",
    "<li>>	greater than</li>",
    "<li><	less than</li>",
    "<li>>=	greater than or equal to</li>",
    "<li><=	less than or equal to</li></ol>",
    "<li>Logical operators are used to determine the logic between variables or values.</li>",
    "<li>Here are some logical operators:</li>",
    "<ol><li>&&:	and</li>",
    "<li>||:	or</li>",
    "<li>!: not</li></ol>",
  ],
  "JS Number Properties": [
    "<h2 style='text-align: center;'>JavaScript Number Properties</h2>",
    "<li>JavaScript Number Properties:</li>",
    "<li>Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.</li>",
    "<li>Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.</li>",
    "<li>Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.</li>",
    "<li>Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.</li>",
  ],
  "JS If Else": [
    "<h2 style='text-align: center;'>JavaScript If Else</h2>",
    "<li>Conditional statements are used to perform different actions based on different conditions.</li>",
    "<li>Very often when we write code, we want to perform different actions for different decisions.</li>",
    "<li>You can use conditional statements in our code to do this.</li>",
    "<li>In JavaScript we have the following conditional statements:</li>",
    "<ol><li>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true.</li>",
    "<li>Use <code>else</code> to specify a block of code to be executed, if the same condition is false.</li>",
    "<li>Use <code>else if</code> to specify a new condition to test, if the first condition is false</li></ol>",

    "<li>The ternary operator is a compact form of the if-else statement. It is used to assign a value to a variable based on a condition.</li>",
    "<li>Here is a simple example of using a ternary operator in JavaScript:</li>",
    "<li><code>let result = age < 15 ? 'you are young you can't trade' : 'Welcome to binance';</code></li>",
    "<li>Here's what it does:</li>",
    "<ol><li>age < 15 is the condition being checked.</li>",
    "<li>If age is less than 15, result will be assigned the value 'you are young you can't trade'</li>",
    "<li>If age is 15 or greater, result will be assigned the value 'Welcome to binance'</li></ol>",

    "<li>Ternary operators are concise but can be harder to read if overused or nested.</li>",
    "<li>If-else statements are more readable, especially for complex conditions.</li>",
    "<li>Ternary operators are best for simple, concise conditions and assignments.</li>",
    "<li>If-else statements are better for complex logic, multiple conditions, or where more than one line of code needs to be executed based on the condition.</li>",
  ],
  "JS Switch ": [
    "<h2 style='text-align: center;'>JavaScript Switch</h2>",
    "<li>The switch statement is used to perform different actions based on different conditions.</li>",
    "<li>Use the switch statement to select one of many code blocks to be executed.</li>",
    "<li>The switch expression is evaluated once.</li>",
    "<li>The value of the expression is compared with the values of each case.</li>",
    "<li>If there is a match, the associated block of code is executed.</li>",
    "<li>If there is no match, the default code block is executed.</li>",
    "<li>When JavaScript reaches a break keyword, it breaks out of the switch block.</li>",
    "<li>This will stop the execution inside the switch block.</li>",
    "<li>It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.</li>",
    "<li>The default keyword specifies the code to run if there is no case match.</li>",
    "<li>The default case does not have to be the last case in a switch block, it can be the first case in a switch block.</li>",
    "<li>If default is not the last case in the switch block, remember to end the default case with a break.</li>",
    "<li>Switch cases use strict comparison (===).The values must be of the same type to match.</li>",
  ],
  "JS Loop For": [
    "<h2 style='text-align: center;'>JavaScript For Loop</h2>",
    "<li>Loops can execute a block of code a number of times.</li>",
    "<li>Loops are handy, if you want to run the same code over and over again, each time with a different value.</li>",
    "<li>for - loops through a block of code a number of times.</li>",
    "<li>The for statement creates a loop with 3 optional expressions.</li>",
    "<li><code>for (expression 1; expression 2; expression 3) {// code block to be executed}</code></li>",
    "<li>For example:</li>",
    "<ol><li>Expression 1 sets a variable before the loop starts (let i = 0).</li>",
    "<li>Expression 2 defines the condition for the loop to run (i must be less than 5).</li>",
    "<li>Expression 3 increases a value (i++) each time the code block in the loop has been executed.</li></ol>",
  ],
  "JS Loop While": [
    "<h2 style='text-align: center;'>JavaScript While Loop</h2>",
    "<li>The while loop loops through a block of code as long as a specified condition is true.</li>",
    "<li>If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.</li>",
    "<li>In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:</li>",
    `<code><pre>while (i < 10) {
      text += "The number is " + i;
      i++;
    }</pre></code>`,
    "<li>The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</li>",
    "<li>The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</li>",
    `<code><pre>do {
      text += "The number is " + i;
      i++;
    }while (i < 10);</pre></code>`,
  ],
  "JS Arrays": [
    "<h2 style='text-align: center;'>JavaScript Arrays</h2>",
    "<li>An array is a special variable, which can hold more than one value.</li>",
    "<li>An array can hold many values under a single name, and you can access the values by referring to an index number..</li>",
    "<li>Using an array literal is the easiest way to create a JavaScript Array.</li>",
    "<li>For simplicity, readability and execution speed, use the array literal method.</li>",
    "<li>This statement changes the value of the first element in cars: cars[0] = 'Opel';</li>",
  ],
  "JS Array Methods": [
    "<h2 style='text-align: center;'>JavaScript Array Methods</h2>",
    "<li>The length property returns the length (size) of an array.</li>",
    "<li>The push() method adds a new element to an array (at the end).x</li>",
    "<li>The unshift() method adds a new element to an array (at the beginning).</li>",
    "<li>The shift() method removes the first element from an array.</li>",
    "<li>The pop() method removes the last element from an array.</li>",
    "<li>you can use splice() to remove elements, it contains to parametre.</li>",
    "<li>To remove elements, specify the start index and number of elements will be deleted removed.</li>",
    "<li>The splice() method can be used to add new items to an array.</li>",
    "<li>The first parameter defines the position where new elements should be added.</li>",
    "<li>The second parameter defines how many elements should be removed.</li>",
    "<li>The rest of the parameters define the new elements to be added.</li>",
    "<li>The slice() method slices out a piece of an array into a new array. It does not remove any elements from the source array.</li>",
    "<li>The concat() method creates a new array by merging (concatenating) existing arrays.</li>",
    "<li>The concat() method does not change the existing arrays. It always returns a new array.</li>",
    "<li>The concat() method can take any number of array arguments.</li>",
    "<li>The join() method also joins all array elements into a string.</li>",
  ],
  "JS Array Search": [
    "<h2 style='text-align: center;'>JavaScript Array Search</h2>",
    "<li>The indexOf() method searches an array for an element value and returns its position.</li>",
    "<li>Array.indexOf() returns -1 if the item is not found.</li>",
    "<li>Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.</li>",
    "<li>The includes() method allows us to check if an element is present in an array.</li>",
  ],
  "JS Array Sort": [
    "<h2 style='text-align: center;'>JavaScript Array Sort</h2>",
    "<li>The sort() method sorts an array alphabetically.</li>",
    "<li>The reverse() method reverses the elements in an array.</li>",
    "<li>By combining sort() and reverse(), you can sort an array in descending order.</li>",
  ],
  "JS Array Iteration": [
    "<h2 style='text-align: center;'>JavaScript Array Iteration</h2><p>Placeholder text for JavaScript Array Iteration.</p>",
  ],
  "JS Array Const": [
    "<h2 style='text-align: center;'>JavaScript Array Const</h2><p>Placeholder text for JavaScript Array Const.</p>",
  ],
  "JS Dates": [
    "<h2 style='text-align: center;'>JavaScript Dates</h2><p>Placeholder text for JavaScript Dates.</p>",
  ],
  "JS Date Formats": [
    "<h2 style='text-align: center;'>JavaScript Date Formats</h2><p>Placeholder text for JavaScript Date Formats.</p>",
  ],
  "JS Date Get Methods": [
    "<h2 style='text-align: center;'>JavaScript Date Get Methods</h2><p>Placeholder text for JavaScript Date Get Methods.</p>",
  ],
  "JS Date Set Methods": [
    "<h2 style='text-align: center;'>JavaScript Date Set Methods</h2><p>Placeholder text for JavaScript Date Set Methods.</p>",
  ],
  "JS Math": [
    "<h2 style='text-align: center;'>JavaScript Math</h2>",
    "<li>The JavaScript Math object allows you to perform mathematical tasks on numbers.</li>",
    "<li>Unlike other objects, a Math object does not have a constructor.</li>",
    "<p style='font-size:18px;' >Math Properties:</p>",
    "<li>The syntax for any Math property is : Math.property like:</li>",
    "<ol><li>Math.PI: returns PI</li>",
    "<li>Math.E: returns Euler's number</li></ol>",
    "<p style='font-size:18px;'>Math Methods:</p>",
    "<li>The syntax for Math any methods is : Math.method(number) like:</li>",
    "<ol><li>Math.round(x): Returns x rounded to its nearest integer</li>",
    "<li>Math.ceil(x): Returns x rounded up to its nearest integer</li>",
    "<li>Math.floor(x): Returns x rounded down to its nearest integer</li>",
    "<li>Math.trunc(x): Returns the integer part of x </li></ol>",
  ],
  "JS Random": [
    "<h2 style='text-align: center;'>JavaScript Random</h2><p>Placeholder text for JavaScript Random.</p>",
  ],
  "JS Booleans": [
    "<h2 style='text-align: center;'>JavaScript Booleans</h2><p>Placeholder text for JavaScript Booleans.</p>",
  ],
};
