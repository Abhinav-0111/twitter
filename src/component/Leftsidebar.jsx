import React, { useContext, useState } from "react";
import ico from "../assets/img/twwiter.png";
import js from "../assets/img/javascript.png";
import { option } from "../constant/Option";
import ContextApi from "../context/ContextApi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Leftsidebar = () => {
    const { categories, handleCategories } = useContext(ContextApi);
    const navigate = useNavigate();
    // const [optionlink, setoptionlink] = useState("/");

    // const clickHandle = (name) => {
    //     if (
    //         name == "Explore" ||
    //         name == "Notification" ||
    //         name == "Bookmarks" ||
    //         name == "Logout"
    //     ) {
    //         return false;
    //     } else {
    //         setoptionlink(name);
    //     }
    // };
    const linkHandle = (name) => {
        if (name === "More" || name === "Logout") {
            return false;
        }
        if (name === "Home") {
            navigate("/");
        } else {
            navigate(name);
        }
    };
    return (
        <>
            <div className="flex flex-col pr-[30px] pt-4">
                <div className="flex">
                    <img
                        src={ico}
                        alt="img"
                        className="w-[40px] cursor-pointer"
                    />
                </div>
                <div className="flex flex-col mt-[20px]">
                    {option.map((item) => {
                        return (
                            <>
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleCategories(item.name);
                                        linkHandle(item.name);
                                        // clickHandle(categories);
                                    }}
                                    className={`flex font-semibold w-full items-center mb-[10px] cursor-pointer hover:bg-[#181818] rounded-3xl py-2 ${
                                        categories === item.name
                                            ? "bg-[#181818] font-bold"
                                            : ""
                                    }`}
                                >
                                    <span className="ml-3 text-[#E7E9EA]">
                                        {item.icon}
                                    </span>
                                    <span className="font-sans ml-4 text-white text-[20px]">
                                        {item.name}
                                    </span>
                                </div>
                            </>
                        );
                    })}
                </div>
                <button className="w-full bg-blue-500 text-white py-4 rounded-full font-sans font-bold mt-2">
                    Post
                </button>
                <Link to={"/profile"}>
                    <div className="flex items-center mt-[30px]">
                        <div className="flex rounded-full bg-black overflow-hidden h-10 w-10">
                            <img
                                src={js}
                                alt="img"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col ml-3">
                            <span className="font-bold text-white text-[15px]">
                                Abhinav
                            </span>
                            <span className="font-normal text-gray-700 text-[15px]">
                                àbhi@gmail.com
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Leftsidebar;
