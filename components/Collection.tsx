import Link from 'next/link'
import React from 'react'

const Collection = () => {
    return (
        <section className="products container px-5 sm:px-10 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                <div>
                    <div className="sm:max-w-lg flex flex-col gap-3 text-center sm:text-start items-center sm:items-start">
                        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-6xl">
                            Summer styles are finally here
                        </h1>
                        <p className="font-DMSans text-lg sm:text-xl text-neutral-600 w-[350px] sm:w-full">
                            Discover our new summer collection, designed to protect you from the elements and keep you comfortable all season long.
                        </p>

                        <a href="#" className="inline-block w-[300px]  bg-black px-8 py-3 text-center font-medium text-white">
                            Shop Collection
                        </a>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 justify-between gap-5 sm:gap-10">
                        <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/736x/4b/9e/08/4b9e08bc045ba6a947eaf21ea178a56d.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link>
                        {/* <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/564x/b5/21/c8/b521c8dc26cb0b4cabedb12a76216ab5.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link> */}
                        <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/564x/1f/5e/dd/1f5edda1f8240dc3473dea2f51326229.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link>
                        {/* <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/564x/93/59/30/9359304376320fb1dc49b6a62d584c39.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link> */}
                        <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/564x/d8/3e/66/d83e660451af51e1cba935b9d2d207e8.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link>
                        <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                            <img src="https://i.pinimg.com/564x/c8/96/ad/c896ad6dc28a942dd76d2713f0c85cc7.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Collection