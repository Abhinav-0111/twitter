import React from "react";
import js from "../assets/img/javascript.png";
import Profile from "./Profile";

const List = () => {
    return (
        <>
            <div className="flex flex-col bg-black border border-[#181818] p-[15px] mt-[10px] rounded-3xl overflow-y-auto">
                <div className="flex font-bold text-[22px]">
                    <p>Who to follow</p>
                </div>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
        </>
    );
};

export default List;
