


function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('if get 3 digit then calling again', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin; //display pin on top
};

document.getElementById('key-pad').addEventListener('click', function (event) { //bubble
    // console.log('any key ');
    const number = event.target.innerText;
    // console.log(event.target.innerText); //even deligate
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {  //numbe na hole if
        // console.log(number);
        if (number == 'C') {  //clear
            calcInput.value = '';
        }
    } else {

        const previoudNumber = calcInput.value;
        const newNumbr = previoudNumber + number;
        calcInput.value = newNumbr;
    }
});

function verifyPin() {
    // console.log('going to verify');
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    const succeddmessege = document.getElementById('notify-success'); //success
    const failError = document.getElementById('notify-fail'); //fail

    if (pin == typedNumber) {
        // console.log('match !! yeay');
        succeddmessege.style.display = 'block';
        failError.style.display = 'none';

    } else {
        // console.log('Oppss!! ');
        failError.style.display = 'block';
        succeddmessege.style.display = 'none';

    }
};
