import axios from 'axios';

const createOrder = (order) => {
    return axios.post('/orders', order);
};

const getOrdersByUserId = (userId) => {
    return axios.get(`/orders/user/${userId}`);
};

export { createOrder, getOrdersByUserId };
