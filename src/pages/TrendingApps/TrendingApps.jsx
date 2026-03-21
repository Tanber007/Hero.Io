import { Link } from "react-router";
import SingleTrendApp from "../SingleTrendApp/SingleTrendApp";

const TrendingApps = ({ data }) => {

    return (
        <>
            <section className='mt-15 w-11/12 mx-auto'>
                <div className='text-center items-center my-6'>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-8 tracking-tight">Trending Apps</h2>
                    <p className='w-11/12 text-base sm:text-xl text-gray-500 mx-auto mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                    data.slice(0, 8).map(singleApp => <SingleTrendApp key={singleApp.id} SingleTrendApp={singleApp}></SingleTrendApp>)
                }
                </div>
                <div className="w-11/12 mx-auto items-center text-center my-5">
                    <Link to='allapp'><button className='textarea-sm sm:text-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-1 sm:px-6 sm:py-3 rounded-xl'>Show All</button></Link>
                </div>
            </section>
        </>
    );
};

export default TrendingApps;