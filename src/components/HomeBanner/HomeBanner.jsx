

const HomeBanner = () => {
    return (
        <div>
            <div className=" min-h-screen max-w-6xl mx-auto rounded-lg ">
                <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                    <img src={`/src/assets/images/user.png`} className="rounded-lg w-[620px]" />
                    <div className="w-[570px]">
                        <h1 className="text-7xl font-bold">One Step Closer To Your 
                        <br />
                        <span className=" text-blue-500">Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn text-white bg-purple-800">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;