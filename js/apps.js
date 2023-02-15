function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random()* 10000);
    return random;
}
document.getElementById('btn-generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumbersField = document.getElementById('type-numbers');
    const previousTypeNumbers = typeNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumbersField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypeNumbers.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            typeNumbersField.value = remainingDigit;

        }
    }
    else{
        const newTypeNumbers = previousTypeNumbers + number;
        typeNumbersField.value = newTypeNumbers;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typePinField = document.getElementById('type-numbers');
    const typePin = typePinField.value ;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(currentPin === typePin){
       pinSuccessMessage.style.display = 'block';
       pinFailureMessage.style.display = 'none';

    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

        
    }
})