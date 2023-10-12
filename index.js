let studentScore = 34;
function studentGrade() {
   if (studentScore < 40) {
      return "E";
   } else if (studentScore <= 49) {
      return "D";
   } else if (studentScore <= 59) {
      return "C";
   } else if (studentScore <= 69) {
      return "B"
   } else {
      return "A";
   }
}


console.log(studentGrade());
