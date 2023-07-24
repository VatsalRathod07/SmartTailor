import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="home relative">
    <div className="flex flex-col gap-10">
        <img src="/img/bg.png" alt="" className="w-screen sm:w-full h-[300px] sm:h-[500px] object-cover bg-no-repeat" />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-20"></div> */}

        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
            <Link href="/products" className="text-lg text-Charcoal border-Charcoal border-[2px] transition ease-linear duration-700 px-5 py-1">
                Shop Now
            </Link>
        </div>
    </div>
</div>
  )
}

export default Banner