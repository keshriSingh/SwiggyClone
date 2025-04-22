import React from 'react'

function ShimmerRest() {
  return (
    <div className='w-[60%] mx-auto flex flex-col items-center'>
     <div className='w-[80%] h-40 bg-gray-300 animate-pulse mt-20 rounded-3xl'></div>
     {
        Array(12).fill('').map(data=>{
            return(
                <div className='w-[60%] flex items-center justify-between gap-3 border border-gray-300 mt-10 rounded-2xl'>
                <div className='w-[100%] flex flex-col gap-4 p-4'>
                <div className='h-4 w-[70%] bg-gray-300'></div>
                 <div className='h-4 w-[50%] bg-gray-300'></div>
                 <div className='h-4 w-[30%] bg-gray-300'></div>
                </div>
                 <div className='w-[50%]'>
                     <div className='h-20 w-40 bg-gray-300'></div>
                 </div>
              </div>
            )
        })
     }
    </div>
  )
}

export default ShimmerRest
