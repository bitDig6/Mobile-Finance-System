/**
 * How to get a number from an input field
 * 1. create a variable
 * 2. on the right side, document.getElementById(id)
 * 3. .value
 * 4. parseFloat() 
 */
// console.log('add money loaded');
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    // console.log("added money and pin,", addMoney, pinNumber);

    //wrong way to verify
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        // console.log(balance);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText =  `Added ${addMoney} Tk. Balance: ${newBalance}`;
        console.log(p);

        //should be a common function
        // document.getElementById('transaction-container').appendChild(p);

        // console.log(newBalance);
    }else{
        alert('Failed to add money');
    }
});