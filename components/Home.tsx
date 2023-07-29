import Link from 'next/link';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="home relative">
      <div className="flex flex-col gap-10">
        {/* Conditional background images based on screen size */}
        <img
          src="/img/deskbg2.png"
          alt=""
          className="w-screen h-screen object-cover bg-no-repeat opacity-30 sm:opacity-60 md:opacity-30"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50 block sm:hidden"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
          <p className="text-lg font-Raleway font-medium uppercase text-Charcoal [word-spacing:2px]">
            Welcome To The Smart Tailor
          </p>
          <p className="text-Charcoal font-Playfair text-[24px] sm:text-5xl font-medium sm:leading-[60px] w-[370px] sm:w-[750px]">
            Let's Stitch Your Style to Perfection at Our Tailoring Shop!
          </p>
          <Link
            href="/products"
            className="text-lg text-OffWhite bg-black border-none px-5 py-1"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
