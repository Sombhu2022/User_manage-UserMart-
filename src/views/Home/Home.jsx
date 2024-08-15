import React from 'react';
import { Link } from 'react-router-dom';

import { blogData } from '../../assets/data/blogData';

import BlogCard from '../../components/BlogCard';
import AboutUs from './AboutUs';
import WellcomeSection from './WellcomeSection';
import { useSelector } from 'react-redux';

function Home() {
  const { isAuthenticated } = useSelector(state=>state.user)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <WellcomeSection/>

      {/* About Section */}
      <AboutUs/>

      {/* Blog Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Blogs */}

          {blogData?.map(blog => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}

        </div>
      </section>

      {/* Continue Button */}
      <div className="container mx-auto py-12 px-6 md:px-12 text-center w-[200px]">
        <Link to={isAuthenticated?"/dashboard":"/register"} >
          <button 
          className="custom-button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
