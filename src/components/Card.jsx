import React from 'react'
import { addItem,increaseItem,decreaseItem } from './Slices/CartSlice';
import { useDispatch,useSelector } from 'react-redux'

function Card({data}){
  const items = useSelector(state=>state.cartSlice.items)
  const elem = items.find((item)=>item.id===data.id);
  const count = elem?elem.quantity:0;
  const dispatch = useDispatch();

  const handleIncrement = ()=>{
   dispatch(increaseItem(data));
  
  }

  const handleDecrement = ()=>{
    dispatch(decreaseItem(data));
    
  }

  const handleAdd = ()=>{
    dispatch(addItem(data));
    
  }

  return (
    <div className='flex mt-8 border-t justify-between items-center'>
      <div className='pt-4 w-9/12 flex flex-col gap-1'>
        <h2 className='text-lg font-semibold'>{data?.name}</h2>
        <h2 className='text-base font-semibold'>₹{(data?.price)?data?.price/100:data?.defaultPrice/100}</h2>
       <div>
       <span className='text-green-700 text-sm inline-flex items-center font-bold'><i className="ri-star-fill text-green-700 text-sm"></i> {data?.ratings?.aggregatedRating?.rating}</span>
       <span className='inline-flex items-center text-sm ml-0.5'>({data?.ratings?.aggregatedRating?.ratingCountV2})</span>
       </div>
        <p className='text-sm text-gray-500'>{data?.description}</p>
      </div>
      <div className='relative flex items-center pt-6' >
        <img className='w-39 h-36 object-cover rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt="" />
       {
        (count?
          <div className='absolute text-green-600 top-36 left-7 px-4 py-1 rounded-md shadow bg-white flex gap-4 text-2xl font-bold hover:cursor-pointer'>
            <button className='hover:cursor-pointer' onClick={()=>handleDecrement()}>-</button>
            <button>{count}</button>
            <button className='hover:cursor-pointer' onClick={()=>handleIncrement()}>+</button>
          </div>
        :<button onClick={()=>handleAdd()} className='absolute hover:cursor-pointer bg-white text-green-600 text-lg left-5 z-10 top-36 font-bold px-10 py-2 shadow rounded-md'>ADD</button>)
       }
      </div>
    </div>
  )
}

export default Card
