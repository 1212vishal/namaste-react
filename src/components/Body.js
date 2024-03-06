import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


 

const Body=()=>{
   
   const [listOfRestaurants,setListOfRestaurant]=useState([]);
   const [filteredRestaurants,setfilteredRestaurants]=useState([]);
   const [searchText,setsearchText]=useState("");
   
    useEffect(()=>{
      fetchData(); 
     },[]);

     const fetchData = async () => {

        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.14739718651254&lng=75.86155843969387&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    {
      return <h1>Look's Like you are offline ,Please Check Your Internet Connection</h1>
    }
 
    return listOfRestaurants.length===0? <Shimmer/>:
    (
        <div className="body">
         
          <div className="flex">
           <div className="search m-4 p-4">

            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>

            <button className="bg-green-600 px-4  py-1 m-4 rounded-lg" onClick={()=>{
               const filterRestaurant=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
             setfilteredRestaurants(filterRestaurant);
              
            
            }}>Search</button>

           </div >
           <div className=" m-4 p-4">
              <button className="bg-green-600 px-4  py-1 m-4 rounded-xl" 
               onClick={()=>{
                 filterList=listOfRestaurants.filter(
                  (res)=>res.info?.avgRating>=4 );

                  setListOfRestaurant(filterList);

                }}
               >
               Top Rated Restaurants
              </button>
              </div>
          </div>
  
          <div className="flex flex-wrap space-x-2 p-4 m-4 hover:dark-grey">
                {
                  filteredRestaurants.map((restaurant)=>(<Link to={"/restaurants/"+restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} resData={restaurant}/></Link>))
                } 
          </div>
  
        </div>
    )
  }

  export default Body;
