import React from 'react'

function Login() {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div className="items-center justify-items-center  mb-100" style={{ position: "absolute", top: 50, left: 720, width: "150%", zIndex: 9999 }}>
        <img src="data:image/png;base64,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" alt="EduConnect" className="w-17 h-20 mr-2 " />
      </div>

      <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border justify-center">
        <div
          class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
          <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Sign In
          </h3>
        </div>
        <div class="flex flex-col gap-4 p-6">
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" " />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" " />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          <div class="-ml-2.5">
            <div class="inline-flex items-center">
              <label htmlFor="checkbox" class="relative flex items-center p-3 rounded-full cursor-pointer">
                <input type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="checkbox" />
                <span
                  class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <button
            class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Sign In
          </button>
          <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Don't have an account?
            <a href="/signup"
              class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login