
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

    const { food_name, donator, food_quantity, food_image, pickup_location, expired_datetime, additional_notes } = filterFood;


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
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
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