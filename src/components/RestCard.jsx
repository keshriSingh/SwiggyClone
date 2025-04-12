import React from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"
import InnerHeader from './InnerHeader'


function RestCard({data}) {
  return (
    <div>
       <InnerHeader/>
        <div className='w-[80%] mx-auto border-b  border-gray-500 mt-4 pb-12'>
            <h2 className='text-xl font-bold '>{data?.cards?.[0]?.card?.card?.header?.title}</h2>
            <div className='flex overflow-x-auto '>
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
            <div className='flex overflow-x-auto overflow-y-hidden gap-8 '>
                {
                    data?.cards?.[1].card?.card?.gridElements?.infoWithStyle?.restaurants?.map((value)=>{
                        return(
                            <Link key={value?.info?.id} to={`/city/delhi/${value?.info?.id}`}>
                             <div className='relative h-74 w-69 flex flex-col flex-none shadow-xl transform transition duration-200 hover:scale-95'>
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
            <div className='flex flex-wrap gap-6'>
                {
                    data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants.map((value)=>{
                        return(
                           <Link key={value?.info?.id} to={`/city/delhi/${value?.info?.id}`}>
                            <div className='relative h-74 w-69 shadow overflow-hidden transform transition-all duration-200 hover:scale-95 rounded-t-xl' >
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
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RestCard