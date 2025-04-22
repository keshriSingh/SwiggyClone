import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import MenuCard from './MenuCard';
import InnerHeader from './InnerHeader';
import { useSelector } from 'react-redux';

function ResturantMenu() {
    const {id} = useParams();
    const [restaurantData,setRestaurantData] = useState([]);
    const [recommended,setRecommended] = useState([]);
    const [deals,setDeals] = useState([]);
    const [selected,setSelected] = useState(null);
    const [value,setValue] = useState(0);
    const {lat,lng} = useSelector(state=>state.placeSlice);
   
    
   useEffect(()=>{
    async function FetchData() {
       const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
       const SwiggyAPI = `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}`;
       const response = await fetch(ProxyServer+SwiggyAPI);
       const data = await response.json();
       setRestaurantData( data.data?.cards[2]?.card?.card?.info);
       setDeals(data.data?.cards[3]?.card.card?.gridElements?.infoWithStyle?.offers)
       let tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
       setRecommended(tempData.filter((item)=> {
         const card = item?.card?.card;
         return item && ('title' in card)
       }))
    }
    FetchData()
  },[])
  
  const handlePrev = ()=>{
   value>=0?setValue((prev)=>prev-310):''
  }
  
  const handleNext = ()=>{
    value<930?setValue((prev)=>prev+310):''
  }
  
   return(
      <>
    <InnerHeader/>
    <div className='w-full md:w-[90%] lg:w-[80%] xl:w-[50%] mx-auto px-4 md:px-0'>
      <div className='mt-6'>
        <p className='text-[12px] cursor-pointer font-semibold'>
        <Link to={'/'}><span className='text-gray-500 hover:text-gray-800'>Home / </span></Link>
        <span className='text-gray-500 hover:text-gray-800'>{restaurantData?.city} / </span>
        <span>{restaurantData?.name}</span>
        </p>
      </div>
      <div className='mt-9 mb-6 pl-4 text-2xl md:text-3xl font-bold'>
        <h2>{restaurantData?.name}</h2>
      </div>
      <div className='w-full h-auto md:h-[176px] pl-4 pr-4 pb-4 bg-gradient-to-t from-black/40 rounded-b-4xl'>
        <div className='w-full h-full flex flex-col gap-3 bg-white border border-gray-400 rounded-4xl p-4'>
          <div className='flex flex-wrap items-center gap-2 font-bold'>
            <i className="ri-star-fill bg-green-700 rounded-full px-1 py-0.5 text-[12px] text-white"></i>
            <span>{restaurantData?.avgRating}</span>
            <span>({restaurantData?.totalRatingsString})</span>
            -
            <span>{restaurantData?.costForTwoMessage}</span>
          </div>
          <div>
            <p className='text-orange-500 font-bold underline pl-2 text-sm'>{restaurantData?.cuisines?.join(', ')}</p>
          </div>
          <div className='flex'>
            <div className='w-2 h-14 pt-2.5 p-1 flex flex-col items-center '>
              <div className='w-2 h-2 rounded-full bg-gray-300'></div>
              <div className='w-0.5 h-4 bg-gray-300'></div>
              <div className='w-2 h-2 rounded-full bg-gray-300'></div>
            </div>
            <div className='pl-4 pt-0'>
              <div className='flex flex-wrap'>
                <p className='font-bold mr-3'>Outlet</p>
                <p className='text-gray-500'>{restaurantData?.locality}</p>
                <i className="ri-arrow-down-s-fill mt-0.5 text-red-500"></i>
              </div>
              <div>
                <p className='font-bold text-sm'>{restaurantData?.sla?.slaString}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8'>
        <div className='flex justify-between mt-10 mb-8'>
          <h2 className='text-xl md:text-2xl font-bold'>Deals for you</h2>
          <div>
            <i onClick={()=>handlePrev()} className={`ri-arrow-left-line text-xl mr-3 cursor-pointer rounded-full p-2 ${value<=0?"bg-gray-200 text-gray-400":"bg-gray-300 text-black"}`}></i>
            <i onClick={()=>handleNext()} className={`ri-arrow-right-line text-xl cursor-pointer rounded-full p-2  ${value>=930?"bg-gray-200 text-gray-400":"bg-gray-300 text-black"}`}></i>
          </div>
        </div>
       <div className='overflow-hidden w-full'>
         <div style={{ transform: `translateX(-${value}px)` }}
              className={`flex gap-5 duration-400`}>
            {deals.map((item,i)=>(
              <div key={i} className='flex w-64 md:w-80 h-19 border gap-3 border-gray-300 rounded-3xl p-2 items-center shrink-0'>
               <div>
                <img className='w-10 h-10 md:w-12 md:h-12' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.offerLogo}`} alt="" />
               </div>
               <div>
                <div>
                  <h2 className="font-bold text-base md:text-lg tracking-tighter">{item?.info?.header}</h2>
                  <h2 className='font-bold text-xs md:text-sm text-gray-500'>{item?.info?.couponCode}</h2>
                </div>
               </div>
              </div>
            ))}
          </div>
       </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-bold text-lg'>-- MENU --</p>
      </div>
      <div className='w-full p-4 md:p-10'>
        <Link to={`/city/${id}/search`}>
        <input className='w-full h-12 bg-gray-200 rounded-xl pl-4 text-lg shadow-xl outline-0' type="text" placeholder='Search for dishes' /></Link>
      </div>
       <div className='mt-6 gap-3 flex flex-wrap'>
         <button onClick={()=>setSelected(selected==='VEG'?null:'VEG')} className={`px-4 py-1 md:px-5 md:py-2 rounded-xl hover:cursor-pointer ${selected==='VEG'?'bg-green-400 text-white':'bg-gray-300'}`}>Veg</button>
         <button onClick={()=>setSelected(selected==='NONVEG'?null:'NONVEG')} className={`px-4 py-1 md:px-5 md:py-2 rounded-xl hover:cursor-pointer ${selected==='NONVEG'?'bg-red-400 text-white':'bg-gray-300'}`}>Non Veg</button>
       </div>
      {
         recommended?.map((value)=><MenuCard key={value?.card?.card?.title} data={value?.card?.card} selected={selected}/>)
      }
    </div>
    </>
   )
}

export default ResturantMenu