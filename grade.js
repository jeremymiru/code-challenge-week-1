function getGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Error: Marks must be between 0 and 100";
  }

  if (marks >= 80) {
    return "A"; // any mark above 80 will be assigned grade A
  } else if (marks >= 60) {
    return "B";//any mark above 60 will be assigned grade B
  } else if (marks >= 49) {
    return "C";//any  mark above 49 will be assigned grade C
  } else if (marks >= 40) {
    return "D";// any mark above 40 will be assigned grade D
  } else {
    return "E";// any mark below 40 will be assigned grade E
  }
}
const prompt  = require("prompt-sync")();// prompt-sync is used to take input from user
var m = prompt("Enter student's marks:");// prompt is used to take input from user
const marks = parseInt(m);// parseInt is used to convert string to integer
const grade = getGrade(marks);// getGrade function is called
console.log(grade);// console.log is used to print the output