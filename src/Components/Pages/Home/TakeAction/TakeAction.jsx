import { Button } from "evergreen-ui";
import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";


const TakeAction = () => {
    return (

        <div className="text-center py-20">
            <div className="py-10">
                <h2 className="text-black  text-3xl font-bold">Take Action</h2>
                <p >Simply browse through our fundraising goals and donate to the causes that matter to you</p>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://images.ctfassets.net/z0x29akdg5eb/45v6Acpl7DoCynbHlXpc0W/651d9fa67a6fbc69b1cf44eb9d77c2bd/palestine11_Homecard.png" alt="Album"
                    className="w-[400px]"
                /></figure>
                <div className="card-body text-left w-[40%] ">
                    <h2 className="card-title font-bold font-serif">Give emergency aid in Palestine</h2>
                    <p className="font-semibold">Shared meals will provide emergency food assistance to families in Palestine.</p>
                    <p>
                        With conflict escalating in October 2023, Palestine is facing an urgent humanitarian crisis. 1.8 million people are now food insecure, many of whom have lost their homes and are seeking safety in shelters.

                        Despite challenging conditions, the World Food Programme (WFP) is on the ground providing life-saving aid to people in Palestine and those in shelters. Regular cash and food programmes are also continuing every day where possible.

                        Until the end of the year, WFP plans to reach 1.1 million people in Gaza and the West Bank. Food support includes bread, canned chickpeas and beans.
                    </p>

                    <div className="card-actions justify-end">
                        <Link to="/payment">
                            <Button
                                width={800}
                                marginY={8} marginRight={12} >
                                <MdOutlinePayments className="text-xl mr-2" /> DONATE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeAction;