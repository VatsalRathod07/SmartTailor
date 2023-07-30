import Link from 'next/link';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="home relative">
      <div className="flex flex-col gap-10">
        <img
          src="https://images.unsplash.com/photo-1631515998048-8c5a1df64114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-screen h-screen object-cover bg-no-repeat"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
          <p className="text-OffWhite text-base sm:text-xl font-Raleway font-semibold uppercase [word-spacing:2px]">
            Welcome To The Smart Tailor
          </p>
          <p className="text-OffWhite font-DMSans text-[24px] sm:text-5xl font-light sm:leading-[60px] w-[370px] sm:w-[650px]">
            Let's Stitch Your Style to Perfection at Our Tailoring Shop!
          </p>
          <Link
            href="/products"
            className="text-lg text-black bg-OffWhite border-none px-5 py-1"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
