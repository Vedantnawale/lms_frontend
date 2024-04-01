import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLayout from '../../Layouts/HomeLayout';
import { useSelector } from 'react-redux';


const CourseDescription = () => {
  // const locator = useLocation();
  const { state } = useLocation();  // ya warun aaplyale purn info bhette

  const { role, data } = useSelector((state) => state.auth); // ya warun aapan user jo login jhala aahe tycha role kadhto


  return (
    <HomeLayout>
      <div className='min-h[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white'>
        <div className='grid grid-cols-2 gap-10 py-10 relative'>
          <div className='space-y-5'>
            <img
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
              className='w-full h-64' />

            <div className='space-y-4'>

              <div className='flex flex-col items-center justify-between text-xl'>
                <p className='font-semibold'>
                  <span className='text-yellow-500 font-bold'>
                    Total Lectures : {" "}
                  </span>
                  {state?.numberOfLectures}
                </p>

                <p className='font-semibold'>
                  <span className='text-yellow-500 font-bold'>
                    Instructor : {" "}
                  </span>
                  {state?.createdBy}
                </p>

              </div>
              {
                role === "ADMIN" || data?.subscription?.status === "ACTIVE" ? (
                  <button className='bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300'>
                    Watch Lectures
                  </button>
                ) : (
                  <button className='bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300'>
                    Subscribe
                  </button>
                )
              }

            </div>

          </div>

          <div className='space-y-2 text-xl text-justify'>
            <h1 className='tetx-3xl font-bold text-yellow-500 mb-5 text-center'>
              {state?.title}
            </h1>
            <p className=' text-yellow-500'>Course Description: </p>
              {state?.description}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default CourseDescription