import React from 'react'

function GrocerieCard({data}) {
  return (
    <div className='flex-none mr-8'>
    <img className='h-45 w-40 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt="" />
    <h2 className='w-34 text-center text-gray-700 text-xl font-bold'>{data?.action?.text}</h2>
    </div>
  )
}

export default GrocerieCard
