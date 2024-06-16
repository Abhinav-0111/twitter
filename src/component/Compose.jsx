import React from "react";
import js from "../assets/img/javascript.png";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineGif } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";

const Compose = () => {
    return (
        <>
            <div className="flex p-3 flex-col mt-1 border-b border-[#181818]">
                <div className="flex items-center w-full">
                    <div className="flex">
                        <div className="flex rounded-full overflow-hidden h-10 w-10">
                            <img
                                src={js}
                                alt=""
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="What is happening?!"
                        className="w-full text-white bg-transparent outline-none ml-3 placeholder:text-[21px] placeholder:text-[placeholder:text-[#181818]"
                    />
                </div>
                <div className="flex items-center justify-between mt-4 pl-[35px]">
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center overflow-hidden h-10 w-10 rounded-full hover:bg-[#031018] cursor-pointer text-blue-500">
                            <MdInsertPhoto size={21} />
                        </div>
                        <div className="flex items-center justify-center overflow-hidden h-10 w-10 rounded-full hover:bg-[#031018] cursor-pointer text-blue-500">
                            <MdOutlineGif size={21} />
                        </div>
                        <div className="flex items-center justify-center overflow-hidden h-10 w-10 rounded-full hover:bg-[#031018] cursor-pointer text-blue-500">
                            <FaRegFaceSmile size={21} />
                        </div>
                        <div className="flex items-center justify-center overflow-hidden h-10 w-10 rounded-full hover:bg-[#031018] cursor-pointer text-blue-500">
                            <FaCalendarCheck size={21} />
                        </div>
                        <div className="flex items-center justify-center overflow-hidden h-10 w-10 rounded-full hover:bg-[#031018] cursor-pointer text-blue-500">
                            <IoLocationSharp size={21} />
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-blue-500 py-2 px-5 text-white font-bold rounded-3xl">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Compose;
