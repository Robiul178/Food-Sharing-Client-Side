

import React, { useState } from 'react';

const Sample = () => {




    const initialFoodList = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        // Add more food items here
    ];

    const [foodList, setFoodList] = useState(initialFoodList);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFoodList = foodList.filter(food => {
        return food.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search food name..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <ul>
                {filteredFoodList.map(food => (
                    <li key={food.id}>{food.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Sample;