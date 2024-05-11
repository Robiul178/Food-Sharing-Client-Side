import { useState } from 'react';

const App = () => {
  const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(false);
  const [foods, setFoods] = useState([
    { id: 1, name: 'Food 1', expireDate: '2024-05-15' },
    { id: 2, name: 'Food 2', expireDate: '2024-05-12' },
    { id: 3, name: 'Food 3', expireDate: '2024-04-20' },
    { id: 4, name: 'Food 4', expireDate: '2024-05-9' },
    { id: 5, name: 'Food 5', expireDate: '2024-05-11' },
    // Add more food items as needed
  ]);

  const toggleLayout = () => {
    setIsTwoColumnLayout(!isTwoColumnLayout);
  };

  const sortByExpireDate = () => {
    const sortedFoods = [...foods].sort((a, b) => {
      return new Date(a.expireDate) - new Date(b.expireDate);
    });
    setFoods(sortedFoods);
  };

  return (
    <div className='p-44'>
      <h1>Available Foods</h1>
      {/* <button onClick={toggleLayout}>Change Layout</button> */}
      <button className='btn btn-outline' onClick={sortByExpireDate}>Sort by Expire Date</button>
      <div className={isTwoColumnLayout ? 'two-column' : 'three-column'} >
        {foods.map(food => (
          <div key={food.id} className="food-item border">
            <div>Name: {food.name}</div>
            <div>Expire Date: {food.expireDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
