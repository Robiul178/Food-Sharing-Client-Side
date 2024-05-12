
// import axios from "axios";
import PageBanner from "../Shared/PageBanner/PageBanner";
import useAuth from '../../../Hook/useAuth'
import { useEffect, useState } from "react";
import MyFoodCard from "./MyFoodCard/MyFoodCard";

const ManageMyFoods = () => {
    const { user } = useAuth();
    const [myFood, setMyFood] = useState([])


    useEffect(() => {
        fetch(`http://localhost:1000/emailFood?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFood(data)
            })
    }, [user?.email])


    return (
        <div>
            <PageBanner />
            <h2>ManageMyFoods :
                {myFood?.length}
            </h2>
            <div className="max-w-6xl mx-auto grid gap-4">
                {
                    myFood?.map(myfood => <MyFoodCard
                        key={myfood._id}
                        myfood={myfood}
                    ></MyFoodCard>)
                }
            </div>
        </div>
    );
};

export default ManageMyFoods;