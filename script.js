document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Отправка данных на сервер
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    // Обработка ответа
    const result = await response.json();
    if (result.success) {
        alert('Регистрация успешна!');
    } else {
        alert('Ошибка регистрации: ' + result.message);
    }
});
