import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import List from "./List";

const Rightsidebar = () => {
    return (
        <>
            <div className="flex flex-col pl-[30px]">
                <div className="flex items-center bg-[#181818] rounded-full px-2 py-2 mt-1">
                    <IoSearchOutline
                        size={20}
                        className="text-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent w-full outline-none px-2 placeholder:text-gray-500"
                    />
                </div>
                <List />
            </div>
        </>
    );
};

export default Rightsidebar;
