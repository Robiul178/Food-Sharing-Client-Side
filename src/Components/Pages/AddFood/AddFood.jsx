import PageBanner from '../Shared/PageBanner/PageBanner';
import useAuth from '../../../Hook/useAuth'
// import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFood = () => {
    const { user } = useAuth()
    const { displayName, email, photoURL } = user;
    const navigate = useNavigate()


    const handleAddFood = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const Foodname = form.get('Foodname');
        const FoodQuantity = form.get('FoodQuantity');
        const PickupLocation = form.get('PickupLocation');
        const expireDate = form.get('expireDate');
        const foodImage = form.get('foodImage');
        const Anote = form.get('note');

        const addFoodInfo = {
            food_name: Foodname,
            food_quantity: FoodQuantity,
            pickup_location: PickupLocation,
            expired_datetime: expireDate,
            food_image: foodImage,
            additional_notes: Anote,
            donator: {
                name: displayName,
                email: email,
                photo: photoURL
            },
            status: "available"
        }

        // fetch('http://localhost:1000/foods', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addFoodInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             swal('Food Added Successfully')
        //         }
        //         navigate('/manageMyfood')
        //     })

        try {
            const { foods } = axios.post('http://localhost:1000/foods', addFoodInfo)
            console.log(foods)
            swal('add successfuly')
            navigate('/manageMyfood')
        } catch (e) {
            console.log(e)
        }


    }



    return (
        <div>
            <PageBanner></PageBanner>
            <div>
                <section className="p-6  dark:text-white">
                    <form
                        onSubmit={handleAddFood}
                        className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-black">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="text-2xl  font-bold border-b-2 border-gray-500">ADD FOOD HERE</p>
                                <div className=''>
                                    <div className="flex flex-col mt-14 justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-800">
                                        <img src={photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                        <div className="space-y-4 text-center divide-y ">
                                            <div className="my-2 space-y-1 text-white">
                                                <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
                                                <p className="px-5 text-xs sm:text-base dark:text-gray-600">{email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="Foodname" className="text-sm">FoodName</label>
                                    <input id="Foodname" type="text" name="Foodname" placeholder="Food name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>

                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="FoodQuantity" className="text-sm">Food Quantity</label>
                                    <input id="FoodQuantity" type="number" name="FoodQuantity" placeholder="Food Quantity" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="location" className="text-sm">Pickup Location</label>
                                    <input id="location" type="text" name="PickupLocation" placeholder="Pickup Location" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>

                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="Edate" className="text-sm"> Expired Date/Time</label>
                                    <input id="Edate" type="date" name="expireDate" placeholder=" Expired Date/Time" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="FoodImage" className="text-sm">Food Image</label>
                                    <input id="FoodImage" type="url" name="foodImage" placeholder="FoodImage url" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="note" className="text-sm">Additional Notes</label>
                                    <input id="note" type="" name="note" placeholder="Additional Notes" className="w-full p-3  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="status" className="text-sm">Status</label>
                                    <input id="status" type="text" name="status" placeholder="available" defaultValue="available" disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>

                                {/* user INformation */}
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="Dname" className="text-sm">User Name</label>
                                    <input id="Dname" type="text" name="userName" placeholder={displayName} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">Your Email</label>
                                    <input id="state" type="email" placeholder={email} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">User Profile Image</label>
                                    <input id="zip" type="text" placeholder={photoURL} disabled className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" />
                                </div>
                                <button className='btn btn-outline w-full'>
                                    <input type="submit" />
                                </button>
                            </div>
                        </fieldset>

                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddFood;