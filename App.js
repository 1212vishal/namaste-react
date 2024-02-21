import React from "react";
import ReactDOM from "react-dom/client";



const Title=()=>(
  <h1 classname="heading" tabindex="5">
 
    Namaste React using j_s_x;
  </h1>
   
);


 const middle=(

    <h1 className="middle"> midlle elemet of our project</h1>
 );


//componenet composition

const HeadingComponent=()=> (
   <div id="cointainer">
    <Title/>
    {middle}
    <h1 className="heading1">Namaste React</h1>
   </div>
 
);



const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);