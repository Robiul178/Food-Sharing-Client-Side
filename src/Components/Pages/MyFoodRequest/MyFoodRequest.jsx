
import { useState } from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner'
import axios from 'axios';
import Cardd from './Cardd/Cardd';
import useAuth from '../../../Hook/useAuth'


const MyFoodRequest = () => {
    const { user } = useAuth()
    const [requeatFoods, setRequestFoods] = useState([]);

    axios.get(`http://localhost:1000/request-food/${user?.email}`)
        .then(res => {
            setRequestFoods(res.data)
        })

    return (
        <div >
            <PageBanner></PageBanner>
            <h2>My requested food:{requeatFoods.length}</h2>
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