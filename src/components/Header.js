import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const [btnNameReact,setbtnNameReact]=useState("Login");

  const onlineStatus=useOnlineStatus();

    return (
       <div className="flex justify-between bg-pink-100 shadow-xl sm:bg-blue-300">
  
        <div className="logo-cointainer">
          
          <img className="w-56" src={LOGO_URL}  alt="not upload" />
        </div>
  
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">OnlineStatus:{onlineStatus?"GREEN":"RED"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/cart">Cart</Link></li>
            
            <button className="login" onClick={()=>{
              if(btnNameReact==="Login")
              setbtnNameReact("Logout")
              else
              setbtnNameReact("Login")
              
            }}>{btnNameReact}</button>

          </ul>
        </div>
  
       </div>
    );
  };
  
  export default Header;