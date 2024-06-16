import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ContextApi from "../context/ContextApi";

const ProfileHeader = () => {
    const navigate = useNavigate();
    const { setcategories } = useContext(ContextApi);
    const handlefun = () => {
        navigate("/");
        setcategories("Home");
    };
    return (
        <>
            <div className="flex items-center w-full px-2 py-1">
                <span
                    onClick={() => handlefun()}
                    className="flex items-center justify-center h-10 w-10 hover:bg-[#181818] rounded-full overflow-hidden"
                >
                    <FaArrowLeft />
                </span>

                <div className="flex flex-col ml-5 cursor-pointer">
                    <h3 className="font-sans text-[19px] font-bold">
                        Abhinav Kaushik
                    </h3>
                    <p className="text-[14px] text-gray-600">0 posts</p>
                </div>
            </div>
        </>
    );
};

export default ProfileHeader;
