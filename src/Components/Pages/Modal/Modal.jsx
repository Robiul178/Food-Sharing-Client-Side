// import React from 'react';

const Modal = ({ data, handleSubmit }) => {

    let currentDate = new Date();

    const { _id, food_name, donator, food_image, pickup_location, expired_datetime } = data;

    return (
        <div >
            <dialog id="food" className="modal w-full modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <div>
                            <div className="max-w-2xl mx-auto">
                                <form method="dialog">
                                    <button>X</button>
                                </form>
                                <form
                                    onSubmit={handleSubmit}
                                    className=" flex w-full flex-col ">
                                    <fieldset className=" rounded-md shadow-sm ">
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
                                                <input id="note" type="" name="note" placeholder="Additional Notes" className="w-full p-3 checkbox-success  rounded-md focus:ring focus:ring-opacity-75 " />
                                            </div>

                                            <div className="col-span-full">
                                                <label htmlFor="status" className="text-sm">Request Date</label>
                                                <input id="status" type="text" name="request-time" placeholder={currentDate} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
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

                                        </div>
                                    </fieldset>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;