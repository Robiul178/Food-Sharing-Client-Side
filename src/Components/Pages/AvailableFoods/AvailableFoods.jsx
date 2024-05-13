import PageBanner from '../Shared/PageBanner/PageBanner';
import useAuth from "../../../Hook/useAuth";
import { useEffect, useState } from 'react';
import Card from './Card/Card';

const AvailableFoods = () => {
    const { loading } = useAuth();
    const [availableFood, setAvailableFood] = useState();



    useEffect(() => {
        fetch('http://localhost:1000/foods?status=available')
            .then(res => res.json())
            .then(data => {
                setAvailableFood(data)
                console.log("from  status", data)
            })
    }, [])

    const sortByExpireDate = () => {
        const sortedFoods = [...availableFood].sort((a, b) => {
            return new Date(a.expired_datetime) - new Date(b.expired_datetime);
        });
        setAvailableFood(sortedFoods);
    };

    if (loading) return <span className="loading loading-bars loading-lg mt-24 ms-44"></span>

    return (
        <div className="max-w-6xl mx-auto ">
            <PageBanner>
            </PageBanner>

            <div className='py-4'>
                <button className='btn btn-outline' onClick={sortByExpireDate}>Sort by Expire Date</button>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {
                        availableFood?.map(food => <Card
                            key={food._id}
                            food={food}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;