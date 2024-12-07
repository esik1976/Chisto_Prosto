document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const executorBtn = document.getElementById('executorBtn');

    // Обработчик для заказчика
    customerBtn.addEventListener('click', () => {
        const isRegistered = localStorage.getItem('customer_registered');

        if (isRegistered) {
            // Перенаправляем на форму входа для заказчика
            window.location.href = './customer-login.html';
        } else {
            // Перенаправляем на страницу регистрации заказчика
            window.location.href = './customer-register.html';
        }
    });

    // Обработчик для исполнителя
    executorBtn.addEventListener('click', () => {
        const isRegistered = localStorage.getItem('executor_registered');

        if (isRegistered) {
            // Перенаправляем на форму входа для исполнителя
            window.location.href = './executor-login.html';
        } else {
            // Перенаправляем на страницу регистрации исполнителя
            window.location.href = './executor-register.html';
        }
    });
});
