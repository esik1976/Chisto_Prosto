document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, есть ли пользовательские данные в localStorage
    const isRegistered = localStorage.getItem('registered');

    if (isRegistered) {
        // Пользователь зарегистрирован — перенаправляем на страницу входа
        window.location.href = 'login.html';
    } else {
        // Пользователь не зарегистрирован — перенаправляем на страницу регистрации
        window.location.href = 'register.html';
    }
});
