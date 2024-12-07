document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');

    // Обработка формы заказа
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const location = document.getElementById('location').value;
        const dueDate = document.getElementById('dueDate').value;

        // Сохраняем заказ в localStorage
        const orders = JSON.parse(localStorage.getItem('customer_orders')) || [];
        orders.push({ taskName, taskDescription, location, dueDate });
        localStorage.setItem('customer_orders', JSON.stringify(orders));

        // Показываем сообщение об успешном размещении заказа
        successMessage.style.display = 'block';

        // Очищаем форму
        orderForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });
});
