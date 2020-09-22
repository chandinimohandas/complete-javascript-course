// BMI calculating and printing

//Declaring variables
let massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn; isMarkBMIGreater=false;

//assigning values
massJohn = 60; massJohn = 65;
heightJohn = 1.76; heightMark = 1.82;

//BMI calulation
BMIMark = heightMark / (massMark ^ 2);
BMIJohn = heightJohn / (massJohn ^ 2);

//Checking condition
isMarkBMIGreater = BMIMark > BMIJohn;

//Console printing
console.log(isMarkBMIGreater);