document.getElementById('btn-send-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const sendMoney = getInputFieldValueById('input-send-money');
    const pinNumber = getInputFieldValueById('input-send-money-pin');
    const charge = 5; //5 tk. will be cut for each send money, for now, maybe it's a %

    if(isNaN(sendMoney)){
        alert('Failed to transfer money');
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(sendMoney > balance){
            alert('You do not have sufficient balance');
            return;
        }
        
        const newBalance = balance - sendMoney - charge;

        document.getElementById('account-balance').innerText = newBalance;

        transactionHistoryEntry(sendMoney, newBalance, 'btn-send-money')
    }else{
        alert('Failed to send money. Please try again later');
    }
})