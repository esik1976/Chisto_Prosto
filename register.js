document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Сохраняем данные в localStorage
    localStorage.setItem('registered', true);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Уведомляем пользователя и перенаправляем на страницу входа
    alert('Регистрация успешна!');
    window.location.href = 'login.html';
});
