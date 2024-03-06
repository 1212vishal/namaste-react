import { CDN_URL } from "../utils/constants";


const RestaurantCard=({resData})=>{

    return (
      <div className="justify-center m-4 p-4 w-96 rounded-xl bg-gray-300 hover:bg-gray-500">
           <img className="m-2 p-2 rounded-xl"
        src={ CDN_URL
           +
          resData.info?.cloudinaryImageId
        }></img>
         <h3 className="font-bold m-4 text-lg">{resData.info?.name}</h3>
         <h4 className=" p-4">{resData.info?.cuisines}</h4>
         <h4 className=" p-4">{resData.info?.cuisines}</h4>
         <h4 className=" p-4">{resData.info?.avgRating}</h4>
         <h4 className=" p-4">{resData.info?.area}</h4>
         <h4 className=" p-4">{resData.info?.sla?.deliveryTime}   Mins</h4>
         <h4 className=" p-4">{resData.info?.costForTwo}</h4>
         
      </div>
      
    );
 };


 export default RestaurantCard;