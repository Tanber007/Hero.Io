import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp, removeFromStoreDb } from '../../utility/addToDB';
import Dwonlode from '../Dwonlode/Dwonlode';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Installation = () => {

    const [readApp, setReadApp] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoreApp();
        const stringstoredAppData = storedAppData.map(id => parseInt(id))
        const myRedList = data.filter(app => stringstoredAppData.includes(app.id));
        setReadApp(myRedList)
    }, [])

    // Short
    const [sort, setSort] = useState("");

    const handleShort = (type) =>{
        setSort(type);
        if(type === "low"){
            const sortedByDownlode = [...readApp].sort((a,b) => a.downloads - b.downloads);
            setReadApp(sortedByDownlode);
        }
        if(type === "high"){
            const sortedByDownlode = [...readApp].sort((a,b) => b.downloads - a.downloads);
            setReadApp(sortedByDownlode);
        }
    }

    // remove data from DB
    const handleUninstall = (id) =>{
        removeFromStoreDb(id);
        const remainingApp = readApp.filter(app => app.id !== id);
        setReadApp(remainingApp);
    }

    return (
        <>
            <section>
                <div className='w-10/12 mx-auto my-6 text-center'>
                    <h1 className='text-3xl sm:text-5xl font-bold mb-3 sm:mb-8 tracking-tight'>You Installed Apps</h1>
                    <p className='w-11/12 text-base sm:text-xl text-gray-500 mx-auto mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            </section>

            <section className='w-10/12 mx-auto'>
                <div className='flex justify-between'>
                    <h3 className=' w-11/12 mx-auto my-6 text-l sm:text-xl font-semibold mb-3 sm:mb-8'>{readApp.length}Apps Found</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn p-2 w-full m-1">Short By size:{sort?sort:""} <IoIosArrowDropdownCircle /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() =>handleShort("low")}>low to high</a></li>
                            <li><a onClick={() =>handleShort("high")}>high to low</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        readApp.map(downlode => <Dwonlode key={downlode.id} handleUninstall={handleUninstall} downlode={downlode}></Dwonlode>)
                    }
                </div>
            </section>
        </>
    );
};

export default Installation;