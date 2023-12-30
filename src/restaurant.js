import { Restaurant_URL } from "./constant";
import { Link } from "react-router-dom";

const restaCard = (x)=>{
  const url = "restaurants/"+x.id;
  return  (

    <Link to={url} key={x?.id}>
       <div className="hover:shadow-lg flex flex-col justify-around w-64 rounded overflow-hidden shadow-md m-2 p-4 h-[400px]" >
      <img className = "w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"+"/"+x?.cloudinaryImageId} />
         <div>
         <h2 className="flex">{x?.name}</h2>
         <h3>{x?.cuisines.join(", ")}</h3>
         <h4>{x?.avgRating}stars</h4>
         </div>
    </div>
    </Link>
   )
}

export default restaCard; 