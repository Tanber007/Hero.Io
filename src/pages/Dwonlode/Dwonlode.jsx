import React from 'react';
import downloadicon from '../../assets/icon-downloads.png';
import staricon from '../../assets/icon-ratings.png'

const Dwonlode = ({ downlode, handleUninstall }) => {
    const { title, image, id, ratingAvg, downloads, size } = downlode;

    return (
        <div className="mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                <img src={image} alt={title} className="w-20 h-20 bg-gray-300 rounded-xl mx-auto sm:mx-0 object-cover" />

                <div className="text-center sm:text-left space-y-1">
                    <h2 className="text-xl font-semibold text-slate-800">
                        {title}
                    </h2>
                    <div className="flex items-center justify-center sm:justify-start gap-4 text-sm font-medium text-gray-500">
                        <span className="text-emerald-500 flex items-center gap-1">
                            <img className='w-[16px]' src={downloadicon} alt="" /> {downloads >= 1000000 ? `${(downloads / 1000000).toFixed(0)}M` : downloads >= 1000 ? `${(downloads / 1000).toFixed(0)}K` : downloads}
                        </span>
                        <span className="text-orange-400 flex items-center gap-1">
                            <img className='w-[16px]' src={staricon} alt="" /> {ratingAvg}
                        </span>
                        <span className="text-gray-400">
                            {size} MB
                        </span>
                    </div>
                </div>

                <div className="flex justify-center sm:justify-end">
                    <button onClick={() => handleUninstall(id)} className="w-full sm:w-auto px-8 py-2.5 bg-[#00dc94] hover:bg-[#00c584] text-white font-bold rounded-lg transition-colors">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dwonlode;