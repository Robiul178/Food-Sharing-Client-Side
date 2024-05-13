
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <div>
            <Swiper

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


            </Swiper>
        </div>
    );
};

export default Banner;