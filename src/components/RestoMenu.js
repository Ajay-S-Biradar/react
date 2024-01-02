import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {IMG_URL, Restaurant_URL} from "../constant";
import menu from "./Menu";
import Shimmer from "../shimmer";

const api = Restaurant_URL;


const RestoMenu = ()=>{
    const params = useParams();
    const [RestaurantMenu, setRestaurantMenu] = useState([]);
    const [RestaurantInfo, setRestaurantInfo] = useState({});
    useEffect(()=>{
        apiCall();
    },[])

    async function apiCall(){
        let items = [];
        let itemName = [];
        let itemNames = [];
        const data = await fetch(api+params.id);
        const json = await data.json();
        console.log(data);
        const info = await (json?.data?.cards[0]?.card?.card?.info);
        setRestaurantInfo(info);
        const menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
        setRestaurantMenu(menu);
    }

    return (RestaurantInfo.length===0)?<Shimmer />:(
        <>
        <div className="flex justify-center p-5 m-5" >
            <img className="w-64" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+RestaurantInfo?.cloudinaryImageId}></img>
            <div className="p-6 m-5">
            <h1>this is Menu</h1>
            <h2>id: {params?.id}</h2>
            <ul className="hotelInfo">
                <li>{RestaurantInfo?.name}</li>
                <li>{RestaurantInfo?.city}</li>
                <li>{RestaurantInfo?.areaName}</li>
                <li>{RestaurantInfo?.avgRating}</li>
                <li>{RestaurantInfo?.cuisines?.join(", ")}</li>
            </ul>
            </div>
        </div>

        <div className="">
              <h2>Menu</h2>
              {RestaurantMenu.map(
                (x) => {
                    console.log(x?.card?.info?.defaultPrice);
                  return (
                    <p>
                      {x?.card?.info?.name} Rs{" "}
                      {Math.floor(x?.card?.info?.defaultPrice / 100)}
                    </p>
                  );
                }
              )}    
        </div>
        </>
    )
}

export default RestoMenu;