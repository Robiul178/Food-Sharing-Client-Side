import PropTypes from 'prop-types'

const Cardd = ({ food }) => {

    const { status, donator, pickup_location, expired_datetime, requestTime, food_image } = food;

    return (
        <div>
            <div className="max-w-full p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={food_image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Donator Name : {donator?.name}</h2>
                    </div>

                    <span className="dark:text-gray-600">PickUp Location : {pickup_location}</span>
                    <span className="dark:text-gray-600"> Expire Time : {expired_datetime}</span>
                    <span className="dark:text-gray-600"> Request Date : {requestTime}</span>
                    <span className="dark:text-gray-600"> Status : {status}</span>

                </div>
            </div>
        </div>
    );
};

Cardd.propTypes = {
    food: PropTypes.array
}

export default Cardd;