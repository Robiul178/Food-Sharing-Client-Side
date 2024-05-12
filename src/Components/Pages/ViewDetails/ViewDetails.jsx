import useAuth from "../../../Hook/useAuth";
import { useParams } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";
import swal from "sweetalert";
import { useState } from "react";

const ViewDetails = () => {
    const { food, user, loader } = useAuth();
    const { id } = useParams();

    const [requestFood, setrequestFood] = useState()

    const filterFood = food?.find(f => f._id === id)
    const { _id, food_name, donator, food_quantity, food_image, pickup_location, expired_datetime } = filterFood;

    // console.log("requestFood", requestFood)
    // console.log("filterFood", filterFood)


    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const Anote = form.get('note');
        const requestTime = form.get('request-time');

        const reqFoodInfo = {
            food_name: food_name,
            food_quantity: food_quantity,
            pickup_location: pickup_location,
            expired_datetime: expired_datetime,
            food_image: food_image,
            additional_notes: Anote,
            donator: {
                name: donator.name,
                email: donator.email,
                photo: donator.photo
            },
            status: "available",
            requestTime: requestTime,
            user_email: user.email
        }

        fetch('http://localhost:1000/request-food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqFoodInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    fetch(`http://localhost:1000/foods/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remaining = requestFood.filter(f => f._id !== id);
                                setrequestFood(remaining);
                                swal({
                                    title: "Food add successfully",
                                    text: "You can see this in your My request foods page!",
                                    icon: "success",
                                    button: "X"
                                })
                            }
                        })

                }
            })

    }


    return (
        <section>
            <div>
                <PageBanner />
            </div>
            <div className="bg-white py-10">
                <section className="max-w-6xl mx-auto md:flex justify-evenly">
                    <div >
                        <img src={food_image} className="w-full h-[400px]" />
                    </div>
                    <div className="text-gray-800">
                        <div className="border-b-2">
                            <h2 className="text-xl">Donor Name : {donator?.name}</h2>
                            <h2 className="text-xl mb-2">Pickup location : {pickup_location}</h2>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-2">{food_name}</h2>
                            <h2 className="text-xl mb-2">Quantity : {food_quantity}</h2>

                            <h2 className="text-xl mb-4">Expired date : {expired_datetime}</h2>
                            {/* <p className="text-lg font-semibold">{additional_notes}</p> */}
                        </div>


                        {/* using Modal */}

                        <button className="btn" onClick={() => document.getElementById('foods').showModal()}>open modal</button>
                        <dialog id="foods" className="modal">
                            <div className="modal-box bg-white">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>

                                <div>
                                    <div className="max-w-xl mx-auto">
                                        <form
                                            onSubmit={handleSubmit}
                                            className=" flex w-full flex-col ">
                                            <fieldset className="p-6 rounded-md shadow-sm ">
                                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="Foodname" className="text-sm">FoodName</label>
                                                        <input id="Foodname" type="text" name="Foodname" placeholder={food_name} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="FoodQuantity" className="text-sm">Food Id</label>
                                                        <input id="FoodQuantity" type="text" name="FoodQuantity" placeholder={_id} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>
                                                    <div className="col-span-full">
                                                        <label htmlFor="FoodImage" className="text-sm">Food Image</label>
                                                        <input id="FoodImage" type="url" name="foodImage" placeholder={food_image} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="location" className="text-sm"> Food Donator Name</label>
                                                        <input id="location" type="text" name="PickupLocation" placeholder={donator?.name} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="Edate" className="text-sm"> Food Donator Email</label>
                                                        <input id="Edate" type="email" name="expireDate" placeholder={donator?.email} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>


                                                    <div className="col-span-full">
                                                        <label htmlFor="note" className="text-sm">Additional Notes</label>
                                                        <input id="note" type="" name="note" placeholder="Additional Notes" className="w-full p-3 checkbox-success  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label htmlFor="status" className="text-sm">Request Date</label>
                                                        <input id="status" type="date" name="request-time" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="location" className="text-sm">Pickup Location</label>
                                                        <input id="location" type="text" name="PickupLocation" placeholder={pickup_location} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="Edate" className="text-sm"> Expired Date/Time</label>
                                                        <input id="Edate" type="text" name="expireDate" placeholder={expired_datetime} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="state" className="text-sm">Your Email</label>
                                                        <input id="state" type="email" placeholder={donator?.email} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                                    </div>

                                                    <button className='btn btn-outline w-full'>
                                                        <input type="submit" />
                                                    </button>


                                                    {/* <div className="btn btn-outline"
                                            
                                        >
                                            <input onClick={handleFoodRequest} type="submit" value="Request" className="bg-slate-300 text-black p-2 px-6" />
                                        </div> */}

                                                </div>
                                            </fieldset>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </dialog>

                    </div>
                </section>
            </div>
        </section>
    );
};

export default ViewDetails;