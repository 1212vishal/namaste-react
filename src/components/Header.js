import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

  const [btnNameReact,setbtnNameReact]=useState("Login");

  

    return (
       <div className="header">
  
        <div className="Logo-cointainer">
          <img className="logo" src={LOGO_URL}  alt="not upload" />
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            
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