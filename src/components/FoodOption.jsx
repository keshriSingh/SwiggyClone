import React from "react";
import { imageRowFirst } from "../Utils/FoodData";
import { imageRowSecond } from "../Utils/AnotherFoodData";
import FoodCard from "./FoodCard";

function FoodOption() {
  return (
    <div className="container w-[80%] mx-auto px-4 md:px-6 lg:px-8 mt-20 md:mt-28 mb-16 md:mb-24">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
        Popular Food Options
      </h2>

      {/* First Row - Horizontal Scroll on Mobile */}
      <div className="overflow-x-auto container scrollbar-hide mx-auto">
      <div className="relative ">
        <div className="flex space-x-4 md:space-x-6 pb-4 md:pb-0 ">
          {imageRowFirst.map((value) => (
            <div key={value.id} className="flex-shrink-0 w-48 md:w-auto">
              <FoodCard data={value} />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Horizontal Scroll on Mobile */}
      <div className="relative mt-6 md:mt-8">
        <div className="flex space-x-4 md:space-x-6  pb-4 md:pb-0">
          {imageRowSecond.map((value) => (
            <div key={value.id} className="flex-shrink-0 w-48 md:w-auto">
              <FoodCard data={value} />
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
}

export default FoodOption;