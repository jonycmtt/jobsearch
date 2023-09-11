import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-2xl text-blueColor">
            <strong>Job</strong>Search</h1>
      </div>
      <ul className="flex menu flex-col sm:flex-row gap-8">
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Jobs
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Companies
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            About
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Contact
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Blog
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Login
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
            Register
        </li>
      </ul>
    </div>
  )
}

export default Navbar
