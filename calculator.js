function netSalaryCalculator(grossIncome){
  let netSalary
  if (grossIncome <= 24000) {
    //calculates the net salary for the input gross income 
   return netSalary = grossIncome - ((grossIncome * 0.1) + 750)
  } else if (grossIncome >= 24001 && grossIncome <= 32333) {
    return netSalary = grossIncome - ((grossIncome * 0.25) + 850)
  } else if (grossIncome >= 32334 && grossIncome <= 500000){
    return netSalary = grossIncome - ((grossIncome * 0.3) + 950)
  } else if (grossIncome >= 500001 && grossIncome <= 800000){
     return netSalary = grossIncome - ((grossIncome * 0.325) + 1050)
  } else if (grossIncome > 800000) {
     return netSalary = grossIncome - ((grossIncome * 0.35) + 1150)
  }
}
// input the gross income to get the net salary 
console.log(netSalaryCalculator(50000)) 