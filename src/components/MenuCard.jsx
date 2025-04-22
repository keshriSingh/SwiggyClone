import React, { useState } from 'react'
import Card from './Card'

function MenuCard({data,selected}) {
  const[isOpen,setIsOpen] = useState(true);
  
  const filteredItems = data?.itemCards?.filter((item) => {
    if (!selected) return true;
    return item?.card?.info?.itemAttribute?.vegClassifier === selected;
  }) || [];

  const shouldShowToggle = data?.itemCards?.length > 0;
  if(data.title==="Top Picks"){
    return
  }

  return (
    <div >
      <div className='mt-8'>
        <div className='w-full h-5 bg-gray-400 mb-9'></div>
       <div className='flex justify-between'>
       <h2 className={`${data?.['@type']?"text-xl":"text-lg text-gray-800"} font-bold flex items-center`}>{data?.title} {(filteredItems.length>0 && `(${filteredItems?.length})`)}</h2>
       {(shouldShowToggle) && (filteredItems.length>0) && (
          <p 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-5xl hover:cursor-pointer"
          >
            {isOpen ? (
              <i className="ri-arrow-drop-up-line"></i>
            ) : (
              <i className="ri-arrow-drop-down-line"></i>
            )}
          </p>
        )}
       </div>
       {
        isOpen?(<div>
        {
        (data?.categories?data?.categories?.map((item)=> <MenuCard key={item.title}  selected={selected} data={item}/>):filteredItems.map((item) =>(<Card key={item?.card?.info?.id} data={item?.card?.info}/>)))
        }
        </div>):''
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default MenuCard
