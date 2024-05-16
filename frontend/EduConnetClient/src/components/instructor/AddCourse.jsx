import React from 'react'
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Checkbox, Divider } from "antd";
import { Form, Input, Radio } from "antd";
import axios from "axios";
// import axios from "../../util/AxiosInstance";
// import uploadFileToFirebase from "../../util/UploadFilesToFIreBase";
import Swal from "sweetalert2";
import AdminNavbar from '../Admin/AdminNavbar';
const { TextArea } = Input;
const defaultCheckedList = [""];
function AddCourse() {

    const [courseInfo, setCourseInfo] = useState({
        title: '',
        description: '',
        instructor: '',
        duration: 0,
        Image: '',
        price: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseInfo({ ...courseInfo, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can send the courseInfo to your backend API to create a new course
    //     console.log(courseInfo);
    //     // Clear the form after submission
    //     setCourseInfo({
    //         title: '',
    //         description: '',
    //         instructor: '',
    //         duration: 0,
    //         image: '',
    //         price: 0
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/course', courseInfo);
            console.log(response.data); // Log the response from the server
            // Clear the form after successful submission
            setCourseInfo({
                title: '',
                description: '',
                instructor: '',
                duration: 0,
                Image: '',
                price: 0
            });
        } catch (error) {
            console.error('Failed to create course:', error.message);
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input type="text" name="title" value={courseInfo.title} onChange={handleChange} placeholder="Title" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <textarea name="description" value={courseInfo.description} onChange={handleChange} placeholder="Description" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="instructor" value={courseInfo.instructor} onChange={handleChange} placeholder="Instructor" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="number" name="duration" value={courseInfo.duration} onChange={handleChange} placeholder="Duration (in hours)" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="Image" value={courseInfo.Image} onChange={handleChange} placeholder="Image URL" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="number" name="price" value={courseInfo.price} onChange={handleChange} placeholder="Price" required className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Course</button>
            </form>
        </div>
    )
}

export default AddCourse