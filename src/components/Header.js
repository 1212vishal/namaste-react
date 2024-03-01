import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{

  const [btnNameReact,setbtnNameReact]=useState("Login")

    return (
       <div className="header">
  
        <div className="Logo-cointainer">
          <img className="logo" src={LOGO_URL}  alt="not upload" />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            
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