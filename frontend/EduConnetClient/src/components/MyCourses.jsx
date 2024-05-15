import React from 'react'
import {
  Button,
} from "@material-tailwind/react";
function MyCourses() {
  return (
    <div>
      <section class="py-20">
        <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg" alt="Hotel Photo" />
                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                </div>
              </div>
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">Intro to Entrepreneurship: Get started as an Entrepreneur</h2>
                <p class="text-slate-400 mt-1 text-sm">Master the concepts and coming up with great business ideas</p>
                <div class="mt-3 flex items-end justify-between">
                </div>
              </div>
            </a>
            <div className='ml-60'>
              <a href="#">
                <Button className="text-white bg-blue-500" variant="blue" size="sm">
                  Click To Learn
                </Button>

              </a>
            </div>
          </article>
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg" alt="Hotel Photo" />
                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                </div>
              </div>
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">Intro to Entrepreneurship: Get started as an Entrepreneur</h2>
                <p class="text-slate-400 mt-1 text-sm">Master the concepts and coming up with great business ideas</p>
                <div class="mt-3 flex items-end justify-between">
                </div>
              </div>
            </a>
            <div className='ml-60'>
              <a href="#">
                <Button className="text-white bg-blue-500" variant="blue" size="sm">
                  Click To Learn
                </Button>

              </a>
            </div>
          </article>
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg" alt="Hotel Photo" />
                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                </div>
              </div>
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">Intro to Entrepreneurship: Get started as an Entrepreneur</h2>
                <p class="text-slate-400 mt-1 text-sm">Master the concepts and coming up with great business ideas</p>
                <div class="mt-3 flex items-end justify-between">
                </div>
              </div>
            </a>
            <div className='ml-60'>
              <a href="#">
                <Button className="text-white bg-blue-500" variant="blue" size="sm">
                  Click To Learn
                </Button>

              </a>
            </div>
          </article>
        </div>
      </section>
      
    </div>


  )
}

export default MyCourses