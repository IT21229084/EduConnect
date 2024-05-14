import React from 'react'

function UserProfile() {
  return (
    <div className=' flex flex-row bg-slate-100 w-full h-full'>
    <div className=' w-[33vw] ml-10 mb-10'>
    <div className=' flex flex-col mt-16 p-5 h-[68vh] justify-between bg-white rounded-lg shadow'>
      <div className='flex flex-col text-[#575757]'>
        <div className='flex justify-center items-center flex-col p-5 font-FuturaMdBt'>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg" className='w-28 h-28 rounded-full my-5' />
          <span className=' text-3xl font-bold'>Malith iroshan</span>
        </div>
        <div className=' flex flex-col justify-between'>
          <div className=' flex flex-col items-start'>
            <span className='text-lg'>My email </span>
            <span className=' text-sm'>malithtrh@gmaolclm</span>
          </div>
          <div className=' flex flex-col items-start mt-10'>
            <span className='text-lg'>My contact no </span>
            <span className='text-sm'>077303264</span>
          </div>
        </div>
      </div>
      <div className='flex place-self-end items-end'>
        <span className=' px-5 py-2 border-blue-500 border-2 rounded-2xl text-[#575757] font-semibold hover:scale-105 cursor-pointer hover:text-white hover:bg-blue-500 hover:border-0' onClick={() => setUpdateModel(true)}>update</span>
      </div>
      {/* <UserUpdateModel open ={updateModel} onClose={() =>toggleUpdateModel()} user={userData} /> */}

    </div>
    </div>

</div>
  )
}

export default UserProfile