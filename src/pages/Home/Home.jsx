import React from 'react';
import appstoreLogo from '../../assets/app-store.png';
import googleplayLogo from '../../assets/google-play.png';
import heroPng from '../../assets/hero.png';

const Home = () => {
    return (
        <>
            <section >
                <div className='w-11/12 mx-auto items-center text-center my-6'>
                    <h1 className='text-7xl font-bold'>We Build</h1>
                    <h1 className='text-7xl font-bold mt-3'><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                    <p className='w-11/12 text-xl text-gray-500 mx-auto mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>

                <div className='w-11/12 mx-auto flex justify-center'>
                    <button className='border-1 px-4 py-2 rounded mr-3 flex'><img className='w-[22px] h-[22px]' src={googleplayLogo} alt="" />Google Play</button>
                    <button className='border-1 px-4 py-2 rounded flex'><img className='w-[22px] h-[22px]' src={appstoreLogo} alt="" />App Store</button>
                </div>

                <div className='w-11/12 flex justify-center mx-auto mt-8'>
                    <img className='' src={heroPng} alt="" />
                </div>
            </section>

            <section>
                <div className="flex items-center justify-center bg-gradient-to-br from-[#8a5cf5] to-[#a259ff] p-8">
                    <div className="max-w-6xl text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                            Trusted By Millions, Built For You
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                            <div className="flex flex-col items-center">
                                <p className="text-sm uppercase tracking-widest opacity-80 mb-4">
                                    Total Downloads
                                </p>
                                <h2 className="text-6xl font-black mb-4">
                                    29.6M
                                </h2>
                                <p className="text-sm opacity-80">
                                    21% More Than Last Month
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="text-sm uppercase tracking-widest opacity-80 mb-4">
                                    Total Reviews
                                </p>
                                <h2 className="text-6xl font-black mb-4">
                                    906K
                                </h2>
                                <p className="text-sm opacity-80">
                                    46% More Than Last Month
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="text-sm uppercase tracking-widest opacity-80 mb-4">
                                    Active Apps
                                </p>
                                <h2 className="text-6xl font-black mb-4">
                                    132+
                                </h2>
                                <p className="text-sm opacity-80">
                                    31 More Will Launch
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;