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
        console.log('Роль сохранена в localStorage.');
        window.location.reload();
    });

    // Обработчик для кнопки "Я исполнитель"
    executorBtn.addEventListener('click', () => {
        console.log('Выбрана роль: исполнитель');
        localStorage.setItem('role', 'executor');
        console.log('Роль сохранена в localStorage.');
        window.location.reload();
    });

    // Проверяем, выбрана ли роль
    const selectedRole = localStorage.getItem('role'); // "customer" или "executor"

    if (!selectedRole) {
        console.log('Роль не выбрана. Показываем выбор роли.');
        return;
    }

    console.log(`Выбрана роль: ${selectedRole}`);

    // Перенаправление в зависимости от выбранной роли
    if (selectedRole === 'customer') {
        console.log('Проверяем регистрацию заказчика...');
        const isRegistered = localStorage.getItem('customer_registered');
        if (isRegistered) {
            console.log('Заказчик зарегистрирован. Перенаправляем на страницу входа.');
            window.location.href = './customer-login.html';
        } else {
            console.log('Заказчик не зарегистрирован. Перенаправляем на регистрацию.');
            window.location.href = './customer-register.html';
        }
    }

    if (selectedRole === 'executor') {
        console.log('Проверяем регистрацию исполнителя...');
        const isRegistered = localStorage.getItem('executor_registered');
        if (isRegistered) {
            console.log('Исполнитель зарегистрирован. Перенаправляем на страницу входа.');
            window.location.href = './executor-login.html';
        } else {
            console.log('Исполнитель не зарегистрирован. Перенаправляем на регистрацию.');
            window.location.href = './executor-register.html';
        }
    }
});
