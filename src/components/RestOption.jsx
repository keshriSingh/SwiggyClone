import React, { useEffect, useState } from "react"
import RestCard from "./RestCard";
function RestOption(){
    const [restData,setRestData] = useState({})
    useEffect(()=>{

      async function FetchData(){
        const ProxyServer = "https://corsproxy.io/?";
        const SwiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2198&is-seo-homepage-enabled=true";
        const response = await fetch(ProxyServer+SwiggyAPI);
        const data = await response.json();
        setRestData(data?.data);
      }
      FetchData();
    },[])
    return(
        <div>
            <RestCard data={restData}/>
        </div>
    )
}

export default RestOption