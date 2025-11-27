import React, { use, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../service/AuthService.ts";

const Welcome=()=>{
const name=useParams().name;
const leaveStatus=useParams().leaveStatus;
const navigate=useNavigate();
const handleLogout=()=>{
authService.logOut();
    navigate("/");
}
return(
    <div className="container-fluid my-5">
        <h2> Welcome {name} </h2>
       
    </div>
);

}
export default Welcome;