const formEl = document.querySelector('.form');
const tableEl = document.querySelector('.table');
const inputEl = document.querySelectorAll('.input');
const totalPriceEl = document.querySelector('#total-price');

let totalSum = 0;

inputEl.forEach(input => {
    input.addEventListener('input', function () {
        input.setCustomValidity('');

        if (input.value.trim().length === 0) {
            input.setCustomValidity('Поле не может быть пустым');
            input.style.outline = '1px solid red'
        } else {
            input.style.outline = '1px solid green'
        }
        input.reportValidity();

        input.style.borderRadius = '12px'
        input.style.border = 'none'
        input.style.padding = '4px 10px'
    });
});

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);


    const trEl = document.createElement('tr');

    const currentPrice = (Number(data.number) * 36) + (Number(data.distance) * 67);
    totalSum += currentPrice;

    const inputGoods = document.querySelector('input[name="goods"]');
    const inputNumber = document.querySelector('input[name="number"]');
    const inputDistance = document.querySelector('input[name="distance"]');

    inputGoods.value = '';
    inputNumber.value = '';
    inputDistance.value = '';

    trEl.innerHTML = `
    <td>${data.goods}</td>
    <td>${data.number}</td>
    <td>${data.distance}</td>
    <td>${currentPrice}</td>
    `;
    if (totalPriceEl) {
    totalPriceEl.textContent = totalSum;
    }

    tableEl.append(trEl);
    // formEl.requestFullscreen();
});