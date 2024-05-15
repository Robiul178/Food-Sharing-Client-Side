

const Impact = () => {
    return (
        <div className="py-6">
            <div className=" lg:flex max-w-full md:flex ">
                <div className="">
                    <div className=" ">
                        <img
                            src="https://images.ctfassets.net/z0x29akdg5eb/76lAusMhxO83FLNieNFkGk/e02f91970b5cffa25c7e0d05587ed785/Impact_Map.svg"
                            alt=""
                            className="w-full" />
                    </div>
                    <div className="lg:w-[800px] ">
                        <div className="flex justify-between p-4">
                            <span>
                                <h2 className="text-xl font-bold">226,572,986 meals</h2>
                                <p>shared</p>
                            </span>
                            <span className="text-green-600">
                                <h2 className="text-xl font-bold">1,630,538 supporters</h2>
                                <p>fighting hunger</p>
                            </span>
                        </div>
                        <div className="flex justify-between p-4">
                            <span>
                                <h2 className="text-xl font-bold">+ 4,925</h2>
                                <p>shared</p>
                            </span>
                            <span className="text-green-600">
                                <h2 className="text-xl font-bold">+ 82,279</h2>
                                <p>In the last day</p>
                            </span>
                        </div>
                        <div className="flex justify-between p-4">
                            <span>
                                <h2 className="text-xl font-bold">125 goals</h2>
                                <p>complete</p>
                            </span>
                            <span className="text-green-600">
                                <h2 className="text-xl font-bold">+ 2</h2>
                                <p>in the last 90 days</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex bg-indigo-950 text-white  flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h2 className="text-2xl font-bold">Our impact to date</h2>
                    <p>ShareTheMeal donations not only provide life-saving food in emergencies but also facilitate school feeding, nutrition support, cash transfers and resilience programmes all over the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Impact;