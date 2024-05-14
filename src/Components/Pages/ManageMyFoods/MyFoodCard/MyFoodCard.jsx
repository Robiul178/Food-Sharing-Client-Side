import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../../Hook/useAuth";
import PropTypes from "prop-types";


const MyFoodCard = ({ myfood }) => {
    const { loading, setLoading } = useAuth();
    const { _id, food_image, food_name, expired_datetime, additional_notes, status, pickup_location, food_quantity } = myfood;

    const handleDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://server-wine-ten.vercel.app/foods/${id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal("Your  file is safe!");
                }
            });

        if (loading) return setLoading(true);

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


MyFoodCard.propTypes = {
    myfood: PropTypes.array
}

export default MyFoodCard;