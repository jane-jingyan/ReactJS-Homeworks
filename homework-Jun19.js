// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

// Starter data: list of students and their grades
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 58 },
    { name: "Charlie", grade: 95 },
    { name: "David", grade: 45 },
    { name: "Eva", grade: 72 },
  ];
  
  // =========================================
  // Task 1: Create a new array of strings in this format:
  // "Alice: 85", "Bob: 58", etc.
  // Display the result in the console
  // =========================================
  const studensList = students.map(item => `${item.name}: ${item.grade}`);
  console.log(studensList);
  // =========================================
  // Task 2: Create a new array that only includes the students
  // who passed (grade is 60 or higher)
  // Display the result in the console
  // =========================================
  const passedStudent = students.filter(student => student.grade >= 60);
  console.log(passedStudent);

  // =========================================
  // Task 3: Calculate the average grade of the class
  // Round the result to 2 decimal places
  // Display the result in the console
  // =========================================
  let totalGrade = 0;
  let i;
  for(i = 0; i < students.length; i ++)
  {
    totalGrade += students[i].grade;
  }
  const avgGrade = Math.round((totalGrade / i) * 100) / 100;
  console.log(avgGrade);

  // =========================================
  // Task 4: Loop through the students and log:
  // "<name> passed" if grade >= 60
  // "<name> failed" if grade < 60
  // Display the result in the console
  // =========================================
  for(i = 0; i < students.length; i ++)
  {
    if(students[i].grade >= 60){
      console.log(students[i].name + " passed");
    }else if(students[i].grade < 60)
      {
      console.log(students[i].name + " failed")
      } 
  };

  // =========================================
  // Task 5: Print each student’s name one by one using a loop
  // Display the result in the console
  // =========================================
  for(i = 0; i < students.length; i++)
  {
    console.log(students[i].name);
  };

  // =========================================
  // Bonus Task: Create a function that returns the student
  // with the highest grade
  // Display the result in the console
  // =========================================
  function highestGrade(students){
    let x = students[0];
    let i;
    for(i = 0; i < students.length; i ++)
    {
      if(x.grade < students[i].grade)
          x = students[i];
    }
    return x;
  }
  console.log(highestGrade(students));
  
  // =========================================
  // In-Place Task 1: Add a new property to each student called "status"
  // It should be set to "pass" or "fail" based on the grade
  // Modify the original students array directly
  // Display the modified students array in the console
  // =========================================
  students.forEach(student => {
    if(student.grade >= 60){
        student.status = "pass"
    }else if (student.grade < 60){
    student.status = "fail"}
  })
  console.log(students);

  // =========================================
  // In-Place Task 2: Curve the grades by adding 5 points to each student's grade
  // Make sure no grade goes over 100
  // Modify the original students array directly
  // Display the modified students array in the console
  // =========================================
  students.forEach(student => {
      student.grade += 5;
      if(student > 100){
          student.grade = 100;
      }
  })
  console.log(students);
  // ==============================
  // JavaScript Homework: Functions and Scope
  // ==============================
  
  // =========================================
  // Task 1: Create a function called greet that logs:
  // "Hello, student!" to the console
  // Then call the function
  // =========================================
  function greet(){
    console.log("Hello, student!");
  }
  greet();

  // =========================================
  // Task 2: Create a function that takes a name as a parameter
  // and logs "Hello, <name>!" to the console
  // Call the function with different names
  // =========================================
  function showName(name){
    console.log("Hello, "+name+"!");
  }
  showName("Jane")

  // =========================================
  // Task 3: Create a function that returns the square of a number
  // Call the function and store the result in a variable
  // Then log the result
  // =========================================
  function squareNumer(num){
    return num ** 2;
  };
  let result = squareNumer(11);
  console.log(result);
  
  // =========================================
  // Task 4: Demonstrate local vs global scope
  // Create a global variable and a function that has a local variable
  // Log both and explain the difference in a comment
  // Display both values in the console
  // =========================================
  let globalMessage = "It shows the global scope.";
  function showMessage(){
    let localMessage = "It shows the local scope.";
    console.log(globalMessage);
    console.log(localMessage);
  }
  showMessage(); //This will show both globa and local variables.
  //console.log(localMessage); //This throws an error, because we can't show a local variable that defined inside the funcyion.

  // =========================================
  // Task 5: Create a function that accepts another function as a parameter
  // The callback should log "Callback function was called"
  // Call the outer function and pass the inner function as an argument
  // =========================================
  function callback(){
      console.log("Callback function was called.");
  }
  function outerFunction(myCallback){
      myCallback();
  }
  outerFunction(callback);

  // =========================================
  // Task 6: Create a function that accepts two numbers and a function
  // The function should perform an operation using the passed-in function
  // Example: pass in add, subtract, multiply as callback functions
  // Call the main function with different callbacks
  // Display results in the console
  // =========================================
  function add(num1, num2)
  {
    let result = num1 + num2;
    return result;
  }
  function subtract(num1, num2)
  {
    let result =  num1 - num2;
    return result;
  }
  function multiply(num1, num2)
  {
    let result = num1 * num2;
    return result;
  }
  function mainFunction(operation, num1, num2)
  {
    console.log(operation(num1, num2));
  }
  mainFunction(add,2,3);
  mainFunction(subtract,2,3);
  mainFunction(multiply,2,3);

  // =========================================
  // Task 7: Create and use an anonymous function
  // Assign it to a variable and call it
  // It should log "Anonymous function executed"
  // =========================================
  const myFunction = function(){
    console.log("Anonymous function executed.");
  }
  myFunction();
  // =========================================
  // Task 8: Rewrite Task 7 using an arrow function instead
  // Call it and display the result in the console
  // =========================================
  const myArrowFunction = () => {
    console.log("My arrow anonymous function executed.");
  }
  myArrowFunction();