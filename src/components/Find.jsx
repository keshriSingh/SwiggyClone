import React, { useEffect, useState } from 'react'
import InnerHeader from './InnerHeader'
import { useSelector } from 'react-redux';
import Dishes from './Dishes';

function Find() {
    const {lat,lng} = useSelector(state=>state.placeSlice)
    const [popular,setPopular] = useState([]);
    const [input,setInput] = useState('');
    const [dish,setDish] = useState([]);
    const [afterDish,SetAfterDish] = useState([]);

    async function FetchData(){
        const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
        const SwiggyAPI = `/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`;
        const response = await fetch(ProxyServer+SwiggyAPI);
        const data = await response.json();
        setPopular(data?.data?.cards?.[1].card?.card)
    }
    useEffect(()=>{
        FetchData()
    },[])

    async function getDish(){
        const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
        const SwiggyAPI = `/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${input}&trackingId=undefined&includeIMItem=true`;
        const response = await fetch(ProxyServer+SwiggyAPI);
        const data = await response.json();
        setDish(data?.data?.suggestions)
    }

    useEffect(()=>{
        SetAfterDish([])
        getDish()
    },[input])

    async function getAfterDish() {
        const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
        const SwiggyAPI = `/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${input.toLocaleLowerCase()}&trackingId=d8defd7a-01e8-9681-e478-cd449810831e&submitAction=ENTER&queryUniqueId=8e36f6cc-2f4a-89b8-43be-3f1505b0248f`;
        const response = await fetch(ProxyServer+SwiggyAPI);
        const data = await response.json();
        SetAfterDish(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
    }

    function handleKeyDown(e){
       if(e.key==='Enter'){
        setDish([]);
        getAfterDish();
       }
    }

  return (
    <div className="min-h-screen transition-all duration-200">
         <InnerHeader/>
         <div className='w-full md:w-11/12 lg:w-4/5 xl:w-[55%] mx-auto px-2 sm:px-4'>
             {/* Search Bar */}
             <div className='h-12 w-full border border-gray-400 flex justify-between mt-6 sm:mt-12 rounded-md'>
                 <input 
                     onKeyDown={handleKeyDown} 
                     onChange={(e)=>setInput(e.target.value)} 
                     className='h-full w-full border-gray-400 outline-0 pl-4 font-bold text-sm sm:text-base' 
                     type="text" 
                     placeholder='Search for restaurants and food' 
                     value={input}
                 />
                 <i className="ri-search-line text-xl p-2 text-gray-600"></i>
             </div>
             
             {/* Popular Section - Only shown when input is empty */}
             {!input?
                 <div className='mt-8 sm:mt-16'>
                     <h2 className='font-bold text-xl sm:text-2xl tracking-tight'>{popular?.header?.title}</h2>
                     <div className='h-30 flex overflow-x-auto scrollbar-hide mt-4 sm:mt-6 gap-1.5 pb-2'>
                         {popular?.imageGridCards?.info?.map((item) => (
                             <div key={item?.id} className='flex-none'>
                                 <img 
                                     className='w-16 h-20 sm:w-20 sm:h-27 object-cover rounded' 
                                     src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.imageId}`} 
                                     alt="" 
                                 />
                             </div>
                         ))}
                     </div>
                 </div>:''
             }
             
             {/* Results Section */}
             {afterDish?.length > 0 ? (
                 <div className='mt-6'>
                     <h2 className='font-bold text-base sm:text-lg hover:cursor-pointer px-4 sm:px-6 py-1 sm:py-2 rounded-xl mt-2 mb-2 text-white bg-gray-700 inline-block'>
                         Dishes
                     </h2>
                     <div className='w-full flex flex-wrap justify-around bg-gray-300 p-2 sm:p-4 pt-4 sm:pt-6 gap-3 sm:gap-6 rounded-md'>
                         {afterDish.map((item, i) => {
                             if(!item?.card?.card?.info) return null;
                             if(!item?.card?.card?.info.imageId) return null;
                             return <Dishes key={item?.card?.card?.info?.id || i} item={item?.card?.card}/>;
                         })}
                     </div>
                 </div>
             ) : (
                 <div className='px-1 sm:px-2 mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3'>
                     {dish?.map((item, i) => (
                         <div key={i} className='flex px-1 rounded-md gap-2 sm:gap-3 h-16 sm:h-20 items-center hover:bg-sky-100 hover:cursor-pointer transition-colors'>
                             <div>
                                 <img 
                                     className='w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md' 
                                     src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.cloudinaryId}`} 
                                     alt="" 
                                 />
                             </div>
                             <div>
                                 <h2 className='font-semibold tracking-tight text-sm sm:text-base'>{item?.text}</h2>
                                 <p className='text-[10px] sm:text-[12px] font-semibold text-gray-500'>{item?.type}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             )}
         </div>
    </div>
  )
}

export default Find