document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    // Переход на страницу заказчика
    customerBtn.addEventListener('click', () => {
        window.location.href = 'customer.html';
    });

    // Здесь можно добавить обработчик для кнопки "Я исполнитель"
    executorBtn.addEventListener('click', () => {
        alert('Функционал для исполнителей пока в разработке.');
    });
});
