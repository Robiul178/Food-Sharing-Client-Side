
import CollectionCard from "./CollectionCard/CollectionCard";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth"


const Collectons = () => {

    const { food } = useAuth()
    const sortProducts = food?.slice(0, 6)

    return (
        <div className="max-w-6xl mx-auto ">
            <div>
                <Category />
            </div>
            <div className="py-12">
                <div className="text-center py-6">
                    <h2 className="text-red-800  text-xl">Special Offer</h2>
                    <h2 className="text-4xl font-bold pb-4 font-serif">Food List</h2>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {
                        sortProducts?.map(product => <CollectionCard
                            key={product._id}
                            product={product}
                        ></CollectionCard>)
                    }
                </div>
                <div className="py-10">
                    <Link to="/avaliableFood"><button className="btn btn-outline">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Collectons;