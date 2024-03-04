import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{
   
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);
   

if(resInfo===null)
{
    return <Shimmer/>;
}

const {name,cuisines,costForTwo}=resInfo?.cards[0]?.card?.card?.info;

const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
console.log(itemCards);

   return (
       <div className="menu"> 
       <h1>{name}</h1>
       <h1>{cuisines.join(" , ")}</h1>
       <h1>{costForTwo}</h1>
       <h1>Menu</h1>
       <ul>
          {itemCards.map(item => <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>) }
       </ul>
       </div>
   )
};

export default RestaurantMenu;