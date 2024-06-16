import React, { useState } from "react";
import js from "../assets/img/javascript.png";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiEqualizerLine } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const Post = () => {
    const [like, setlike] = useState(false);
    const [number, setnumber] = useState(145);

    return (
        <>
            <div className="flex flex-col border-b border-[#181818] p-3 ">
                <div className="flex w-full">
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-full overflow-hidden h-10 w-10">
                            <img
                                src={js}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3">
                        <div className="flex items-center relative">
                            <p className="font-bold text-[15px] text-white">
                                Abhinav Kaushik
                            </p>
                            <p className="ml-2 text-[15px] font-semibold text-[#65696D]">
                                abhi@gmail.com
                            </p>
                            &nbsp;
                            <p className="absolute top-[-4px] font-bold text-[#65696D] left-[243px]">
                                .
                            </p>
                            &nbsp;
                            <span className="text-[15px] font-semibold text-[#65696D]">
                                3h
                            </span>
                        </div>
                        <div className="flex w-full">
                            <p className="text-[15px] font-semibold text-white">
                                Had an excellent meeting with my friend
                                President @EmmanuelMacron . This is our fourth
                                meeting in one year, indicating the priority we
                                accord to strong India-French ties. Our talks
                                covered numerous subjects such as defence,
                                security, technology, AI, Blue Economy and more.
                                We also
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-[500px] overflow-hidden mt-3 py-[20px] px-[50px] border border-[#181818] rounded-3xl">
                    <img
                        src={js}
                        alt="img"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex items-center justify-between px-[50px] mt-3">
                    <div
                        onClick={() => {
                            setlike(!like);
                        }}
                        className="flex items-center cursor-pointer"
                    >
                        {like ? (
                            <>
                                <div
                                    className="flex group items-center"
                                    onClick={() => {
                                        setnumber(number - 1);
                                    }}
                                >
                                    <span className="flex items-center justify-center text-pink-800 h-9 w-9 overflow-hidden group-hover:bg-[#200914] group-hover:text-pink-800 cursor-pointer rounded-full">
                                        <FaHeart size={19} />
                                    </span>
                                    <p className="text-pink-800 group-hover:text-pink-800 text-[18px] ml-1 font-semibold">
                                        {number}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="flex group items-center"
                                    onClick={() => {
                                        setnumber(number + 1);
                                    }}
                                >
                                    <span className="flex items-center justify-center text-gray-500 h-9 w-9 overflow-hidden group-hover:bg-[#200914] group-hover:text-pink-800 cursor-pointer rounded-full">
                                        <FaRegHeart size={19} />
                                    </span>
                                    <p className="text-gray-500 group-hover:text-pink-800 text-[18px] ml-1">
                                        {number}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex group items-center cursor-pointer">
                        <span className="flex items-center justify-center text-gray-500 h-9 w-9 overflow-hidden group-hover:bg-[#031018] group-hover:text-blue-500 cursor-pointer rounded-full">
                            <FaRegComment size={19} />
                        </span>
                        <p className="text-gray-500 group-hover:text-blue-500 text-[18px] ml-1">
                            21
                        </p>
                    </div>
                    <div className="flex group items-center cursor-pointer">
                        <span className="flex items-center justify-center text-gray-500 h-9 w-9 overflow-hidden group-hover:bg-[#031018] group-hover:text-blue-500 cursor-pointer rounded-full">
                            <RiEqualizerLine size={19} />
                        </span>
                        <p className="text-gray-500 group-hover:text-blue-500 text-[18px] ml-1">
                            21
                        </p>
                    </div>
                    <div className="flex group items-center cursor-pointer">
                        <span className="flex items-center justify-center text-gray-500 h-9 w-9 overflow-hidden group-hover:bg-[#071A14] group-hover:text-green-700 cursor-pointer rounded-full">
                            <GrDownload size={19} />
                        </span>
                        <p className="text-gray-500 group-hover:text-green-700 text-[18px] ml-1">
                            21
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
