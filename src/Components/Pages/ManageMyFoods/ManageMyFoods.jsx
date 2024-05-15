
import PageBanner from "../Shared/PageBanner/PageBanner";
import useAuth from '../../../Hook/useAuth'
import { useEffect, useState } from "react";
import MyFoodCard from "./MyFoodCard/MyFoodCard";
import { Helmet } from "react-helmet-async";

const ManageMyFoods = () => {
    const { user, loading } = useAuth();
    const [myFood, setMyFood] = useState([])


    useEffect(() => {
        fetch(`https://server-wine-ten.vercel.app/food/${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setMyFood(data)
                console.log(data)
            })

        // const getFood = async () => {
        //     const { food } = await axios(`https://server-wine-ten.vercel.app/foods/${user?.email}`)
        //     setMyFood(food)
        // }
        // getFood()
    }, [user?.email])


    if (loading) return <span className="loading loading-bars loading-lg mt-24 ms-44"></span>


    return (
        <div>
            <PageBanner />
            <Helmet>
                <title> Meal For Heal | Manage Food List </title>
            </Helmet>
            <h2>Total Food {myFood.length}</h2>
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