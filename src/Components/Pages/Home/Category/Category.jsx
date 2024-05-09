import Marquee from "react-fast-marquee";
import shoes from "../../../../../public/assets/shoe1.png"
const Category = () => {
    return (
        <div className="py-14 border-b">
            <Marquee>
                <div className="flex justify-evenly gap-24 ">
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">SPORT</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">FLAT</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">HEEELS</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">BOOTS</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">FORMAL</h1>
                    </div>
                    <div>
                        <div className="w-24 py-8 border rounded">
                            <img src={shoes} className="w-16 ms-3" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mt-1 text-center">CASUAL</h1>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Category;