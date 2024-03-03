import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props),
        console.log("parent constructor");
    }
    
    componentDidMount(){
        console.log("parent didmount");
    }

    
    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About Us</h1>
                <p1>My About Js Page</p1>
                
                <UserClass name={"vishal Yadav Class"}/>
            </div>
        )
    }
}


export default About;