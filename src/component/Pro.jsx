import React from "react";
import ProfileHeader from "./ProfileHeader";
import js from "../assets/img/javascript.png";

const Pro = () => {
    return (
        <>
            <div className="flex flex-col h-[100vh] overflow-hidden border border-[#181818]">
                <ProfileHeader />
                <div className="flex w-full h-[210px] overflow-hidden bg-gray-800">
                    {/* <img
                        src={js}
                        alt="img"
                        className="w-full h-full object-cover"
                    /> */}
                </div>
            </div>
        </>
    );
};

export default Pro;
