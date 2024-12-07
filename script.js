document.getElementById('customerBtn').addEventListener('click', () => {
    // Сохраняем роль в localStorage
    localStorage.setItem('role', 'customer');
    // Перенаправляем на проверку регистрации
    window.location.reload();
});

document.getElementById('executorBtn').addEventListener('click', () => {
    // Сохраняем роль в localStorage
    localStorage.setItem('role', 'executor');
    // Перенаправляем на проверку регистрации
    window.location.reload();
});
