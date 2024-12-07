document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Сохраняем данные в localStorage
    localStorage.setItem('customer_registered', true);
    localStorage.setItem('customer_name', name);
    localStorage.setItem('customer_email', email);

    alert('Регистрация успешна!');
    window.location.href = './customer-login.html';
});
