document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    if (!customerBtn || !executorBtn) {
        console.error('Кнопки не найдены на странице. Проверьте ID кнопок в HTML.');
        return;
    }

    // Обработчик для кнопки "Я заказчик"
    customerBtn.addEventListener('click', () => {
        console.log('Выбрана роль: заказчик');
        localStorage.setItem('role', 'customer');
        window.location.reload();
    });

    // Обработчик для кнопки "Я исполнитель"
    executorBtn.addEventListener('click', () => {
        console.log('Выбрана роль: исполнитель');
        localStorage.setItem('role', 'executor');
        window.location.reload();
    });
});
