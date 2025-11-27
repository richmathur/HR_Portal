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
        <h3> Welcome {name} </h3>
       
    </div>
);

}
export default Welcome;