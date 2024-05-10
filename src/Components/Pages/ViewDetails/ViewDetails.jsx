
import useAuth from "../../../Hook/useAuth";

import { useParams } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";

const ViewDetails = () => {
    const { food } = useAuth();
    const { id } = useParams();
    // const intId = parseInt(id);
    // console.log('int id ', id, typeof (id))
    const filterFood = food.find(f => f._id === id)
    // const filterFood = food?.find(f => f._id === intId);
    console.log(filterFood)

    const { _id, food_name, donator, food_quantity, food_image, pickup_location, expired_datetime } = filterFood;


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
                        <div>
                            <button className="btn w-full btn-primary btn-outline" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                        </div>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="max-w-xl mx-auto">
                                <form
                                    // onSubmit={handleAddFood}
                                    className=" flex w-full flex-col bg-black">
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
                                                <input id="status" type="datetime-local" name="status" placeholder="" defaultValue="available" disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
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



                                            <button >
                                                <input type="submit" value="Request" className="bg-slate-300 text-black p-2 px-6" />
                                            </button>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn text-white">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>

                            </div>
                        </dialog>

                    </div>
                </section>
            </div>
        </section>
    );
};

export default ViewDetails;