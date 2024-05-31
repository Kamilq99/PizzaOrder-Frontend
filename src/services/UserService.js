import axios from 'axios';

const createUser = (user) => {
    return axios.post('/users', user);
};

export { createUser };
