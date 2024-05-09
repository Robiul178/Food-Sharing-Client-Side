import Marquee from "react-fast-marquee";
import cow from "../../../../../public/assets/cow-silhouette.png"
import breakfast from "../../../../../public/assets/breakfast.png"
import cake from "../../../../../public/assets/cake.png"
import cheers from "../../../../../public/assets/cheers.png"
import poinsettia from "../../../../../public/assets/poinsettia.png"
import salad from "../../../../../public/assets/salad.png"

const Category = () => {
    return (
        <div className="pt-8 pb-4">
            <Marquee>
                <div className="flex justify-around gap-24 ">
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={cow} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800">MEET</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={breakfast} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800 uppercase">breakfast</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={cake} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800 uppercase">CAKE</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={cheers} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800 uppercase">DRINKS</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={poinsettia} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800 uppercase">poinsettia</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 ">
                            <img src={salad} className="w-20 ms-3 bg-red-500 p-2" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center text-red-800 uppercase">salad</h1>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Category;