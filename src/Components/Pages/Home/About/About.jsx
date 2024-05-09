
const About = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="bg-blue-400  col-span-2 ">
                            <img src="https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/3.jpg" className="h-[300px] w-full bg-cover" alt="" />
                        </div>
                        <div className="bg-blue-400 ">
                            <img src="https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/4.jpg" alt="" />
                        </div>
                        <div className="bg-blue-400 ">
                            <img src="https://shtheme.org/demosd/winta/wp-content/uploads/2021/07/about2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <span className="flex">
                            <div className="h-1 w-10 bg-red-800 mt-3 mr-2"></div>
                            <h2>STEAKHOUSE</h2>
                        </span>
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                            <span className="dark:text-red-900">senectus</span>erat pharetra <span className="text-red-800">Welcome to</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Quality the nunc bibe endum in finibus elit eget they solli citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend tortor orci eu ornare tortor semta. Duis scelerisque the nise duru the look. Liwense eu nunc bibe endum in finibus elit eget the solli citudin elit. Drae tnea rutierum in lacus.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;