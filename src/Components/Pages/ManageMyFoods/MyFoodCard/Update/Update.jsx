import { useLoaderData } from "react-router-dom";
import PageBanner from "../../../Shared/PageBanner/PageBanner";
import useAuth from "../../../../../Hook/useAuth";

const Update = () => {
    const data = useLoaderData();
    const { user } = useAuth();

    const { _id, food_name, donator, food_image, pickup_location, expired_datetime } = data;


    const handleUpdateButton = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const Foodname = form.get('Foodname');
        const FoodQuantity = form.get('FoodQuantity');
        const PickupLocation = form.get('PickupLocation');
        const expireDate = form.get('expireDate');
        const foodImage = form.get('foodImage');
        const Anote = form.get('note');
        const status = form.get('status');

        const updateFoodInfo = {
            food_name: Foodname,
            food_quantity: FoodQuantity,
            pickup_location: PickupLocation,
            expired_datetime: expireDate,
            food_image: foodImage,
            additional_notes: Anote,
            donator: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            },
            status: status
        }
        // console.log(updateFoodInfo, "update food info")

        fetch(`http://localhost:1000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFoodInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update hoyceee', data)

            })


    };//handledelete end


    return (
        <div>
            <PageBanner />
            <div>
                <form
                    onSubmit={handleUpdateButton}
                    className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-black">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Foodname" className="text-sm">FoodName</label>
                                <input id="Foodname" type="text" name="Foodname" placeholder={food_name} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="FoodQuantity" className="text-sm">Food Quantity</label>
                                <input id="FoodQuantity" type="number" name="FoodQuantity" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Pickup Location</label>
                                <input id="location" type="text" name="PickupLocation" placeholder={pickup_location} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Edate" className="text-sm"> Expired Date/Time</label>
                                <input id="Edate" type="date" name="expireDate" placeholder={expired_datetime} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="FoodImage" className="text-sm">Food Image</label>
                                <input id="FoodImage" type="url" name="foodImage" placeholder={food_image} className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="note" className="text-sm">Additional Notes</label>
                                <input id="note" type="" name="note" placeholder="Additional Notes" className="w-full p-3  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="status" className="text-sm">Status</label>
                                <input id="status" type="text" name="status" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm"> Food Donator Name</label>
                                <input id="location" type="text" name="PickupLocation" placeholder={donator?.name} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Edate" className="text-sm"> Food Donator Email</label>
                                <input id="Edate" type="email" name="expireDate" placeholder={donator?.email} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                            </div>

                            <button className='btn btn-outline w-full'>
                                <input type="submit" />
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Update;