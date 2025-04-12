import React from 'react'

function FoodCard({data}) {
  return (
    <>
        <img className='h-45 w-40 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt="" />
    </ >
  )
}

export default FoodCard
