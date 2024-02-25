import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body=()=>{
   
   const [listOfRestaurants,setListOfRestaurant]=useState(resList);

  // let listOfRestaurants=[
  //   {data: {
  //     id: "74453",
  //     name: "Domino's Pizza",
  //     area: "Athwa",
  //     cuisines: ["Pizzas"],
  //     costForTwoString: "₹400 FOR TWO", 
  //     lastMileTravelString: "2.1 kms",
  //     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //     avgRating: "4.0",
  //   }},
  //   {data: {
  //     id: "744577",
  //     name: "Vishal food House",
  //     area: "Athwa",
  //     cuisines: ["Pizzas"],
  //     costForTwoString: "₹400 FOR TWO", 
  //     lastMileTravelString: "2.1 kms",
  //     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //     avgRating: "4.6",
  //   }},

  //   {data: {
  //       id: "81094",
  //       name: "Richie Rich Juices & Shakes",
  //       area: "Athwa",
  //       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
  //       cuisines: ["Ice Cream"],
  //       costForTwoString: "₹250 FOR TWO",
  //       lastMileTravelString: "5.5 kms",
  //        avgRating: "3.9",
        
  //   }}
  // ];

    return(
        <div className="body">
  
          <div className="filtre">
              <button className="filter-btn" 
               onClick={()=>{
                 filterList=listOfRestaurants.filter(
                  (res)=>res.data.avgRating>=4 );

                  setListOfRestaurant(filterList);

                }}
               >
               Top Rated Restaurants
              </button>
          </div>
  
          <div className="res-container">
                {
                 listOfRestaurants.map((resturant)=>(<RestaurantCard key={resturant.data.id} resData={resturant}/>))
                } 
          </div>
  
        </div>
    )
  }

  export default Body;
