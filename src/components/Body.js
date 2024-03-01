import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


 

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


 
    return listOfRestaurants.length===0? <Shimmer/>:
    (
        <div className="body">
         
          <div className="filtre">
           <div className="search">

            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>

            <button onClick={()=>{
               const filterRestaurant=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
             setfilteredRestaurants(filterRestaurant);
              
            
            }}>Search</button>

           </div>
              <button className="filter-btn" 
               onClick={()=>{
                 filterList=listOfRestaurants.filter(
                  (res)=>res.info?.avgRating>=4 );

                  setListOfRestaurant(filterList);

                }}
               >
               Top Rated Restaurants
              </button>
          </div>
  
          <div className="res-container">
                {
                  filteredRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>))
                } 
          </div>
  
        </div>
    )
  }

  export default Body;
