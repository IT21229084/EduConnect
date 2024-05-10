import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "../index.css";
import App from "../App";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx"
import SignUp from "../pages/SignUp.jsx";
import AllCourses from "../pages/AllCourses.jsx";
const router = createBrowserRouter([
    {
        //main path
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/allcourse",
                element: <AllCourses />
            },
            // {
            //     path: "/postJob",
            //     element: <CreateJob />
            // },
            // {
            //     path: "/myJob",
            //     element: <MyJobs />
            // },
            // {
            //     path: "/salary",
            //     element: <SalaryPage />
            // },
            // {
            //     path: "/editJob/:id",
            //     element: <UpdateJob />,
            //     loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            // }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    // {
    //     path:"/job/:id",
    //     element:<JobDetails/>
    // }
]);

export default router
