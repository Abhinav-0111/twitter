import React, { useState } from "react";
import ContextApi from "./ContextApi";

const ContextState = (props) => {
    const [categories, setcategories] = useState("Home");
    const [header, setheader] = useState(true);

    const handleCategories = (item) => {
        if (item === "Logout" || item === "More") {
            return false;
        } else {
            setcategories(item);
        }
    };
    return (
        <>
            <ContextApi.Provider
                value={{
                    categories,
                    setcategories,
                    header,
                    handleCategories,
                    setheader,
                }}
            >
                {props.children}
            </ContextApi.Provider>
        </>
    );
};

export default ContextState;
