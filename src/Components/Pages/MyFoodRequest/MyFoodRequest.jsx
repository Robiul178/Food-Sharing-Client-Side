
import { useState } from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner'
import axios from 'axios';
import Cardd from './Cardd/Cardd';


const MyFoodRequest = () => {
    const [requeatFoods, setRequestFoods] = useState([]);
    console.log(requeatFoods)

    axios.get('http://localhost:1000/request-food')
        .then(res => {
            setRequestFoods(res.data)
        })

    return (
        <div >
            <PageBanner></PageBanner>
            <div className='max-w-6xl mx-auto grid grid-cols-2 gap-4'>
                {
                    requeatFoods?.map(food => <Cardd
                        key={food._id}
                        food={food}
                    ></Cardd>)
                }
            </div>
        </div>
    );
};

export default MyFoodRequest;