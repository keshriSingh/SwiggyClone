import React, { useState } from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"
import InnerHeader from './InnerHeader'
import Shimmer from './Shimmer';


function RestCard({data}) {
    const [active,setActive] = useState('All');
  return (
    <div>
       <InnerHeader/>
       {
        data?.cards?.[0].card?.card?.imageGridCards?.info ? 
        <div>
              <div className='w-[80%] mx-auto border-b border-gray-500 mt-4 pb-12'>
            <h2 className='text-xl font-bold'>{data?.cards?.[0]?.card?.card?.header?.title}</h2>
            <div className='flex overflow-x-auto scrollbar-hide'>
                {data?.cards?.[0].card?.card?.imageGridCards?.info.map((value)=>
                {
                    return (
                        <div key={value.id} className='flex-none'>
                            <img className='w-36 h-45 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} alt="" />
                        </div>
                    )
                }
                )}
            </div>
        </div>
        <div className='w-[80%] mx-auto mt-6 pt-16 mb-10 border-b border-gray-500'>
            <h2 className='text-xl font-bold mb-5'>{data?.cards?.[1]?.card?.card?.header?.title}</h2>
            <div className='flex overflow-x-auto mb-10 overflow-y-hidden scrollbar-hide gap-8 '>
                {
                    data?.cards?.[1].card?.card?.gridElements?.infoWithStyle?.restaurants?.map((value)=>{

                        return(
                            <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                             <div className='relative h-74 w-69 flex flex-col flex-none shadow transform transition duration-200 rounded-md hover:scale-95 overflow-hidden'>
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '></div>
                                <div className='flex flex-col  p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base'>{value?.info?.cuisines.join(", ")}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='w-[80%] mx-auto mt-20'>
            <h2 className='text-2xl font-extrabold mb-4'>{data?.cards?.[2].card?.card?.title}</h2>
            <div className='flex gap-3 overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap'>
  <button 
    onClick={() => setActive("All")}
    className={`px-4 py-2 rounded-xl border border-gray-400 font-bold text-gray-600 text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors ${
      active === 'All' ? 'bg-gray-200' : ''
    }`}
  >
    All
  </button>
  <button 
    onClick={() => setActive("Ratings 4.0+")}
    className={`px-4 py-2 rounded-xl border border-gray-400 font-bold text-gray-600 text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors ${
      active === 'Ratings 4.0+' ? 'bg-gray-200' : ''
    }`}
  >
    Ratings 4.0+
  </button>
  <button 
    onClick={() => setActive("Rs. 300-Rs. 600")}
    className={`px-4 py-2 rounded-xl border border-gray-400 font-bold text-gray-600 text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors ${
      active === 'Rs. 300-Rs. 600' ? 'bg-gray-200' : ''
    }`}
  >
    Rs. 300-Rs. 600
  </button>
  <button 
    onClick={() => setActive("Offers")}
    className={`px-4 py-2 rounded-xl border border-gray-400 font-bold text-gray-600 text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors ${
      active === 'Offers' ? 'bg-gray-200' : ''
    }`}
  >
    Offers
  </button>
  <button 
    onClick={() => setActive("Less than Rs. 300")}
    className={`px-4 py-2 rounded-xl border border-gray-400 font-bold text-gray-600 text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors ${
      active === 'Less than Rs. 300' ? 'bg-gray-200' : ''
    }`}
  >
    Less than Rs. 300
  </button>
</div>
            <div className='flex flex-wrap gap-6'>
                {
                    active==='All'? data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.map((value)=>{
                        return(
                           <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl mt-6' >
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '>
                            </div>
                            <div className='flex flex-col p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base '>{value?.info?.cuisines.join(",")}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    }) :''
                }
                {
                    active==='Ratings 4.0+'? data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.filter((value)=>{
                        return (
                            value?.info?.avgRating>4?value:''
                        )
                    }).map((value)=>{
                        console.log(value);
                        return(
                           <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl mt-6' >
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '>
                            </div>
                            <div className='flex flex-col p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base '>{value?.info?.cuisines.join(",")}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    }) :''
                }
                 {
                    active==='Rs. 300-Rs. 600'? data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.filter((value)=>{
                        return (
                            value?.info?.costForTwo.split(' ')[0].slice(1)>=300 && value?.info?.costForTwo.split(' ')[0].slice(1)<=600?value:''
                        )
                    }).map((value)=>{
                        console.log(value);
                        return(
                           <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl mt-6' >
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '>
                            </div>
                            <div className='flex flex-col p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base '>{value?.info?.cuisines.join(",")}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    }) :''
                }
                 {
                    active==='Offers'? data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.filter((value)=>{
                        return (
                            value?.info?value:''
                        )
                    }).map((value)=>{
                        console.log(value);
                        return(
                           <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl mt-6' >
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '>
                            </div>
                            <div className='flex flex-col p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base '>{value?.info?.cuisines.join(",")}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    }) :''
                }
                 {
                    active==='Less than Rs. 300'? data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.filter((value)=>{
                        return (
                            value?.info?.costForTwo.split(' ')[0].slice(1)<=300?value:''
                        )
                    }).map((value)=>{
                        console.log(value);
                        return(
                           <Link key={value?.info?.id} to={`/city/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl mt-6' >
                                <img className=' h-46 w-[100%] object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`} alt="" />
                                <h2 className='absolute z-10 top-38 left-3 text-xl text-white font-extrabold'>{value?.info?.aggregatedDiscountInfoV3?.header}{value?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                <div className='absolute rounded-b-xl top-28 h-18 w-full bg-gradient-to-t from-black '>
                            </div>
                            <div className='flex flex-col p-2'>
                                    <p className='text-lg font-bold whitespace-nowrap overflow-hidden'>{value?.info?.name}</p>
                                    <div className='flex items-center text-base font-semibold gap-3'>
                                        <p className='flex items-center'><i className="ri-star-fill text-sm text-yellow-400 mr-0.5"></i> {value?.info?.avgRatingString}</p>
                                        <p className='text-lg'>{value?.info?.sla?.slaString}</p>
                                    </div>
                                    <p className='text-base '>{value?.info?.cuisines.join(",")}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    }) :''
                }
            </div>
        </div>
        <Footer/>
        </div> :<Shimmer/>
       }
    </div>
  )
}

export default RestCard