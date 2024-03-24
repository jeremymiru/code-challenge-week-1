function show(value){
    console.log(value)
}


let basicIncome = 660000;
let benefit = 4200;

function tax(taxableInc){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(taxableInc > 0 && taxableInc <= 24000){
        grossTax = (taxableInc*0.10);
    }else if (taxableInc >= 24001 && taxableInc<= 32333){
        rated = (taxableInc - 24000) * 0.25;
        grossTax = 2400 + rated
    }else if (taxableInc >= 32334 && taxableInc<= 500000){
        rated = (taxableInc- 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (taxableInc>= 500001 && taxableInc <= 800000){
        rated = (taxableInc- 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(taxableInc > 800000){
        rated = (taxableInc - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    paye =  (grossTax - personalRelief);
    netsalary = (taxableInc - paye);
  return { paye, netsalary } 
}
show(tax())

function kratax(basicSalary, benefits){
    let nssf = 0;
    let nhif = 0;

    function benefitsfunction(basicSalary, benefits = 0){
        let  nhifDeduction = 0
     
         if (basicSalary > 0  && basicSalary <= 5999){
           nhifDeduction  = 150
           
         }else if (basicSalary >= 6000 && basicSalary <= 7999){
           nhifDeduction =300
     
         }else if(basicSalary >= 8000 && basicSalary <= 11999){
           nhifDeduction =400
     
         }else if(basicSalary >= 12000 && basicSalary <= 14999){
           nhifDeduction =500
         }
         else if(basicSalary >= 15000 && basicSalary <= 19999){
           nhifDeduction =600
     
         }
         else if(basicSalary >= 20000 && basicSalary <= 24999){
           nhifDeduction =750
     
         }
         else if(basicSalary >= 25000 && basicSalary <= 29999){
           nhifDeduction =850
     
         }
         else if(basicSalary >= 30000 && basicSalary <= 34999){
           nhifDeduction =900
     
         }
         else if(basicSalary >= 35000 && basicSalary <= 39999){
           nhifDeduction =950
     
         }else if(basicSalary >= 40000 && basicSalary <= 44999){
           nhifDeduction =1000
     
         }
         else if(basicSalary >= 50000 && basicSalary <= 59999){
           nhifDeduction =1200
     
         }
         else if(basicSalary >= 60000 && basicSalary <= 69999){
           nhifDeduction =1300
     
         }
         else if(basicSalary >= 70000 && basicSalary <= 79999){
           nhifDeduction =1400
     
         }
         else if(basicSalary >= 80000 && basicSalary <= 89999){
           nhifDeduction =1500
     
         }
         else if(basicSalary >= 90000 && basicSalary <= 99999){
           nhifDeduction =1600
     
         }
         else if (basicSalary >= 100000){
           nhifDeduction =1700
         }
     
     
         if(benefits > 0){
             nssf = benefits;
         }else{
             nssf = basicSalary * 0.06;
         }
     
         nhif = nhifDeduction;
         taxableIncome = basicSalary - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 taxableIncome, 
             }
    }    

    function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(taxableIncome > 0 && taxableIncome <= 24000){
        grossTax = (taxableIncome*0.10);
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        rated = (taxableIncome - 24000* 0.25);
        grossTax = 2400 + rated
    }else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        rated = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (taxableIncome >= 500001 && taxableIncome <= 800000){
        rated = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(taxableIncome > 800000){
        rated = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    paye =  ~~(grossTax - personalRelief);
    netsalary = (taxableIncome - paye);
    return { paye, netsalary } 
    }
    
    let myTaxableIncome  = benefitsfunction(basicSalary,benefits);
    let taxed = tax(myTaxableIncome.taxableIncome);

    return {
        NSSFDeductions:  myTaxableIncome.nssf,
        NHIFDeductions:  myTaxableIncome.nhif,
        payee:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalaryy
    }
}
show(kratax(75000, 8222))