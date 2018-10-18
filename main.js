// Write your JavaScript here
calculateChange = (due, given) => {

    let change = given.toFixed(2)-due.toFixed(2);
    let dollars, quarters, dimes, nickels, pennies, remainder;
    
    dollars = Math.floor(change/1);
    remainder = ((change%1).toFixed(2))*100;
    quarters = Math.floor(remainder/25);
    remainder -= quarters*25;
    dimes = Math.floor(remainder/10);
    remainder -= dimes*10;
    nickels = Math.floor(remainder/5);
    remainder -= nickels*5;
    pennies = remainder.toFixed();

    document.getElementById('dollars-output').innerHTML = dollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickels;
    document.getElementById('pennies-output').innerHTML = pennies;

 }

runCalculation = () => {    
    let due = parseFloat(document.getElementById('amount-due').value); 
    let given = parseFloat(document.getElementById('amount-received').value);

    if (isNaN(due || given) || due.length == 0 || given.length == 0 || given < due ) {
        document.getElementById('amount-due').value = "";
        document.getElementById('amount-received').value = "";
        alert("Check your inpputs");
    } else {
        calculateChange(due, given);
    }
    
}

clearFields = () => {
    document.getElementById('amount-due').value = "";
    document.getElementById('amount-received').value = "";
}

document.getElementById('dollars-output').innerHTML = 0;
document.getElementById('quarters-output').innerHTML = 0;
document.getElementById('dimes-output').innerHTML = 0;
document.getElementById('nickels-output').innerHTML = 0;
document.getElementById('pennies-output').innerHTML = 0;
document.getElementById('calculate-change').addEventListener('click', runCalculation);
document.getElementById('clear-fields').addEventListener('click', clearFields);