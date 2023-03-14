
/* Process-2 */
 
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber; 
    
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
 
}

//call function

function updateCaseTotalPrice(newCaseNumber){ //for decrise call function

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;  
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    
    updateCaseTotalPrice(newCaseNumber); 
    calculateSubTotal();

});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
  
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});
 

/* First Part */
/* document.getElementById('btn-case-plu').addEventListener('click', function(){
    const caseNumberField = document.getElementById('cas-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber +1;
    caseNumberField.value = newCaseNumber;

});

document.getElementById('btn-case-minu').addEventListener('click', function(){
    const caseNumberField = document.getElementById('cas-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber -1;
    caseNumberField.value = newCaseNumber;

}); */

 /* Second Part */
/* document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber +1;
    caseNumberField.value = newCaseNumber;

});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber -1;
    caseNumberField.value = newCaseNumber;

});  */