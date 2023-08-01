import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="home relative">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1603570707325-5d4d281ca924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNld2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="sm:w-[50%] w-full h-full sm:h-screen object-cover bg-no-repeat hidden sm:block"
        />
        {/* Hidden on smaller screens */}
        <img
          src="https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFicmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" // Replace with the URL of your second image
          alt=""
          className="object-cover bg-no-repeat sm:w-[50%] w-full h-full sm:h-screen" // Add 'hidden sm:block' class
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-30 sm:opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
          <p className="text-OffWhite text-base sm:text-xl font-Raleway font-semibold uppercase [word-spacing:2px]">
            Welcome To The Smart Tailor
          </p>
          <p className="text-OffWhite font-DMSans text-[24px] sm:text-4xl font-light sm:leading-[60px] w-[370px] sm:w-[550px]">
            Lets Stitch Your Style to Perfection at Our Tailoring Shop!
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
