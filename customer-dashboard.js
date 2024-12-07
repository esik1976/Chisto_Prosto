document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');
    const ordersList = document.getElementById('orders');

    // Функция для загрузки заказов
    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem('customer_orders')) || [];
        ordersList.innerHTML = '';

        if (orders.length === 0) {
            ordersList.innerHTML = '<li>Заказов пока нет.</li>';
            return;
        }

        orders.forEach((order, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${order.taskName}</strong> - ${order.taskDescription} <br>
                <em>Местоположение:</em> ${order.location}, <em>Дата выполнения:</em> ${order.dueDate} <br>
                <em>Исполнитель:</em> ${order.executor ? order.executor : 'Еще никто не взял'}
            `;
            li.style.marginBottom = '15px';
            ordersList.appendChild(li);
        });
    }

    // Загрузка заказов при загрузке страницы
    loadOrders();

    // Обработка формы создания заказа
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const location = document.getElementById('location').value;
        const dueDate = document.getElementById('dueDate').value;

        const orders = JSON.parse(localStorage.getItem('customer_orders')) || [];
        orders.push({ taskName, taskDescription, location, dueDate, executor: null });
        localStorage.setItem('customer_orders', JSON.stringify(orders));

        successMessage.style.display = 'block';
        orderForm.reset();

        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        // Обновляем список заказов
        loadOrders();
    });
});
