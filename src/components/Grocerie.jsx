import React from 'react';
import { Groceries } from '../Utils/GrocerieItem';
import GrocerieCard from './GrocerieCard';

function Grocerie() {
  return (
    <div className='w-[80%] px-4 md:px-6 lg:px-8 mx-auto mb-10 md:mb-16'>
      {/* Section Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>Shop groceries on Instamart</h2>
      </div>

      {/* Groceries Grid - Horizontal scroll on mobile, grid on desktop */}
      <div className='relative overflow-x-auto scrollbar-hide'>
        <div className='flex space-x-4 md:space-x-6 pb-4 '>
          {Groceries.map((value) => (
            <div key={value.id} className='flex-shrink-0'>
              <GrocerieCard data={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grocerie;