
import Carousel from '@itseasy21/react-elastic-carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {

    return (
        <div>
            {/* <Swiper

                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                    style={{
                        backgroundImage: `url('https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/4.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px'
                    }}
                >
                    <div className="  relative top-72 left-44">
                        <h2 className='text-4xl font-bold italic'>Explore Our Menu</h2> <br />
                        <button className='btn btn-outline'>MENU</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    style={{
                        backgroundImage: `url('https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/4.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px'
                    }} className='rounded-lg'
                >
                    <div className="  relative top-72 left-44">
                        <h2 className='text-4xl font-bold italic'>Explore Our Menu</h2> <br />
                        <button className='btn btn-outline'>MENU</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url('https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/1.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px'
                    }}
                >
                    <div className=" relative top-72 left-44">
                        <h2 className='text-4xl font-bold italic'>Explore Our Menu</h2> <br />
                        <button className='btn btn-outline'>MENU</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url('https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/2.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px'
                    }}
                >
                    <div className="  relative top-72 left-44">
                        <h2 className='text-4xl font-bold italic'>Explore Our Menu</h2> <br />
                        <button className='btn btn-outline'>MENU</button>
                    </div>
                </SwiperSlide>

            </Swiper> */}

            <div>
                <Carousel itemsToShow={1} className='pt-24'>
                    <div>
                        <section className=" dark:text-gray-800">
                            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Be the
                                        Reasone Someone smile
                                    </h1>
                                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                    <img src="https://clipground.com/images/can-of-food-clipart-9.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className=" dark:text-gray-800">
                            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Hungry
                                        No More
                                    </h1>
                                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                    <img src="https://clipground.com/images/food-donation-clipart-8.jpg " alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className=" dark:text-gray-800">
                            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Food
                                        Donation
                                    </h1>
                                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                    <img src="https://img.freepik.com/free-vector/clothing-donation-illustration_23-2148849867.jpg" />
                                </div>
                            </div>
                        </section>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;