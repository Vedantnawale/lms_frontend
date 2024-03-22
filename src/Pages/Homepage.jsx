import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import HomePageImage from "../assets/Images/homePageMainImage.png"

const Homepage = () => {
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen ml-3">
        <div className="w-1/2">
          <h1 className="text-5xl font-semibold text-white">
            Find the Best <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200 mt-4">
            We have a large library of courses taught by highly skilled and qualified faculties at a very affordable price.
          </p>

          <div className="space-x-6 mt-4">

            <Link to="/courses">
                <button className="bg-yellow-500 text-white px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out">
                    Explore Courses
                </button>
            </Link>

            <Link to="/courses">
                <button className="border border-yellow-500 text-white px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out">
                    Contact Us
                </button>
            </Link>
          </div>
        </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={HomePageImage} alt="homepage image" />
          </div>
      </div>
    </HomeLayout>
  );
};

export default Homepage;
