'use client'
import { useState } from 'react'
import Notice from './Notice'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Notice />

      <nav className="bg-gray-600 px-4 py-3 mt-8 md:mt-9 shadow-md rounded-b-lg">
        <div className="flex items-center justify-between md:justify-center">

          
          <div className="text-white font-bold text-lg md:hidden">
            MENU
          </div>

        
          <button
            className="md:hidden text-white text-2xl"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        
          <ul className="hidden md:flex space-x-6">
            <NavSelect title="Home" items={['Student Corner', 'Contact Us']} />
            <NavSelect title="Course Content" items={['M1 C1', 'M2 C2', 'M3 C3']} />
            <NavSelect title="Chapter Wise MCQ" items={['MCQ 1', 'MCQ 2']} />
            <NavSelect title="Model Paper" items={['M1', 'M2', 'M3']} />
            <NavSelect
              title="Assignment Paper"
              items={['Assignment 1', 'Assignment 2', 'Assignment 3']}
            />
          </ul>
        </div>

      
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-gray-300 rounded-lg p-4 space-y-3">
            <Mobile title="Home" />
            <Mobile title="Course Content" />
            <Mobile title="Chapter Wise MCQ" />
            <Mobile title="Model Paper" />
            <Mobile title="Assignment Paper" />
          </div>
        </div>
      </nav>
    </>
  )
}


function NavSelect({ title, items }) {
  return (
    <select className="bg-transparent text-white font-bold outline-none cursor-pointer">
      <option className="text-blue-900 font-bold">{title}</option>
      {items.map((item, index) => (
        <option key={index} className="text-blue-900 font-bold">
          {item}
        </option>
      ))}
    </select>
  )
}

/* Mobile Menu Item */
function Mobile({ title }) {
  return (
    <div className="bg-white text-blue-900 font-bold p-3 rounded-md text-center active:scale-95 transition">
      {title}
    </div>
  )
}
