document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Имитация успешной регистрации
    console.log('Данные для регистрации:');
    console.log({ name, email, password });

    // Показываем сообщение об успехе
    alert('Регистрация успешна! Данные отправлены в консоль.');
});
