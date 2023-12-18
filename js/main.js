const inputNumber1 = document.querySelector('#number1');
inputNumber1.addEventListener('change', handleFormInput);
console.log(inputNumber1);

const inputNumber2 = document.querySelector('#number2');
inputNumber2.addEventListener('change', handleFormInput);
console.log(inputNumber2);

const btnPlus = document.querySelector('#btn-plus');
btnPlus.addEventListener('click', handleBtnPlus);

const btnTimes = document.querySelector('#btn-times');
btnTimes.addEventListener('click', handleBtnTimes);

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', handleBtnClear);

const total = document.querySelector("#result-box");
console.log(total);


function handleBtnPlus(event) {
    event.preventDefault();
    const result = Number.parseFloat(inputNumber1.value) + Number.parseFloat(inputNumber2.value);
    total.textContent = result;
    console.log(result);
    return result;
}

function handleBtnTimes(event) {
    event.preventDefault();
    const result = Number.parseFloat(inputNumber1.value) * Number.parseFloat(inputNumber2.value);
    total.textContent = result;
    console.log(result);
    return result;
}

function handleBtnClear(event) {
    event.preventDefault();
    inputNumber1.value = "";
    inputNumber2.value = "";
    inputErrorRemover(inputNumber1);
    inputErrorRemover(inputNumber2);
    total.textContent = 0;
}

function handleFormInput(event) {
    const inputValue = event.target.value;
    const number = Number.parseFloat(inputValue);
    if (isNumber(number)) {
        inputErrorRemover(event.target);
    } else {
        event.target.classList.add("input-error");
        console.log("não é número.");
    }
}

function isNumber(n) {
    return !Number.isNaN(Number(n)) && Number.isFinite(n);
    }

    function inputErrorRemover(element) {
        if (element.classList.contains("input-error")) {
          element.classList.remove("input-error");
        }
      }
