import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('/api/pizzas')
            .then(response => setPizzas(response.data))
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    return (
        <div>
            <h1>Pizza Menu</h1>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.id}>{pizza.name} - ${pizza.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
