document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, зарегистрирован ли пользователь
    const isRegistered = localStorage.getItem('registered');

    if (isRegistered) {
        // Перенаправляем на страницу входа
        console.log('Пользователь зарегистрирован. Перенаправляем на страницу входа.');
        window.location.href = './login.html';
    } else {
        // Перенаправляем на страницу регистрации
        console.log('Пользователь не зарегистрирован. Перенаправляем на страницу регистрации.');
        window.location.href = './register.html';
    }
});
