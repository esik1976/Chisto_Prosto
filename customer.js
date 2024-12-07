document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const action = document.getElementById('action');

    // Проверяем, зарегистрирован ли заказчик
    const isRegistered = localStorage.getItem('customer_registered');

    if (isRegistered) {
        // Если зарегистрирован, показываем форму входа
        message.textContent = 'Введите свои данные для входа:';
        action.innerHTML = `
            <form id="loginForm">
                <label for="email">Email</label>
                <input type="email" id="email" required>
                <label for="password">Пароль</label>
                <input type="password" id="password" required>
                <button type="submit">Войти</button>
            </form>
        `;

        // Обработка входа
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const storedEmail = localStorage.getItem('customer_email');
            const storedPassword = localStorage.getItem('customer_password');

            if (email === storedEmail && password === storedPassword) {
                alert('Вход выполнен успешно!');
                // Перенаправляем в личный кабинет
                window.location.href = 'customer-dashboard.html';
            } else {
                alert('Неверный email или пароль!');
            }
        });
    } else {
        // Если не зарегистрирован, показываем кнопку регистрации
        message.textContent = 'Вы не зарегистрированы. Пожалуйста, зарегистрируйтесь:';
        action.innerHTML = `
            <button id="registerBtn">Зарегистрироваться</button>
        `;

        document.getElementById('registerBtn').addEventListener('click', () => {
            window.location.href = 'customer-register.html';
        });
    }
});
