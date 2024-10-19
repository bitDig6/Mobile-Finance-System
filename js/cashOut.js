document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Cash Out button clicked');

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(isNaN(cashOut)){
        alert('Failed to Cash Out');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history

        transactionHistoryEntry(cashOut, newBalance, 'btn-cash-out');

        // const div = document.createElement('div');
        // div.classList.add('bg-yellow-100');
        // div.innerHTML =    `
        //     <h4 class="text-2xl font-bold">Cash out</h4>
        //     <p>${cashOut} Tk. withdraw. New Balance ${newBalance} Tk.</p>
        // `;

        // document.getElementById('transaction-container').appendChild(div);
        // console.log(div);

    }else{
        alert('Failed to add money. Try again later');
    }
    // console.log(cashOut, pinNumber);
} );