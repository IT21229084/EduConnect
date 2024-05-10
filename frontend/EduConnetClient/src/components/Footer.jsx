import React from 'react'

function Footer() {
  return (
   

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
            <div class="flex items-center">
            <img src="data:image/png;base64,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" alt="EduConnect" className="w-12 h-12 mr-4"/>
              <p className='text-white'>EduConnect</p>
          </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer