'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.getElementById('order-form');
    const productSelect = document.getElementById('product-select');
    const quantityInput = document.getElementById('quantity-input');
    const errorDiv = document.getElementById('error-message');
    const resultDiv = document.getElementById('result-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
        resultDiv.textContent = '';
        resultDiv.style.display = 'none';

        const quantityValue = quantityInput.value.trim();

        const numberPattern = /^\d+$/;

        if (!numberPattern.test(quantityValue)) {
            errorDiv.textContent = 'Ошибка: введите целое положительное число!';
            errorDiv.style.display = 'block';
            return;
        }

        const quantity = parseInt(quantityValue, 10);
        const price = parseInt(productSelect.value, 10);

        if (quantity === 0) {
            errorDiv.textContent = 'Ошибка: количество должно быть больше нуля!';
            errorDiv.style.display = 'block';
            return;
        }
        if (quantity > 200) {
            errorDiv.textContent = 'Ошибка: максимальное количество цветов в одном заказе - 200 шт.';
            errorDiv.style.display = 'block';
            return;
        }

        const totalCost = price * quantity;
        
        resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
        resultDiv.style.display = 'block';
    });
});