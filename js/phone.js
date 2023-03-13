/* Process-1 */


function updatePhoneNumber(isIncrease){
    const caseNumberField = document.getElementById('phone-number-field');
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
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newCaseNumber = updatePhoneNumber(true);

    /* for plus and multiply 59 */
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById('phone-total');
    caseTotalElement.innerText = caseTotalPrice; 

});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newCaseNumber = updatePhoneNumber(false);

   /*  for minus and multiply 59 */
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById('phone-total');
    caseTotalElement.innerText = caseTotalPrice; 
    

});