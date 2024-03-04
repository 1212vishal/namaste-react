import React from "react";

class UserClass extends React.Component{
  

   constructor(props){
    super(props);

     this.state={

        userInfo : {
          name:"dummy",
        },

     };
     
   };
   
  async componentDidMount(){
        const data=await fetch("https://api.github.com/users/pulkit2910-bit");
        const json=await data.json();
        //console.log(json);
        this.setState({
            userInfo:json,
        });
   }
  
    render()
    {
         const {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
              <img src={avatar_url} alt="loading" />
             <h1>{name}</h1>
             <h1>{location}</h1>
         
             <h1>Email:Vkumar971660@gmail.com</h1>
             <h1>Pwc</h1> 
            </div>
        );
    }
}
  
export default UserClass;