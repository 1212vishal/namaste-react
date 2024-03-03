import React from "react";

class UserClass extends React.Component{
  

   constructor(props){
    super(props);

     this.state={
        count:0,
        count2:1,

     };
     console.log("child componenet");
   }
   componentDidMount(){
    console.log("child did mount");
   }
    render()
    {
        const{count}=this.state;
        console.log("child render");
        return(
            <div className="user-card">

                <button onClick={()=>{
                   this.setState({
                     count:this.state.count+1,       
                   })
                }}>Count Increase</button>

             
             <h1>{count}</h1>
             <h1>{this.props.name}</h1>
             <h1>Email:Vkumar971660@gmail.com</h1>
             <h1>Pwc</h1> 
            </div>
        );
    }
}
  
export default UserClass;