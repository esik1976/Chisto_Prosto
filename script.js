document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, выбрана ли роль
    const selectedRole = localStorage.getItem('role'); // "customer" или "executor"

    if (!selectedRole) {
        // Если роль не выбрана, остаемся на главной странице
        console.log('Роль не выбрана. Показываем выбор роли.');
        return;
    }

    // Если роль заказчик, проверяем регистрацию
    if (selectedRole === 'customer') {
        const isRegistered = localStorage.getItem('customer_registered');
        if (isRegistered) {
            // Перенаправляем на форму входа для заказчика
            console.log('Заказчик зарегистрирован. Перенаправляем на страницу входа.');
            window.location.href = './customer-login.html';
        } else {
            // Перенаправляем на регистрацию заказчика
            console.log('Заказчик не зарегистрирован. Перенаправляем на регистрацию.');
            window.location.href = './customer-register.html';
        }
    }

    // Если роль исполнитель, проверяем регистрацию
    if (selectedRole === 'executor') {
        const isRegistered = localStorage.getItem('executor_registered');
        if (isRegistered) {
            // Перенаправляем на форму входа для исполнителя
            console.log('Исполнитель зарегистрирован. Перенаправляем на страницу входа.');
            window.location.href = './executor-login.html';
        } else {
            // Перенаправляем на регистрацию исполнителя
            console.log('Исполнитель не зарегистрирован. Перенаправляем на регистрацию.');
            window.location.href = './executor-register.html';
        }
    }
});
