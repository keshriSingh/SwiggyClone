import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './Card';
import InnerHeader from './InnerHeader';
import { useSelector } from 'react-redux';

function SearchBox() {
  const [input, setInput] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [ne, setNe] = useState([]);
  const { id } = useParams();
  const {lat,lng} = useSelector(state=>state.placeSlice);

  useEffect(() => {
    async function FetchData() {
      const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
      const SwiggyAPI = `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}`;
      const response = await fetch(ProxyServer + SwiggyAPI);
      const data = await response.json();
      setRestaurantData(data.data?.cards);
      let tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setRecommended(tempData.filter((item) => {
        const card = item?.card?.card;
        return item && ('title' in card);
      }));
    }

      FetchData()
  }, [id]);

  useEffect(() => {
    const FilterData = recommended.map((item) => {
      if (item?.card?.card?.itemCards) {
        return item?.card?.card?.itemCards;
      } else if (item?.card?.card?.categories) {
        return item?.card?.card?.categories.filter((value) => {
          return value.itemCards;
        });
      } else {
        return [];
      }
    });
    setNe(() => FilterData.flat());
  }, [input, recommended]);

  const uniqueItems = ne.filter((item, index, self) => {
    // Keep only the first occurrence of each item (based on `id`)
    return index === self.findIndex((i) => (
      i?.card?.info?.id === item?.card?.info?.id
    ));
  });



  return (
    <>
    <InnerHeader/>
    <div className='w-[60%] mx-auto mt-8'>
      <div className='w-full p-10'>
        <input
          className='w-full h-12 bg-gray-200 rounded-xl pl-4 text-lg shadow-xl outline-0'
          type="text"
          placeholder='Search for dishes'
          onChange={(e) => { setInput(e.target.value) }}
          value={input}
        />
      </div>
     {
      input?<div>
      {uniqueItems
        .filter(item => item?.card?.info?.id)
        .filter((item)=>(item?.card?.info?.name.toLowerCase().includes(input.toLowerCase())))
        .map((item) =><Card key={item?.card?.info?.id} data={item?.card?.info} />)
      }
       </div>:''
     }
    </div>
    </>
  )
}

export default SearchBox;