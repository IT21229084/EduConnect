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
import CourseDetails from "../pages/CourseDetails.jsx";
import MyLearning from "../pages/MyLearning.jsx";
import AdminHome from "../pages/Admin/AdminHome.jsx";
import AdminProfile from "../pages/Admin/AdminProfile.jsx";
import AddUser from "../components/Admin/AddUser.jsx";
import CourseDetailsadmin from "../components/Admin/CourseDetailsadmin.jsx";
import AddCourse from "../components/instructor/AddCourse.jsx";
import InstructorProfile from "../pages/Instructor/InstructorProfile.jsx";
import Entrollments from "../pages/Instructor/Entrollments.jsx";
import Sucess from "../pages/Sucess.jsx";
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
            {
                path: "/coursedetails/:id",
                element: <CourseDetails />
            },
            {
                path: "/myLearning",
                element: <MyLearning />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: "/success",
        element: <Sucess />
    },
    {
        path: "/adminHome",
        element: <AdminHome />
    },
    {
        path: "/adminProfile",
        element: <AdminProfile />
    },

    {
        path: "/addusers",
        element: <AddUser />
    },

    {
        path: "/CourseDetailsadmin",
        element: <CourseDetailsadmin />
    },
    {
        path: "/addCourse",
        element: <AddCourse />
    },
    {
        path: "/entroll",
        element: <Entrollments />
    },
    {
        path: "/instructorProfile",
        element: <InstructorProfile />
    },
]);

export default router
