import PageBanner from '../Shared/PageBanner/PageBanner';
// import useAuth from "../../../Hook/useAuth";
import CollectionCard from '../Home/Collectons/CollectionCard/CollectionCard';
import { useEffect, useState } from 'react';

const AvailableFoods = () => {
    // const { food } = useAuth();
    const [availableFood, setAvailableFood] = useState();


    const url = 'http://localhost:1000/foods?status=available';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAvailableFood(data)
            })
    }, [])


    return (
        <div className="max-w-6xl mx-auto ">
            <PageBanner>
            </PageBanner>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {
                        availableFood?.map(product => <CollectionCard
                            key={product._id}
                            product={product}
                        ></CollectionCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;