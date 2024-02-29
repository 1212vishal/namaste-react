import { CDN_URL } from "../utils/constants";


const RestaurantCard=({resData})=>{

    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo"
        src={ CDN_URL
           +
          resData.info?.cloudinaryImageId
        }></img>
         <h3>{resData.info?.name}</h3>
         <h4>{resData.info?.cuisines}</h4>
         <h4>{resData.info?.avgRating}</h4>
         <h4>{resData.info?.area}</h4>
         <h4>{resData.info?.sla?.deliveryTime}   Mins</h4>
         <h4>{resData.info?.costForTwo}</h4>
         
      </div>
      
    );
 };


 export default RestaurantCard;