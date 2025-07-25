`
//! pseudo code of if statement
if (condition == true){
    // code to execute if condition is true
}
`;

/*
let user_age = 30;
if (user_age >= 18)
  console.log(
    "you are eligible to vote because you are above 18. you are " +
      user_age +
      " years old"
  );*/

/*
let passwordStorage = "password123";
let userPassword = "password123";

if (passwordStorage == userPassword) {
  console.log("Access granted");
}
  */

/*
let user1 = 'four';
let user2 = 'Dog';
let wordCount = 5;

if (user1.length == wordCount || user2.length == wordCount){
    console.log("Both or one of the words have the same length of " + wordCount);
}else{
    console.log("Neither of the words have the same length of " + wordCount);
}
    */

/*
let userEntry = 28;
if(userEntry >= 10 && userEntry<=20){
    console.log("The user entry is between 10 and 20");
}else{
    console.log("The user entry is not between 10 and 20");
}
    */

/*
let userEntry = "ADMIN".toLowerCase();
if (
  userEntry == "admin" ||
  userEntry == "sunday" ||
  userEntry == "monday" ||
  userEntry == "tuesday" ||
  userEntry == "wednesday" ||
  userEntry == "thursday" ||
  userEntry == "friday" ||
  userEntry == "saturday"
) {
  console.log("Welcome " + userEntry + ", you have access to this system");
} else {
  console.log(
    "Access denied for " +
      userEntry +
      ", you do not  you have access to this system"
  );
}
  */

/*
const userPassword = "fake1234";
if (userPassword.length == 8) {
  console.log("The password is valid");
} else {
  console.log("The password is invalid");
}
  */

/*
const value1 = 10;
const value2 = "10";
if (value1 === value2) {
  console.log("The values are equal");
} else {
  console.log("The values are not equal");
}
  */

/*
if else if statement

A1 = 75 and above
B2 = 70 - 74
B3 = 65 - 69
C4 = 60 - 64
C5 = 55 - 59
C6 = 50 - 54
D7 = 45 - 49
E8= 40 - 44
F9 = 39 and below
*/

/*
const userScore = 26;
if (userScore >= 75) {
  console.log(" you scored an A1");
}else if (userScore >= 70 && userScore < 75){
    console.log(" you scored a B2");
}else if (userScore >= 65 && userScore < 70){
    console.log(" you scored a B3");
}else if (userScore >= 60 && userScore < 65){
    console.log(" you scored a C4");
}else if (userScore >= 55 && userScore < 60){
    console.log(" you scored a C5");
}else if (userScore >= 50 && userScore < 55){
    console.log(" you scored a C6");
}else if (userScore >= 45 && userScore < 50){
    console.log(" you scored a D7");
}
else if (userScore >= 40 && userScore < 45){
    console.log(" you scored a E8");
}else{
    console.log(" you scored a F9");
}
    */

//switch statement
const noOfDay = 2;
// if (noOfDay == 1) {
//   console.log("Monday");
// } else if (noOfDay == 2) {
//   console.log("Tuesday");
// } else if (noOfDay == 3) {
//   console.log("Wednesday");
// } else if (noOfDay == 4) {
//   console.log("Thursday");
// } else if (noOfDay == 5) {
//   console.log("Friday");
// } else if (noOfDay == 6) {
//   console.log("Saturday");
// } else if (noOfDay == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid day");
// }

switch (noOfDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// Ternary operator
