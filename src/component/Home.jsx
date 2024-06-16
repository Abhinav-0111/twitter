import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home flex px-[130px] bg-black">
                <Leftsidebar />
                <Outlet />
                <Rightsidebar />
            </div>
        </>
    );
};

export default Home;
