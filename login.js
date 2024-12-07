document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверяем данные из localStorage
    const registeredEmail = localStorage.getItem('email');

    if (email === registeredEmail) {
        alert('Вход выполнен успешно!');
        // Здесь можно перенаправить на другую страницу после успешного входа
        window.location.href = 'dashboard.html';
    } else {
        alert('Неверный email или пароль');
    }
});
