import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";
import Compose from "./Compose";
import Post from "./Post";

const Feed = () => {
    const { header, setheader } = useContext(ContextApi);
    return (
        <>
            <div className="flex flex-col h-[100vh] overflow-hidden border border-[#181818]">
                <div className="flex w-full">
                    <span
                        onClick={() => {
                            setheader(true);
                        }}
                        className={`w-[50%] bg-transparent text-center text-gray-500 font-medium font-sans py-[15px] cursor-pointer hover:bg-[#181818] ${
                            header
                                ? "border-b-[5px] border-blue-400 font-bold text-white"
                                : ""
                        }`}
                    >
                        For you
                    </span>
                    <span
                        onClick={() => {
                            setheader(false);
                        }}
                        className={`w-[50%] text-center font-sans font-medium py-[15px] cursor-pointer hover:bg-[#181818] text-gray-500 ${
                            header
                                ? ""
                                : "border-b-[5px] border-blue-400 font-bold text-white"
                        }`}
                    >
                        Following
                    </span>
                </div>
                <div className="flex flex-col overflow-y-auto ">
                    <Compose />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    );
};

export default Feed;
