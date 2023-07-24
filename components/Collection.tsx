import Link from 'next/link'
import React from 'react'

const Collection = () => {
    return (
        <section className="products container px-5 sm:px-10 py-20">
            <div className="products_content items-center flex flex-col justify-between gap-[50px]">
                <div className="items-center flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-5xl font-extrabold ">Featured Collection</h1>
                    <p className="text-sm font-Playfair text-center text-SlateGray w-[330px] sm:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro tenetur, earum doloremque nobis ad atque. Nemo quia tempora vero.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 justify-between gap-5 sm:gap-10">
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/236x/14/67/54/1467540e9234176c33a95ea354115aae.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/236x/68/00/63/6800635806227be445489283156362e1.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/236x/77/c0/aa/77c0aa1b02c3ddc891bf4787d2384c5d.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/58/80/e9/5880e9d99239fe1cdbab52c631078be7.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/236x/15/f5/cf/15f5cfb96c7892744f7e6a266e7da088.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/236x/51/57/b3/5157b31fdd79a4346348a415f9f17903.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Collection