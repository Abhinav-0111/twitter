import { IoHomeOutline } from "react-icons/io5";
import { FiHash } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { MdForwardToInbox } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

export const option = [
    {
        id: 1,
        name: "Home",
        icon: <IoHomeOutline size={24} />,
    },
    {
        id: 2,
        name: "Explore",
        icon: <FiHash size={24} />,
        display: "none",
    },
    {
        id: 3,
        name: "Notification",
        icon: <MdOutlineNotifications size={24} />,
        display: "none",
    },
    {
        id: 3,
        name: "Messege",
        icon: <MdForwardToInbox size={24} />,
        display: "none",
    },
    {
        id: 4,
        name: "Profile",
        icon: <FaRegUser size={24} />,
    },
    {
        id: 5,
        name: "Bookmarks",
        icon: <FaRegBookmark size={24} />,
        display: "none",
    },
    {
        id: 5,
        name: "Communities",
        icon: <FaRegUser size={24} />,
        display: "none",
    },
    {
        id: 6,
        name: "Logout",
        icon: <ImSwitch size={24} />,
        display: "none",
    },
    {
        id: 7,
        name: "More",
        icon: <SlOptions size={24} />,
        display: "none",
    },
];
