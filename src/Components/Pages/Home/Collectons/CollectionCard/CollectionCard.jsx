
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const CollectionCard = ({ product }) => {

    const { _id, food_name, food_quantity, food_image, pickup_location } = product;

    return (
        <div>
            <div className="flex gap-6 p-6 rounded-md shadow-md border border-dashed border-red-500  ">
                <img src={food_image} alt="" className="object-cover object-center  rounded-md w-44 h-42 dark:bg-gray-500" />
                <div>
                    <div className="mt-6 mb-2 text-blue-50">
                        <span className="block text-xs font-medium tracking-widest uppercase ">Foot Quantity : {food_quantity}</span>
                        <h2 className="text-xl  font-semibold tracking-wide ">{food_name}</h2>
                    </div>
                    <span>
                        <h2 className="block text-xs tracking-widest text-blue-50 uppercase"> <span className="font-bold">Pickup location :</span>
                            <span className="font-serif">{pickup_location}</span>
                        </h2>
                    </span>
                    <span className="relative left-[280px]">
                        <Link
                            to={`/viewDetails/${_id}`}
                        >
                            <button className="border p-4 hover:bg-white hover:text-black"><GrLinkNext /></button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;