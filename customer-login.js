document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const registeredEmail = localStorage.getItem('customer_email');

    if (email === registeredEmail) {
        alert('Вход выполнен успешно!');
        // Перенаправляем на страницу личного кабинета
        window.location.href = './customer-dashboard.html';
    } else {
        alert('Неверный email или пароль');
    }
});
