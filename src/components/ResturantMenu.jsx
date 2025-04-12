import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import MenuCard from './MenuCard';
import InnerHeader from './InnerHeader';

function ResturantMenu() {
    const {id} = useParams();
    const [restaurantData,setRestaurantData] = useState([]);
    const [recommended,setRecommended] = useState([]);
    const [selected,setSelected] = useState(null);
    
   useEffect(()=>{
    async function FetchData() {
       const ProxyServer = "https://thingproxy.freeboard.io/fetch/";
       const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6327&lng=77.2198&restaurantId=${id}`;
       const response = await fetch(ProxyServer+SwiggyAPI);
       const data = await response.json();
       setRestaurantData( data.data?.cards);
       let tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
       setRecommended(tempData.filter((item)=> {
         const card = item?.card?.card;
         return item && ('title' in card)
       }))
    }
    FetchData()
  },[])
  
   return(
      <>
    <InnerHeader/>
    <div className='w-[60%] mx-auto'>
      <div className='w-full p-10'>
        <Link to={`/city/delhi/${id}/search`}>
        <input className='w-full h-12 bg-gray-200 rounded-xl pl-4 text-lg shadow-xl outline-0' type="text" placeholder='Search for dishes' /></Link>
      </div>
       <div className='mt-6 gap-3 flex'>
       <button onClick={()=>setSelected(selected==='VEG'?null:'VEG')} className={`px-5 py-2 rounded-xl  hover:cursor-pointer ${selected==='VEG'?'bg-green-400 text-white':'bg-gray-300'}`}>Veg</button>
       <button onClick={()=>setSelected(selected==='NONVEG'?null:'NONVEG')} className={`px-5 py-2 rounded-xl hover:cursor-pointer ${selected==='NONVEG'?'bg-red-400 text-white':'bg-gray-300'}`}>Non Veg</button>
       </div>
      {
         recommended?.map((value)=><MenuCard key={value?.card?.card?.title} data={value?.card?.card} selected={selected}/>)
      }
    </div>
    </>
   )
}

export default ResturantMenu
