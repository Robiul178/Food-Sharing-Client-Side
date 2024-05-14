import useAuth from "../../../Hook/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";
import Modal from "../Modal/Modal";
import swal from 'sweetalert'

const ViewDetails = () => {
    const data = useLoaderData()
    const { user } = useAuth()
    const { _id, food_name, donator, food_quantity, food_image, pickup_location, expired_datetime } = data;
    const navigate = useNavigate()

    var currentDate = new Date();

    // handle submit
    const handleSubmit = (e) => {
        if (user?.email === donator.email) {
            return swal('Acces is immpossible its your data')
        }
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const Anote = form.get('note');

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
            requestTime: currentDate,
            user_email: user.email
        }
        console.log(reqFoodInfo)

        fetch('https://server-wine-ten.vercel.app/request-food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqFoodInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    fetch(`https://server-wine-ten.vercel.app/foods/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal({
                                    title: "Food add successfully",
                                    text: "You can see this in your My request foods page!",
                                    icon: "success",
                                    button: "X"
                                })
                                navigate('/myFoodRequest')
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
                        <div>
                            <button className="btn" onClick={() => document.getElementById('food').showModal()}>Request</button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="overflow-y-hidden">
                <Modal
                    data={data}
                    handleSubmit={handleSubmit}
                ></Modal>
            </div>
        </section>
    );
};

export default ViewDetails;