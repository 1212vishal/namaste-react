import { useRouteError } from "react-router-dom";


const Error =()=>{
    const err=useRouteError();

    return (
        <div>
            <h1> 404 Page </h1>
            <h2> This is my Error Page</h2>
            <h2>{err.status}</h2>
        </div>
    )
};

export default Error;