'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

     
        <div>
          <h2 className="text-xl font-bold mb-4">NIELET Courses</h2>
          <p className="text-gray-300 text-sm">
            Your gateway to quality education and resources. Explore courses, assignments, model papers, and much more.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">MCQs</a></li>
            <li><a href="#" className="hover:text-white">Assignments</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

  
        <div>
          <h2 className="text-lg font-semibold mb-4">Popular Courses</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">IT Tools & Networks</a></li>
            <li><a href="#" className="hover:text-white">Computer Fundamentals</a></li>
            <li><a href="#" className="hover:text-white">Web Development Basics</a></li>
            <li><a href="#" className="hover:text-white">React Development</a></li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 text-sm">Email: 
            
          </p>
          <p className="text-gray-300 text-sm">Phone: </p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-900 text-center text-gray-400 text-sm py-4">
        © 2026 NIELET Courses. All Rights Reserved.
      </div>
    </footer>
  )
}
