document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипт работает!');

    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    if (!customerBtn || !executorBtn) {
        console.error('Кнопки не найдены.');
        return;
    }

    customerBtn.addEventListener('click', () => {
        console.log('Кнопка "Я заказчик" нажата.');
    });

    executorBtn.addEventListener('click', () => {
        console.log('Кнопка "Я исполнитель" нажата.');
    });
});
