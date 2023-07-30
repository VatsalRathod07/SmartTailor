"use client"
// import CartSection from '@/app/cart/page';
// import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';


const products = [
    {
        id: 1,
        name: 'blanket',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹609.00',
        image: 'https://cpimg.tistatic.com/07765791/b/4/Men-Unstitched-Check-Shirt-Fabric.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/2/2078',
        rating: '6',
    },
    {
        id: 2,
        name: 'win',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹894.00',
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2019/07/LSMONZASH72DKBLBGBRCHKHBTWJUN.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '11/8/2106',
        rating: '3',
    },
    {
        id: 3,
        name: 'fifth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹656.00',
        image: 'https://cpimg.tistatic.com/07765787/b/4/Cotton-Checks-Shirt-Fabric.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '4/27/2081',
        rating: '3',
    },
]

const productsImages = [
    {
        id: 1,
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2020/01/LSMZSH80DKBLWHSTRPPOXJAN-3.jpg',
    },
    {
        id: 2,
        image: 'https://assets.ajio.com/medias/sys_master/root/20220704/EUmO/62c30266f997dd03e2b7b5b7/-1117Wx1400H-469158843-navy-MODEL2.jpg',
    },
    {
        id: 3,
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2020/01/LSMZSH80DKBLWHSTRPPOXJAN-1-510x435.jpg',
    },
]


const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(productsImages[0].image);

    const handleImageChange = (newImage: React.SetStateAction<string>) => {
        setMainImage(newImage);
    };

    // const [cart, setCart] = useState([]); //cart logic

    // const addToCart = (product) => {
    //     const isProductInCart = cart.some((item) => item.id === product.id);

    //     if (!isProductInCart) {
    //         setCart([...cart, product]);
    //     } else {
    //         console.log('Product is already in the cart.');
    //     }
    // };

    const routes = [
        { label: <GoHome size={15}/>, path: '/' },
        { label: 'products', path: '/products' },
    ];
    return (
        <section className="products_detail pt-5 sm:pt-10 pb-5z sm:pb-12 px-2 sm:px-5 bg-light">
            <div className="product_content container p-5 sm:p-20 bg-OffWhite">
                <div className="products-details flex flex-col gap-[50px]">
                {/* <nav className="text-sm pb-4">
                    <Breadcrumbs routes={routes} />
                </nav> */}
                    <div className="grid grid-cols-1 sm:grid-cols-[48%_48%] gap-[4%]">
                        <div className="product-bg-img flex flex-col gap-[10px]">
                            <img src={mainImage} alt="Product Image" className="products_images w-screen sm:w-screen h-[500px] object-cover" />

                            <div className="products-small-images flex overflow-auto sm:overflow-hidden gap-2 cursor-pointer object-cover">
                                {productsImages.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt="Product Image"
                                        className="products_images w-[100px] h-[100px] object-cover hover:border-pale hover:border-[2px]"
                                        onClick={() => handleImageChange(product.image)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="font-semibold text-[20px] sm:text-2xl">Cotton White Striped Dark Blue</p>
                            <h4 className="text-xl font-DMSans font-medium text-black">₹1,499.00</h4>
                            <p className="max-w-[400px] font-DMSans text-sm text-[#353535] font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto culpa enim exercitationem! Laborum sequi dolorum alias expedita? Quo doloribus exercitationem minus iste velit molestiae aut saepe placeat fugit porro!
                            </p>

                            {/* <button
                                className="load-more_btn text-center bg-Charcoal px-3 py-2 w-40 text-OffWhite font-medium cursor-pointer capitalize"
                                onClick={() => addToCart(products[0])}
                            >
                                Add to cart
                            </button> */}
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="text-3xl font-semibold">Product Information</p>

                        <div className="flex flex-col gap-7 mt-5">
                            <div className="font-DMSans">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?</p>
                            </div>

                            <div>
                                <img src="https://w0.peakpx.com/wallpaper/455/898/HD-wallpaper-black-silk-fabric-texture-black-background-silk-black-fabric-vlack-satin.jpg" alt="" className="w-full h-[300px] object-cover" />
                            </div>

                            <div className="flex flex-col justify-start md:flex-row gap-5 sm:gap-4 w-full">
                                <p className="text-3xl font-semibold sm:w-[50%]">Product Highlight</p>

                                <div className="flex flex-col gap-3">
                                    <li className="font-DMSans text-sm pb-2">Dark Blue base with White Stripes</li>
                                    <li className="font-DMSans text-sm pb-2">100% Premium Cotton</li>
                                    <li className="font-DMSans text-sm pb-2">Machine wash</li>
                                    <li className="font-DMSans text-sm pb-2">Striped</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-pale  border-t-[.1px] opacity-25 mt-5"></div>


                <div className="mt-12">
                    <p className="text-3xl mb-5 font-semibold capitalize">Related products</p>

                    <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm gap-5 justify-center">
                        {products.map((product) => (
                            <Link href={`/products/${product.name}`} key={product.id} className="product-link">
                                <div className="product-card cursor-pointer">
                                    <div>
                                        <img src={product.image} alt={product.name} className="product-img w-[300px] h-[200px]  object-cover" />
                                    </div>
                                    <div className="product-details py-2 flex flex-col gap-[2px]">
                                        <p className="product-name font-Playfair font-semibold text-base capitalize">{product.name}</p>
                                        <p className="product-price font-DMSans text-sm text-black font-medium">{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* <CartSection cart={cart} /> */}
        </section >
    );
};

export default ProductDetails;