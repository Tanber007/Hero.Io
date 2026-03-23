import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import SingleTrendApp from '../SingleTrendApp/SingleTrendApp';

const Allapp = () => {
    const data = useLoaderData();
    // console.log(data);

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <section>
                <div className='w-11/12 mx-auto my-6 text-center'>
                    <h2 className='text-3xl sm:text-5xl font-bold mb-3 sm:mb-8 tracking-tight'>Our All Applications</h2>
                    <p className='w-11/12 text-base sm:text-xl text-gray-500 mx-auto mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            </section>
            <section className='w-11/12 mx-auto my-8'>
                {/* total app & search section */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                    <h3 className='text-2xl font-bold'>({data.length})App Found</h3>
                    {/* search */}
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search Apps" />
                    </label>
                </div>
                {/* All App Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        data.map(singleApp=> <SingleTrendApp key={singleApp.id} SingleTrendApp={singleApp}></SingleTrendApp>)
                    }
                </div>
            </section>
        </>
    );
};

export default Allapp;