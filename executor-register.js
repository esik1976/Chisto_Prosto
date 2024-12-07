document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Сохраняем данные в LocalStorage
    localStorage.setItem('executor_registered', true);
    localStorage.setItem('executor_name', name);
    localStorage.setItem('executor_email', email);
    localStorage.setItem('executor_password', password);

    alert('Регистрация успешна!');
    window.location.href = 'executor.html';
});
