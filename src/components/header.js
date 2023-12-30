import { useState } from "react";
//Link to - for the page to not reload giving user a good experience 
//SPA Single page application 
import { Link } from "react-router-dom";
import useOnline from "./useOnline";

export const Title = ()=>{
    return <img className = "w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWtjWc8F5lxZchv7LoVJPxFsmInvBFh97vNTuuILuktiSrngMEW-4poRXlN2MXL9CalI" alt="" />
}

const HeaderComponent = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between items-center">   
        <Title />
        <div className="flex font-semibold">
            <ul className="flex align-middle">
                <li className="p-2 mx-2">{(isOnline?"online":"offline")}</li>
                <li className="p-2 mx-2"><Link to="/">Home</Link></li>
                <li className="p-2 mx-2"><Link to="/about">About us</Link></li>
                <li className="p-2 mx-2"><Link to="/about/profile">About Profile</Link></li>
                <li className="p-2 mx-2"><Link to="/instamart">InstaMart</Link></li>
                <li className="p-2 mx-2">dnt</li>
            </ul>
        </div>
    </div>
  )
};

export default HeaderComponent;