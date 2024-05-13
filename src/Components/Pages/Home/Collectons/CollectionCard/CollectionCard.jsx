import PropTypes from 'prop-types';
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const CollectionCard = ({ product }) => {

    const { _id, food_name, donator, food_quantity, food_image, pickup_location } = product;

    return (
        <div>
            <div className="flex gap-6 p-6 rounded-md shadow-md border border-dashed border-red-500  ">
                <img src={food_image} className="object-cover object-center w-[200px] h-[100px]  rounded-md  dark:bg-gray-500" />
                <div>
                    <div className=" mb-2 text-black p-3 border-2">
                        <span className="block text-xs font-medium tracking-widest uppercase ">Foot Quantity : {food_quantity}</span>
                        <h2 className="text-xl  font-semibold tracking-wide ">{food_name}</h2>
                        <h2 className="block text-xs tracking-widest text-black uppercase"> <span className="font-bold">Pickup location :</span>
                            <span className="font-serif ">{pickup_location}</span>
                        </h2>
                    </div>
                    <div className='flex gap-4 font-semibold mt-4 border-2'>
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
                    <span className="relative left-[250px] top-2">
                        <Link
                            to={`/foods/${_id}`}
                        >
                            <button className="border p-4 hover:bg-black hover:text-white"><GrLinkNext /></button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

CollectionCard.propTypes = {
    product: PropTypes.array,
}

export default CollectionCard;