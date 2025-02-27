/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log(numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log(numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log(numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log(numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This is using a number data type as a boolean type to see if four is less than nine. The result should be true, because four is less than nine.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This is using a variable that represents a number, to see if four is greater than that variable, which represents three. The boolean result should be false, because four is not less than three.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//Two variables representing numbers, are being used to see if one variable (friends, which represents six) is greater than the second variable (siblings, which represents two). The boolean result should be true, because six is greater than two.
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Again there are two variables here representing numbers, to see if the first variable (attendees, which represents nine) does not equal the second variable (meals, which represnts 8). The boolean result should be true, because nine and eight are not equal.

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
//This will result in an answer of false, due to the fact this type of logical operator is only true when both variables are true.
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
// This will result in an answer of true, because this type of logical operator is only false when both variables are false.

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//This is going to be true because both are true.

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//This is going to be false, because one is true, and one is false.

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
//This is going to be true, because one is true and one is false.

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:My final line just showed age. I think this is because there is no var for puppy, so if I added var puppy <= 1; then the result would be true, because both are true

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
