import { restoInfo } from "../constant"
import restaCard from "../restaurant"
//to use the useState
import { useState } from "react"
import { useEffect } from "react";
import Shimmer from "../shimmer";
import NotFound from "../notfound";


function filterData(searchText, x) {
  return x.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.28475216724439&lng=76.64010163396597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN";


const BodyComponent = ()=>{
    const [searchText,setSearchtext] = useState("");
    const [restaurants,setRestoList] = useState(null);
    const [constresto,setconstresto] = useState([]);
    useEffect(()=>{
      console.log("useeffect");
      apiCall();
    },[])

    async function apiCall(){
      const data = await fetch(api);
      const json = await data.json();
      console.log(json);
      const x = (json?.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants);
      console.log(x);
      setRestoList(x)
      setconstresto(x);
    }
    if(restaurants==null){
      return <Shimmer/>;
    }

    return (restaurants?.length===0)? <Shimmer/> :(restaurants==false)? <>
    <h2>no hotel match ur search</h2>
    <div> 
        <input
        className="m-1 p-1 bg-yellow-50 font-medium"
        type="text"
        placeholder="search"
        onChange={(e)=>{
            setSearchtext(e.target.value)
        }}
        />
        <button
        className=""
          onClick={()=>{ 
            const data = filterData(searchText,constresto);
            (data.length===0)?setRestoList(false): setRestoList(data);
          }
          }
        > search  </button>
    </div>
    </>: (   
    <>
    <div> 
        <input
        className="focus:bg-white hover:bg-gray-50 m-1 px-2 py-2 bg-yellow-50 font-medium rounded-lg"
        type="text"
        placeholder="search"
        onChange={(e)=>{
            setSearchtext(e.target.value)
        }}
        />
        <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          onClick={()=>{ 
            const data = filterData(searchText,constresto);
            (data.length===0)?setRestoList(false): setRestoList(data);
          }
          }
        > search  </button>
    </div>
    <h2>{searchText}</h2>
    <div className="flex flex-wrap justify-around ">
       {
         restaurants.map((restaurant)=>{
           return restaCard(restaurant.info)
         })
       }
       </div>
    </>
    )
}

export default BodyComponent;