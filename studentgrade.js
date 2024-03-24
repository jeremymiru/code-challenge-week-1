function getGrade(marks) {
    if (marks < 0 || marks > 100) {
      return "Error";
    }
  
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 49) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  const marks = parseInt(prompt("Enter student's marks:"));
  const grade = getGrade(marks);
  console.log(grade);