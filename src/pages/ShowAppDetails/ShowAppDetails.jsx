import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import downloadsicon from '../../assets/icon-downloads.png';
import staricon from '../../assets/icon-ratings.png';
import reviewicon from '../../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
import { addToStoreDb, getStoreApp } from '../../utility/addToDB';


const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
};

const ShowAppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const [isInstalled, setIsInstalled] = useState(false);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);

    useEffect(() => {
        const storedApps = getStoreApp();
        if (storedApps.includes(id) || storedApps.includes(parseInt(id))) {
            setIsInstalled(true);
        }
    }, []);


    const { title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;
    const chartData = ratings ? [...ratings].reverse() : [];

    // set local store fro downlode
    const handleDownlode = id =>{
        addToStoreDb(id)
    }

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-56 h-56 bg-white flex items-center justify-center p-6 flex-shrink-0">
                        <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
                    </div>
                    
                    <div className="flex flex-col justify-start pt-2 w-full">
                        <h1 className="text-3xl font-bold text-[#1f2937]">{title}</h1>
                        <p className="text-[#6b7280] text-base mt-2">
                            Developed by <span className="text-[#7c3aed] font-medium">{companyName}</span>
                        </p>
                        
                        <hr className="my-6 border-[#e5e7eb]" />
                        
                        <div className="flex gap-12 sm:gap-20 mb-6">
                            <div className="flex flex-col">
                                <img className="text-[#10b981] w-8 h-8 mb-2" src={downloadsicon} alt="" />
                                <span className="text-[#6b7280] text-xs font-medium mb-1">Downloads</span>
                                <span className="text-3xl font-bold text-[#111827]">{formatNumber(downloads)}</span>
                            </div>
                            
                            <div className="flex flex-col">
                                <img className="text-[#f97316] w-8 h-8 mb-2" src={staricon} alt="" />
                                <span className="text-[#6b7280] text-xs font-medium mb-1">Average Ratings</span>
                                <span className="text-3xl font-bold text-[#111827]">{ratingAvg}</span>
                            </div>
                            
                            <div className="flex flex-col">
                                <img className="text-[#8b5cf6] w-8 h-8 mb-2" src={reviewicon} alt="" />
                                <span className="text-[#6b7280] text-xs font-medium mb-1">Total Reviews</span>
                                <span className="text-3xl font-bold text-[#111827]">{formatNumber(reviews)}</span>
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => {
                                handleDownlode(id);
                                setIsInstalled(true);
                                toast.success('Installation successfull!');
                            }}
                            disabled={isInstalled}
                            className={`px-6 py-2 rounded font-medium w-max transition-colors ${
                                isInstalled ? 'bg-gray-400 text-white cursor-not-allowed opacity-80' : 'bg-[#00d68f] hover:bg-[#00c282] text-white'
                            }`}>
                            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>

                <hr className="my-10 border-[#e5e7eb]" />

                <div>
                    <h2 className="text-xl font-bold text-[#1f2937] mb-8">Ratings</h2>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={chartData}
                                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                            >
                                <XAxis type="number" hide />
                                <YAxis 
                                    type="category" 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#6b7280', fontSize: 13 }}
                                    width={60}
                                />
                                <Tooltip 
                                    cursor={{fill: 'transparent'}}
                                    contentStyle={{ borderRadius: '4px', border: '1px solid #e5e7eb', boxShadow: 'none' }}
                                    formatter={(value) => [formatNumber(value), 'Ratings']}
                                />
                                <Bar 
                                    dataKey="count" 
                                    fill="#f97316" 
                                    radius={[0, 0, 0, 0]} 
                                    barSize={20}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between text-[#6b7280] text-xs mt-2 pl-[60px] pr-[30px]">
                        <span>0</span>
                        <span>3000</span>
                        <span>6000</span>
                        <span>9000</span>
                        <span>12000</span>
                    </div>
                </div>

                <hr className="my-10 border-[#e5e7eb]" />

                <div className="mb-20">
                    <h2 className="text-xl font-bold text-[#1f2937] mb-6">Description</h2>
                    <div className="text-[#6b7280] text-[15px] leading-relaxed space-y-4">
                        {description}
                    </div>
                </div>
                
            </div>

             <ToastContainer />
        </div>
    );
};

export default ShowAppDetails;