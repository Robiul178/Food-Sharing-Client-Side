import { Link } from "react-router-dom";


const MyFoodCard = ({ myfood }) => {
    const { _id, food_image, food_name, expired_datetime, additional_notes, status, pickup_location, food_quantity } = myfood;

    const handleDelete = () => {
        fetch(`http://localhost:1000/foods/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>
            <div>
                <div className="card  p-8 lg:card-side bg-white shadow-xl">
                    <figure><img src={food_image} alt="Album" className="h-48" /></figure>
                    <div className="card-body max-h-56">
                        <div>
                            <h2 className="text-2xl font-semibold">{food_name}</h2>
                            <span className="text-sm dark:text-gray-600">Total : {food_quantity}</span> <br />
                            <span className="text-sm dark:text-gray-600">Expire Date :{expired_datetime}</span><br />
                            <span className="text-sm dark:text-gray-600">Status :{status}</span><br />
                            <span className="text-sm dark:text-gray-600">Pickup location :{pickup_location}</span><br />
                            <span className="text-sm dark:text-gray-600">{additional_notes}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link to={`/update/${_id}`}>Update</Link>
                            </button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-outline">Delete</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyFoodCard;