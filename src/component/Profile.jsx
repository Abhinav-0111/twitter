import React from "react";
import js from "../assets/img/javascript.png";

const Profile = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div className="flex">
                        <div className="flex items-center justify-center h-9 w-9 rounded-full overflow-hidden">
                            <img
                                src={js}
                                alt="img"
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-2 w-full overflow-hidden">
                        <span className="font-bold text-[14px]">
                            Kriti Hooda
                        </span>
                        <p className="font-semibold text-gray-500 text-[14px] w-full truncate">
                            kritihooda@
                        </p>
                    </div>
                </div>
                <button className="text-[13px] font-semibold text-white bg-blue-500 px-2 py-1 rounded-full">
                    Follow
                </button>
            </div>
        </>
    );
};

export default Profile;
