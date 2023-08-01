"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

const Navbar = () => {
  // State to manage the visibility of the Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the Sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Add 'no-scroll' class to <html> when the sidebar is open
    if (isSidebarOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    // Clean up the class when the component is unmounted
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <nav className={`nav p-4 py-3 bg-white  text-Charcoal ${isSidebarOpen ? 'sm:bg-white' : 'sm:bg-white'}`}>
      <div className="navbar_content w-full flex justify-between p-1 items-center">
        <Link href="/" className="navbar_logo text-lg sm:text-2xl font-medium text-Charcoal hover:text-black font-Playfair tracking-[.5px]">
          {/* Smart Tailor & Cloth */}
          <img src="./img/logo.png" alt="" className="h-7 object-cover"/>
        </Link>
        <div className="flex justify-between gap-5 list-none sm:hidden">
          <button
            className="text-secondary font-extrabold"
            onClick={toggleSidebar}
          >
            <HiMenu size={20} className="text-secondary" />
          </button>
        </div>
        <ul className={`hidden sm:flex sm:gap-5 sm:list-none ${isSidebarOpen ? 'bg-white bg-opacity-60' : 'bg-white'}`}>
          <li>
            <Link href="/" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={`${isSidebarOpen ? 'block' : 'hidden'
          } sm:hidden sm:flex sm:gap-5 sm:list-none bg-white p-4 absolute top-0 right-0 h-full w-screen backdrop-blur-lg z-10`}
      >
        <li className="flex justify-end">
          <button
            className="text-black text-base font-extrabold mb-4"
            onClick={closeSidebar}
          >
            <GrFormClose size={20} />
          </button>
        </li>
        <div className="flex flex-col justify-center gap-5 pt-[20%] items-center">
          <li>
            <Link href="/" className="text-base font-medium" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-base font-medium" onClick={closeSidebar}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-base  font-medium  hover:text-black" onClick={closeSidebar}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-base font-medium" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base font-medium" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
