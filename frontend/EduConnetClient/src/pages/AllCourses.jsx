import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
function AllCourses() {
  const [active, setActive] = React.useState(1);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint using Axios
    axios.get('http://localhost:8000/course/guest-routes')
      .then(response => {
        console.log('Axios response:', response);
        setCourses(response.data.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  console.log(courses)



  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  // useEffect(() => {
  //   const fetchCourseDetails = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/course/guest-routes');
  //       setCourseDetails(response.data);
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching course details:', error.message);
  //     }
  //   };

  //   fetchCourseDetails();
  // }, []);
  return (
    <div>
      <form className="max-w-md mx-auto mt-10 place-content-end">
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search courses,Instructors..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      <div>
        <section class="py-20">
          <h1 class="ml-20 pl-20 font-sans text-4xl font-bold text-gray-900">All Courses</h1>
          <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">



            {/* <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="#">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg" alt="Hotel Photo" />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.0</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">Intro to Entrepreneurship: Get started as an Entrepreneur</h2>
                  <p class="text-slate-400 mt-1 text-sm">Master the concepts and coming up with great business ideas</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$140</span>
                      <span class="text-slate-400 text-sm">Advance Level</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article> */}
            
              {courses.map(course => (
                <article key={course._id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                  <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img src={course.Image} alt="Course Photo" />
                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-slate-400 ml-1 text-sm">{course.rating}</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">{course.title}</h2>
                      <p className="text-slate-400 mt-1 text-sm">{course.description}</p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-blue-500">${course.price}</span>
                          <span className="text-slate-400 text-sm">{course.level}</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/coursedetails/${course._id}`}>
                      <Button type="primary">Enroll</Button>
                    </Link>
                  </a>
                </article>
              ))}
            







          </div>
        </section>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-10 bg-gray-500 ">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
        >
          Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>



    </div>
  )
}

export default AllCourses