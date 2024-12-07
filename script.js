document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    // Переход на страницу заказчика
    customerBtn.addEventListener('click', () => {
        window.location.href = 'customer.html';
    });

    // Переход на страницу исполнителя
    executorBtn.addEventListener('click', () => {
        window.location.href = 'executor.html';
    });
});
