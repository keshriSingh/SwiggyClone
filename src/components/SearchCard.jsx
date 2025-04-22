import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLat,changeLng } from './Slices/PlaceSlice'
import { hide } from './Slices/SearchSlice';

function SearchCard({data}) {
  const dispatch = useDispatch();
  function handleLocation(){
    loca(data.place_id)
  }
  async function loca(id) {
    const response = await fetch(`https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${id}`);  
    const data = await response.json();
    console.log(data)
    dispatch(hide())
    dispatch(changeLat(data?.data?.[0].geometry?.location?.lat))
    dispatch(changeLng(data?.data?.[0].geometry?.location?.lng))

  }



  return (
    <div onClick={()=>handleLocation()} className='flex gap-3 border-b border-dotted hover:cursor-pointer mb-5 pb-5  w-96'>
        <i className="ri-map-pin-line mt-1 text-lg"></i>
        <div>
            <h2 className='font-bold '>{data?.structured_formatting?.main_text}</h2>
            <p className='font-semibold text-sm text-gray-500'>{data?.structured_formatting?.secondary_text}</p>
        </div>
    </div>
  )
}

export default SearchCard
