import Header from "./Header";
import Body from "./Body";

import Contact from "./Contact";
import { createBrowserRouter,Outlet} from "react-router-dom";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

import { lazy, Suspense } from "react";


const Grocery=lazy(()=>import("./Grocery"));
const About=lazy(()=>import("./About"));

const AppLayout=()=>{
    return (
      <div className="app">
       <Header/>
       <Outlet/>
      </div>
    );
  };

  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
             path:"/",
             element:<Body/>
          },
          {
            path:"/about",
            element: (<Suspense fallback="Page is loading"><About/></Suspense> ),
          },
          {
            path:"/grocery",
            element: (<Suspense fallback="Page is loading"><Grocery/></Suspense> ),
          },
          {
          path:"/contact",
          element:<Contact/>
          },
          {
             path:"/restaurants/:resId", 
             element:<RestaurantMenu/>,
          },
      ],
        errorElement:<Error/>,
    },
    
])

 export default appRouter;