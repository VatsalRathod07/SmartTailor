import Link from 'next/link'
import React from 'react'

const Collection = () => {
    return (
        <section className="products container px-5 sm:px-10 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-items-center">
                <div>
                    <div className="sm:max-w-lg flex flex-col gap-3 text-center sm:text-start items-center sm:items-start">
                        <h1 className="font-extrabold text-3xl sm:text-5xl uppercase">
                            Our Latest collections
                        </h1>
                        <p className="text-base font-DMSans text-neutral-500 w-[350px] sm:w-full">
                            Discover our new summer collection, designed to protect you from the elements and keep you comfortable all season long.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 justify-between gap-5 sm:gap-10">
                        <img src="https://i.pinimg.com/736x/4b/9e/08/4b9e08bc045ba6a947eaf21ea178a56d.jpg" alt="" className="w-[200px] h-[200px] sm:h-[200px] object-cover" />
                        <img src="https://i.pinimg.com/564x/1f/5e/dd/1f5edda1f8240dc3473dea2f51326229.jpg" alt="" className="w-[200px] h-[200px] sm:h-[200px] object-cover" />
                        <img src="https://i.pinimg.com/564x/d8/3e/66/d83e660451af51e1cba935b9d2d207e8.jpg" alt="" className="w-[200px] h-[200px] sm:h-[200px] object-cover" />
                        <img src="https://i.pinimg.com/564x/93/59/30/9359304376320fb1dc49b6a62d584c39.jpg" alt="" className="w-[200px] h-[200px] sm:h-[200px] object-cover" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Collection