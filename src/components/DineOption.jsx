import React from "react";
import { RestaurantData } from "../Utils/ResturantsData";
import DineCard from "./DineCard";

function DineOption() {
  return (
    <div className="w-full">
      {/* Restaurants Section */}
      <div className="container w-[80%] px-4 md:px-6 lg:px-8 mx-auto mt-16 md:mt-22">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Discover best restaurants on Dineout
          </h2>
        
        </div>
        
        {/* Restaurant Cards - Horizontal scroll on mobile */}
        <div className="relative pb-4">
          <div className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {RestaurantData.map((value) => (
              <div key={value.info.id} className="flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-102 hover:overflow-hidden rounded-lg overflow-hidden w-72 md:w-80">
                <DineCard data={value} />
              </div>
            ))}
          </div>
        </div>
    
      </div>

      {/* Promotional Banner */}
      <div className="w-full mt-16 md:mt-20 mb-12 md:mb-16">
        <div className="relative overflow-hidden">
          <img 
            className="h-26 md:h-60 lg:h-72 w-full object-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" 
            alt="Download the Swiggy app for better experience"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default DineOption;