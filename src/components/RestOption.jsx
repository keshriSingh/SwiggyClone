import React, { useEffect, useState } from "react"
import RestCard from "./RestCard";
import { useSelector } from "react-redux";
function RestOption(){
    const [restData,setRestData] = useState({})
    const {lat,lng} = useSelector(state=>state.placeSlice);
    useEffect(()=>{
      async function FetchData(){
        const ProxyServer = "https://cors-by-codethread-for-swiggy.vercel.app/cors";
        const SwiggyAPI = `/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true`;
        const response = await fetch(ProxyServer+SwiggyAPI);
        const data = await response.json();
        setRestData(data?.data);
      }
      FetchData();
    },[lat,lng])

    return(
        <div>
            <RestCard data={restData}/>
        </div>
    )
}

export default RestOption