
import { Link } from "react-router-dom";


const Card = ({ food }) => {

    const { _id, food_name, food_quantity, food_image, pickup_location, donator, expired_datetime, additional_notes, status } = food;

    return (
        <div>
            <div>
                <div className="flex flex-col p-4 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex space-x-4">
                        <img alt="" src={donator?.photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{donator?.name}</a>
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{donator?.email}</a>
                        </div>
                    </div>
                    <div>
                        <img src={food_image} alt="" className="object-cover object-center  rounded-md w-full h-32 dark:bg-gray-500" />

                        <div className="mt-6 mb-2 ">
                            <span className="block text-xs font-medium tracking-widest uppercase ">Foot Quantity : {food_quantity}</span>
                            <h2 className="text-xl  font-semibold tracking-wide ">{food_name}</h2>
                            <h2 className="text-lg  font-semibold tracking-wide ">Food Status:{status}</h2>
                        </div>
                        <span>
                            <h2 className="block text-xs tracking-widest  uppercase"> <span className="font-bold">Pickup location :</span>
                                <span className="font-serif">{pickup_location}</span>
                            </h2>
                        </span>
                        <h2>Expire Date : {expired_datetime}</h2>
                        <p className="mb-3">{additional_notes}</p>

                        <div>
                            <div>
                                <Link
                                    to={`/foods/${_id}`}
                                >
                                    <button className="btn btn-outline w-full hover:bg-white hover:text-black">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;