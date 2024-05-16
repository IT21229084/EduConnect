import React, { useEffect, useState } from 'react'
// import axios from "../../util/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CourseDetailModel from './CourseDetailModel';

function PendingCourses() {
  // const [pendingCourses, setPendingCourses] = useState([])
  const [open, setOpen] = useState(false)

  const pendingCourses = [
    {
      id: 1,
      title: "Course 1",
      instructor: "John Doe",
      duration: "2 weeks",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://example.com/course1.jpg"
    },
    {
      id: 2,
      title: "Course 2",
      instructor: "Jane Smith",
      duration: "4 weeks",
      price: "$80",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://example.com/course2.jpg"
    },
    // Add more courses as needed
  ];

  useEffect(() => {
    getAllPendingCourses()
  }, []);

  const getAllPendingCourses = async () => {

    try {
      const res = await axios.get('course//course/false')
      console.log(res.data)
      setPendingCourses(res.data)
    } catch (error) {
      console.log(error)
    }


  }

  const onApprove = async (id) => {

    const courseId = id
    const payload = {
      authorized: true
    }

    try {
      const res = await axios.patch(`course//course/${courseId}`, payload)

      if (res.status === 201) {

        setPendingCourses((prevPendingCourses) => {
          getAllPendingCourses()
          return prevPendingCourses
        })

        toast("Course approved successfully!")
      } else {
        console.log("GetAllPendingCourses NotRunning!")
      }

    } catch (error) {
      console.log(error)
    }
  }


  const onCancel = async (id) => {

    const courseId = id
    const payload = {
      authorized: false
    }

    try {
      const res = await axios.patch(`course//course/${courseId}`, payload)

      if (res.status === 201) {

        setPendingCourses((prevPendingCourses) => {
          getAllPendingCourses()
          return prevPendingCourses
        })

      } else {
        console.log("GetAllPendingCourses NotRunning!")
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className=' w-full h-full  '>
      <ToastContainer autoClose={3000} />
      <div className='flex flex-col items-center  '>
        <span className=' text-3xl font-bold my-5 text-[#575757]'> Pending Courses</span>
        <div className='p-2 w-[calc(30vw)] h-[68vh] bg-white rounded-2xl overflow-y-auto shadow'>
          {pendingCourses.map((item) => (
            <div className=' p-2 w-full h-fit flex flex-row justify-between items-center border-gray-500 border-2 rounded-lg mt-5 shadow-lg  hover:bg-gray-200' >
              <div className=' w-fit h-full  py-3 cursor-pointer' onClick={() => setOpen(true)}>
                <div className=' font-FuturaMdBd  font-semibold mx-2 text-[#575757] ' >{item.title}</div>
              </div>


              <div className=' flex font-FuturaMdBt text-md text-white items-center'>
                <span className=' px-5 py-2 border-green-500 border-2  cursor-pointer rounded-xl shadow hover:scale-105 text-[#575757] hover:text-white hover:bg-green-500 hover:border-0 ' onClick={() => onApprove(item._id)}>approve</span>
                <span className='p-1 m-2 cursor-pointer text-[#575757]' onClick={() => onCancel(item._id)}>&times; </span>
              </div>
              <CourseDetailModel open={open} onClose={() => setOpen(false)} course={item} approveHandler={() => onApprove(item._id)} />
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default PendingCourses