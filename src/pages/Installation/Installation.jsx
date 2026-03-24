import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp } from '../../utility/addToDB';
import Dwonlode from '../Dwonlode/Dwonlode';

const Installation = () => {

    const [readApp, setReadApp] = useState([]);
    const data = useLoaderData();
    
    useEffect(()=>{
        const storedAppData = getStoreApp();
        const stringstoredAppData = storedAppData.map(id => parseInt(id))
        const myRedList = data.filter(app=> stringstoredAppData.includes(app.id));
        setReadApp(myRedList)
    } ,[])

    return (
        <>
        <section>
            <div className='w-11/12 mx-auto my-6 text-center'>
                <h1 className='text-3xl sm:text-5xl font-bold mb-3 sm:mb-8 tracking-tight'>You Installed Apps</h1>
                <p className='w-11/12 text-base sm:text-xl text-gray-500 mx-auto mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        </section>

        <section className='w-11/12 mx-auto my-6'>
            <div>
                <h3 className='text-l sm:text-xl font-semibold mb-3 sm:mb-8 tracking-tight'>{readApp.length}Apps Found</h3>

                {
                    readApp.map(downlode=><Dwonlode key={downlode.id} downlode={downlode}></Dwonlode>)
                }

            </div>
        </section>
        </>
    );
};

export default Installation;