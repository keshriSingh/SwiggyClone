import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-[#FF5200] font-sans'>
      {/* Top Navigation */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-34 py-4 md:py-6'>
        {/* Logo */}
        <div className='flex justify-center md:justify-start mb-4 md:mb-0'>
          <img 
            className='hover:cursor-pointer h-10 md:h-12 w-auto' 
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
            alt="swiggy logo"
          />
        </div>
        
        {/* Navigation Links */}
        <div className='flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 lg:gap-6 text-sm md:text-base text-white font-bold'>
          <a className='hover:cursor-pointer whitespace-nowrap' href="#">Swiggy Corporate</a>
          <a className='hover:cursor-pointer whitespace-nowrap' href="#">Partner with us</a>
          <a className='flex items-center gap-1 border-1 py-1 px-3 md:py-2 md:px-5 rounded-xl hover:cursor-pointer whitespace-nowrap' href="#">
            Get the App <i className="ri-arrow-right-up-line font-light text-xl md:text-2xl mt-0.5"></i>
          </a>
          <a className='hover:cursor-pointer bg-black px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl whitespace-nowrap' href="#">
            Sign in
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className='pt-8 md:pt-12 pb-6 md:pb-8 relative z-10'>
        <div className='container mx-auto  px-4'>
          {/* Hero Images - Hidden on mobile, shown on larger screens */}
          <img 
            className='hidden md:block absolute left-0 -top-3 h-[300px] md:h-[450px] w-[150px] md:w-[250px] object-cover' 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" 
            alt="vegetables" 
          />
          <img 
            className='hidden md:block absolute right-0 -top-3 h-[300px] md:h-[450px] w-[150px] md:w-[250px] object-cover' 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" 
            alt="sushi" 
          />
          
          {/* Hero Title */}
          <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold mx-auto max-w-full md:max-w-[80%] lg:max-w-[55%] text-center'>
            Order food & groceries. Discover best restaurants. Swiggy it!
          </h1>
          
          {/* Search Section */}
          <div className='flex justify-center flex-col md:flex-row gap-3 md:gap-5 container mx-auto pt-6 md:pt-8 px-4 md:px-14'>
            {/* Location Input */}
            <div className='w-full  md:w-[45%] lg:w-[30%] flex'>
              <i className="ri-map-pin-fill h-12 md:h-14 bg-white flex items-center text-xl md:text-2xl pl-3 rounded-l-lg"></i>
              <input 
                className='bg-white h-12 md:h-14 w-full pl-3 outline-0 font-medium text-gray-600 text-sm md:text-base' 
                type="text" 
                placeholder='Enter your delivery location' 
              />
              <i className="ri-arrow-down-s-line bg-white flex items-center text-xl md:text-2xl pr-3 rounded-r-lg"></i>
            </div>
            
            {/* Search Input */}
            <div className='w-full md:w-[45%] flex'>
              <input 
                className='w-full h-12 md:h-14 pl-3 font-bold text-sm md:text-base bg-white rounded-l-lg outline-0 text-gray-600' 
                type="text" 
                placeholder='Search for restaurant, item or more' 
              />
              <i className="ri-search-line bg-white flex items-center text-lg md:text-xl pr-3 rounded-r-lg text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className='container mx-auto px-4 pb-8 max-w-[85%] relative  md:pb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5'>
          <Link to="/restaurant">
            <img 
              className='w-2/3 mx-auto md:w-full h-auto object-cover rounded-lg' 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" 
              alt="Food" 
            />
          </Link>
          <Link to="/restaurant">
            <img 
              className='w-2/3 mx-auto md:w-full h-auto object-cover rounded-lg' 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" 
              alt="Instant Mart" 
            />
          </Link>
          <Link to="/restaurant">
            <img 
              className='w-2/3 mx-auto md:w-full h-auto object-cover rounded-lg' 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" 
              alt="Dineout" 
            />
          </Link>
          <Link to="/restaurant">
            <img 
              className='w-2/3 mx-auto md:w-full h-auto object-cover rounded-lg' 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" 
              alt="Genie" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;