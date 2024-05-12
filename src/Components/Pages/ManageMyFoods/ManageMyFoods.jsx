
// import axios from "axios";
import PageBanner from "../Shared/PageBanner/PageBanner";
import useAuth from '../../../Hook/useAuth'
import { useEffect, useState } from "react";
import MyFoodCard from "./MyFoodCard/MyFoodCard";
// import axios from "axios";

const ManageMyFoods = () => {
    const { user } = useAuth();
    const [myFood, setMyFood] = useState([])


    useEffect(() => {
        fetch(`http://localhost:1000/foods/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFood(data)
            })

        // const getFood = async () => {
        //     const { food } = await axios(`http://localhost:1000/foods/${user?.email}`)
        //     setMyFood(food)
        // }
        // getFood()
    }, [user])

    console.log(myFood)


    return (
        <div>
            <PageBanner />
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