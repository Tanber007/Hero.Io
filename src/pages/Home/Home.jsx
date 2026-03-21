import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <>
            <HeroSection></HeroSection>
            <TrendingApps data={data}></TrendingApps>
        </>
    );
};

export default Home;