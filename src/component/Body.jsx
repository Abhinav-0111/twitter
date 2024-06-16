import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import Pro from "./Pro";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Feed />,
                },
                {
                    path: "/profile",
                    element: <Pro />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;
