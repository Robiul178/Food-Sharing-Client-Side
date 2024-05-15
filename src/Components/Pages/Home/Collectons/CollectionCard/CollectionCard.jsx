import PropTypes from 'prop-types';
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const CollectionCard = ({ product }) => {

    const { _id, food_name, donator, food_quantity, food_image, pickup_location } = product;

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={food_image} alt="not found" className=' md:max-w-[200px] md:max-h-[200px] sm:w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{food_name}</h2>
                        <p>Foot Quantity : {food_quantity}</p>
                        <p>Pickup location : {pickup_location}</p>
                        <div className="flex">
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={donator.photo} alt="not found" />
                                </div>
                            </div>
                            <div>
                                <h2> Name :{donator.name}</h2>
                                <h2> Email :{donator.email}</h2>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link
                                    to={`/foods/${_id}`}
                                >
                                    <GrLinkNext />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CollectionCard.propTypes = {
    product: PropTypes.array,
}

export default CollectionCard;