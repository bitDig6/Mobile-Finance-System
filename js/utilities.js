/**
 * Common Shared functions are here
 */
// console.log('utilities loaded');
// function getInputFieldValueById(){
//     console.log('will get value by id');

//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// };

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    //hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    //show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function transactionHistoryEntry(amount, newBalance, buttonId){
    const p = document.createElement('p');
    let op = '';

    if(buttonId === 'btn-add-money'){
     op = 'Add Money';   
    }else if(buttonId === 'btn-cash-out'){
        op = 'Cash Out'
    }else if(buttonId === 'btn-send-money'){
        op = 'Transfer Money';
    }

    p.innerText =  `${op} : ${amount} Tk. Balance: ${newBalance}`;
    if(buttonId === 'btn-send-money'){
        p.innerText += ' Charge: 5 Tk.';
    }
    console.log(p);
    document.getElementById('transaction-container').appendChild(p);
}