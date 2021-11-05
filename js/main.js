// Элементы формы
const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');

// Кнопки
const radType= document.querySelectorAll('input[name="type"]');
const radCeiling= document.querySelectorAll('input[name="ceiling"]');

const basePrice = 1000;
const totalPriceElement = document.querySelector('#total-price');


function calculate() {
    let totalPrice = basePrice * parseInt(squareInput.value);
    console.log(totalPrice);

    for (const radio of radType) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseInt(radio.value);
        }
    }

    for (const checkbox of radCeiling) {
        if (checkbox.checked === true) {
            totalPrice = totalPrice * parseFloat(checkbox.value);
        }
    }

    const  formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

let totalPrice = basePrice * parseInt(squareInput.value);

for (const input of inputs) {
   input.addEventListener('input', function () {
       calculate();
   }) 
}