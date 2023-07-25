import Link from 'next/link'
import React from 'react'

const Collection = () => {
    return (
        <section className="products container px-5 sm:px-10 py-20">
            <div className="products_content items-center flex flex-col justify-between gap-[50px]">
                <div className="items-center flex flex-col gap-3">
                    <h1 className="text-center font-extrabold text-3xl sm:text-5xl uppercase">Featured Collection</h1>
                    <p className="text-sm font-Playfair text-center text-SlateGray w-[330px] sm:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro tenetur, earum doloremque nobis ad atque. Nemo quia tempora vero.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 justify-between gap-5 sm:gap-10">
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/736x/4b/9e/08/4b9e08bc045ba6a947eaf21ea178a56d.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/b5/21/c8/b521c8dc26cb0b4cabedb12a76216ab5.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/1f/5e/dd/1f5edda1f8240dc3473dea2f51326229.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/93/59/30/9359304376320fb1dc49b6a62d584c39.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/d8/3e/66/d83e660451af51e1cba935b9d2d207e8.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                    <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img src="https://i.pinimg.com/564x/c8/96/ad/c896ad6dc28a942dd76d2713f0c85cc7.jpg" alt="" className="w-[300px] h-[200px] sm:h-[300px] object-cover" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Collection