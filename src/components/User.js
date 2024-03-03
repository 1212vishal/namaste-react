import { useState } from "react";
const User=({name})=>{

     const[count]=useState(0);
     const[count2]=useState(2);
    return (
        
            <div className="user-card">
                <h1>{count}</h1>
                <h1>{count2}</h1>
             <h1>{name}</h1>
             <h1>Email:Vkumar971660@gmail.com</h1>
             <h1>Pwc</h1>
            </div>
    )
}

export default User;