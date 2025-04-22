import React from 'react'
import { addItem, increaseItem, decreaseItem } from './Slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Dishes({item}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartSlice.items);
    const elem = items.find((value) => value.id === item?.info?.id);
    const count = elem ? elem.quantity : 0; 

    const handleAdd = () => {
        dispatch(addItem(item?.info));
    }

    const handleIncrement = () => {
        dispatch(increaseItem(item?.info));
    }
      
    const handleDecrement = () => {
        dispatch(decreaseItem(item?.info));
    }

    return(
        <div className='w-full xs:w-[48%] sm:w-[48%] h-auto min-h-[200px] sm:h-65 border rounded-xl sm:rounded-2xl p-2 sm:p-3 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-300'>
            {/* Top Section */}
            <div className='flex justify-between border-b border-dotted border-gray-400 pb-2 sm:pb-3'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xs xs:text-sm text-gray-700'>By {item?.info?.name}</h2>
                    <div className='flex gap-0.5 items-center text-gray-500'>
                        <i className="ri-star-fill text-xs xs:text-sm mt-0.5 xs:mt-1 text-gray-500"></i>
                        <p className='text-xs xs:text-sm font-semibold'>{item?.info?.ratings?.aggregatedRating?.rating}</p>
                        <p className='text-xs'>.</p>
                        <p className='text-xs xs:text-sm font-semibold'>{item?.restaurant?.info?.sla?.slaString}</p>
                    </div>
                </div>
                <i className="ri-arrow-right-line text-xl sm:text-2xl text-gray-500 mt-0.5 sm:mt-1"></i>
            </div>

            {/* Bottom Section */}
            <div className='flex pt-2 sm:pt-4  xs:flex-row'>
                {/* Left Side - Text */}
                <div className='flex flex-col gap-1 pt-2 sm:pt-4 pl-1 sm:pl-2 w-full xs:w-[50%]'>
                    {item?.info?.isVeg ? (
                        <img className='w-4 h-4 object-cover' src="https://freesvg.org/img/1531813273.png" alt="Veg" />
                    ) : (
                        <img className='w-4 h-4 object-cover' src="https://freesvg.org/img/1531813245.png" alt="Non-Veg" />
                    )}
                    <h2 className='font-bold text-base sm:text-lg leading-tight line-clamp-2'>{item?.info?.name}</h2>
                    <p className='font-semibold text-sm sm:text-base'>₹{item?.info?.price/100}</p>
                </div>

                {/* Right Side - Image and Button */}
                <div className='w-full xs:w-[50%] relative mt-2 xs:mt-0'>
                    <img 
                        className='w-full h-24 xs:h-28 sm:h-36 object-cover rounded-lg sm:rounded-xl' 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.imageId}`} 
                        alt={item?.info?.name} 
                    />
                   
                    {count ? (
                        <div className='absolute text-green-600 top-[85%] xs:top-[80%] sm:top-[75%] left-1/2 transform -translate-x-1/2 px-2 sm:px-4 py-0.5 sm:py-1 rounded-md shadow bg-white flex gap-2 sm:gap-4 text-lg sm:text-2xl font-bold hover:cursor-pointer'>
                            <button className='hover:cursor-pointer' onClick={handleDecrement}>-</button>
                            <button>{count}</button>
                            <button className='hover:cursor-pointer' onClick={handleIncrement}>+</button>
                        </div>
                    ) : (
                        <button 
                            onClick={handleAdd} 
                            className='absolute hover:cursor-pointer bg-white text-green-600 text-sm sm:text-base lg:text-lg left-1/2 transform -translate-x-1/2 z-10 top-[85%] xs:top-[80%] sm:top-[75%] font-bold px-4 sm:px-6 lg:px-8 py-1 sm:py-2 shadow-lg rounded-md'
                        >
                            ADD
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dishes