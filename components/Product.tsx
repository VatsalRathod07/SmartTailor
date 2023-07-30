import Link from 'next/link';
import React from 'react';
import ProductsCard from './ProductCard';

const Product = () => {

    return (
        <section className="products container px-5 sm:px-10 py-16">
            <div className="products_content items-center flex flex-col justify-between gap-[50px]">
                <div className="items-center flex flex-col gap-2">
                    <h4 className="text-center font-extrabold text-3xl sm:text-5xl uppercase">NEW ARRIVALS</h4>
                    <p className="text-base font-DMSans text-center text-neutral-500 w-[350px] sm:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro tenetur, earum doloremque nobis ad atque. Nemo quia tempora vero.</p>
                </div>
                <ProductsCard/>

                <Link href="/products/" className="load-more_btn text-center bg-black px-3 py-2 w-50 text-OffWhite font-medium cursor-pointer">
                    View all products
                </Link>
            </div>
        </section>
    );
};

export default Product;