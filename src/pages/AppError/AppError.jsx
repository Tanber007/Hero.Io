import React from 'react';
import apperror from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <>
            <div className='max-w-10/12 mx-auto flex justify-center my-14 p-2'>
                <img className=' ' src={apperror} alt="" />
            </div>
            <div className='w-10/12 mx-auto text-center'>
                <h1 className='text-3xl sm:text-5xl font-bold mb-3 sm:mb-6 tracking-tight'>Oops, page not found!</h1>
                <p className='w-11/12 text-base sm:text-xl text-gray-500 mx-auto mt-3'>The page you are looking for is not available.</p>
                <Link to='allapp'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 mt-3 py-1 sm:px-4 py-2 rounded-l'>Go Back!</button></Link>
            </div>

        </>

    );
};

export default AppError;