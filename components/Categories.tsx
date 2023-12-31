import React from 'react'

const Categories = () => {
    return (
        <section className="products container px-5 pt-20">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-center font-DMSans">
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-around text-center">
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/shirt.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Shirt</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/pant.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Pent</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/suit.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Suit</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-around text-center">
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/Indowestern.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Indo-Western</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/trouser.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Trouser</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-lg  font-semibold cursor-pointer'>
                        <img src="/img/blazer.png" alt="" className="hover:scale-110 transition duration-700 ease-in-out w-11 " />
                        <p className="">Blazer</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Categories