document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    console.log('Тестовый код: кнопки подключены.');

    if (customerBtn) {
        customerBtn.addEventListener('click', () => {
            console.log('Кнопка "Я заказчик" нажата.');
        });
    }

    if (executorBtn) {
        executorBtn.addEventListener('click', () => {
            console.log('Кнопка "Я исполнитель" нажата.');
        });
    }
});
