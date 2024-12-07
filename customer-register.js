document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Сохраняем данные в LocalStorage
    localStorage.setItem('customer_registered', true);
    localStorage.setItem('customer_name', name);
    localStorage.setItem('customer_email', email);
    localStorage.setItem('customer_password', password);

    alert('Регистрация успешна!');
    window.location.href = 'customer.html';
});
