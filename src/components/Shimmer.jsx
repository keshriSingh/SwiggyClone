import React from 'react'

function Shimmer() {
  return (
    <div>
      <div className='w-full h-80 bg-indigo-950 flex flex-col justify-center items-center gap-3 relative '>
        <img className='w-12 h-12' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa" alt="" />
      <div className='absolute top-[32%]'><span class="loader"></span></div>
        <h2 className='text-3xl text-white'>Looking for great food near you...</h2>
      </div>
    
    </div>
  )
}

export default Shimmer
