import axios from "axios";
import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard/CollectionCard";
import Category from "../Category/Category";


const Collectons = () => {
    const [products, setProducts] = useState();

    const sortProducts = products?.slice(0, 6)

    // axios.get('/foods.json')
    //     .then(response => {
    //         setProducts(response.data)
    //     })

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

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
                            key={product.id}
                            product={product}
                        ></CollectionCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Collectons;