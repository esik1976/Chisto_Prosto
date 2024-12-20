document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');

   function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('customer_orders')) || [];
    console.log('Загружаемые заказы:', orders); // Отладочная информация

    const ordersTableBody = document.getElementById('orders');
    ordersTableBody.innerHTML = ''; // Очищаем таблицу перед добавлением строк

    if (orders.length === 0) {
        // Если заказов нет, добавляем сообщение в таблицу
        ordersTableBody.innerHTML = '<tr><td colspan="6">Заказов пока нет.</td></tr>';
        return;
    }

    // Проходим по каждому заказу и добавляем строку в таблицу
    orders.forEach((order, index) => {
        const row = document.createElement('tr'); // Создаем строку

        // Создаем и добавляем ячейки
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.taskName}</td>
            <td>${order.taskDescription}</td>
            <td>${order.location}</td>
            <td>${order.dueDate}</td>
            <td>${order.executor ? order.executor : 'Еще никто не взял'}</td>
        `;

        ordersTableBody.appendChild(row); // Добавляем строку в тело таблицы
    });
}

    loadOrders();

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const location = document.getElementById('location').value;
        const dueDate = document.getElementById('dueDate').value;

        const orders = JSON.parse(localStorage.getItem('customer_orders')) || [];
        orders.push({ taskName, taskDescription, location, dueDate, executor: null });
        localStorage.setItem('customer_orders', JSON.stringify(orders));

        console.log('Сохраненные заказы после добавления:', orders);

        successMessage.style.display = 'block';
        orderForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        loadOrders();
    });
});
