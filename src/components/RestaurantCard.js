import { CDN_URL } from "../utils/constants";


const RestaurantCard=({resData})=>{

    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo"
        src={ CDN_URL
           +
          resData.data.cloudinaryImageId
        }></img>
         <h3>{resData.data.name}</h3>
         <h4>{resData.data.cuisines}</h4>
         <h4>{resData.data.avgRating}</h4>
         <h4>{resData.data.area}</h4>
         <h4>{resData.data.lastMileTravelString}</h4>
         <h4>{resData.data.costForTwoString}</h4>
         
      </div>
      
    );
 };
 export default RestaurantCard;