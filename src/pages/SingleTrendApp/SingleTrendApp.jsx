import React from 'react';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'

const SingleTrendApp = ({ SingleTrendApp }) => {
  // console.log(SingleTrendApp);

  const { title, image, ratingAvg, downloads } = SingleTrendApp;


  return (
    <div>
      <div className="max-w-[320px] bg-white rounded-xl my-5 p-4 shadow-sm border border-gray-100">
        <div className="w-full aspect-square bg-[#D9D9D9] rounded-xl mb-4">
          <img
            src={image}

            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4 leading-tight">
          {title}
        </h3>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 bg-[#F0F9F0] text-[#00B67A] px-2 py-1 rounded-md text-sm font-medium">
            <img src={download} className='w-[16px]' alt="" />
            <span>{downloads >= 1000000 ? `${(downloads / 1000000).toFixed(0)}M` : downloads}</span>
          </div>

          <div className="flex items-center gap-1 bg-[#FFF5EB] text-[#FF8A00] px-2 py-1 rounded-md text-sm font-medium">
            <img src={star} className='w-[16px]' alt="" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrendApp;