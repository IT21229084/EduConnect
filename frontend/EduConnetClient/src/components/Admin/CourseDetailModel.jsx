import React from 'react'
import 'react-toastify/dist/ReactToastify.css'

export default function CourseDetailModel({ open, onClose, course, approveHandler }) {
    const handleApprove = async () => {
        approveHandler()
        onClose()
      
    }

    return (
        //Background 
        <div onClick={onClose} className={` absolute z-[999] inset-0 flex justify-center items-center ${open ? 'visible bg-black/50 ' : 'invisible'}`}>
            {/**Actual modal */}
           
            <div onClick={(e) => e.stopPropagation()} className={`bg-white p-5 items-start flex flex-row w-fit h-fit rounded-md shadow transition-all ${open ? 'opacity-100' : 'opacity-0'}`}>

                <div className=' flex w-full  flex-col h-fit items-center'>
                    <span className=' text-4xl '> {course.title} </span>
                    <img src={course.coverImage} className=' my-5 w-full h-[30vh]'/>
                    <div className=' font-FuturaMdBt w-full flex flex-row justify-start items-center'>
                        <span className=' text-2xl '>Description :&nbsp; </span>
                        <span> {course.description} </span>
                    </div>
                    <div className=' font-FuturaMdBt w-full flex flex-row justify-start items-center'>
                        <span className=' text-2xl '>Instructor : &nbsp; </span>
                        <span> {course.instructor}</span>
                    </div>
                    <div className=' font-FuturaMdBt w-full flex flex-row justify-start items-center'>
                        <span className=' text-2xl '>Duration : &nbsp; </span>
                        <span>{course.duration} Days</span>
                        
                    </div>
                    <div className=' font-FuturaMdBt w-full flex flex-row justify-start items-center'>
                        <span className=' text-2xl '>Price : &nbsp; </span>
                        <span>{course.price}$ </span>
                        
                    </div>
                    <div className=' mx-10 mb-10 w-[30vw] mt-10 h-10 items-center  flex justify-between'>
                        <span className=' px-10 py-2 border-green-500 border-2 text-[#575757] rounded-xl cursor-pointer font-semibold hover:scale-105 hover:text-white hover:bg-green-500 hover:border-0' onClick={() => handleApprove()}>Approve</span>
                        <span className=' px-10 py-2 border-red-500 border-2 text-[#575757] rounded-xl cursor-pointer font-semibold hover:scale-105 hover:text-white hover:bg-red-500 hover:border-0' onClick={() => onClose()}>Cancel</span>
                    </div>
                </div>
                <div className=' text-4xl cursor-pointer justify-center items-center flex text-[#575757]'>
                    <span onClick={onClose}>&times;</span>
                </div>
            </div>

        </div>
    )
}