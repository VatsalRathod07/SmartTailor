"use client"
import CartSection from '@/app/cart/page';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai'


const products = [
    {
        id: 1,
        name: 'original',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '$153.00',
        image: 'https://cdn.shopify.com/s/files/1/0250/8557/5222/files/Windowpane-for-Jackets-RIVULET-Fabric-fabricsight-Meters-Blue-Windowpane_2e41f361-db3d-4bef-8122-0f14b31c4706_480x480.jpg?v=1642514251',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/2/2078',
        rating: '6',
    },
    {
        id: 2,
        name: 'chapter',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '$174.00',
        image: 'https://cdn.shopify.com/s/files/1/0250/8557/5222/files/Windowpane-for-Jackets-RIVULET-Fabric-fabricsight-Meters-Blue-Windowpane_2e41f361-db3d-4bef-8122-0f14b31c4706_480x480.jpg?v=1642514251',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '11/8/2106',
        rating: '3',
    },
    {
        id: 3,
        name: 'vowel',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '$145.00',
        image: 'https://cdn.shopify.com/s/files/1/0250/8557/5222/files/Windowpane-for-Jackets-RIVULET-Fabric-fabricsight-Meters-Blue-Windowpane_2e41f361-db3d-4bef-8122-0f14b31c4706_480x480.jpg?v=1642514251',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '4/27/2081',
        rating: '3',
    },
]

const productsImages = [
    {
        id: 1,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/74c2c253302487.5d41b3bd39817.jpg',
    },
    {
        id: 2,
        image: 'https://cdn.trendhunterstatic.com/phpthumbnails/413/413793/413793_2_600.jpeg?auto=webp',
    },
    {
        id: 3,
        image: 'https://img.designideas.pics/wp-content/uploads/formidable/13/01z2.jpg?strip=all&lossy=1&quality=80&ssl=1',
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

    return (
        <section className="products_detail pt-5 sm:pt-10 pb-5z sm:pb-12 px-2 sm:px-5 bg-light">
            <div className="product_content container p-5 sm:p-20 bg-white">
                <div className="products-details flex flex-col gap-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-[48%_48%] gap-[4%]">
                        <div className="product-bg-img flex flex-col gap-[10px]">
                            <img src={mainImage} alt="Product Image" className="products_images w-full sm:w-full h-[500px] object-cover" />

                            <div className="products-small-images flex overflow-auto sm:overflow-hidden gap-2 cursor-pointer object-cover">
                                {productsImages.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt="Product Image"
                                        className="products_images w-[150px] object-cover hover:border-pale hover:border-[2px]"
                                        onClick={() => handleImageChange(product.image)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="font-medium text-2xl ">Logitech Salvo Concept Gaming Mouse</p>
                            <h4 className="text-xl font-medium text-primary">$120.00</h4>
                            <p className="max-w-[400px] font-Playfair text-sm text-[#353535] font-normal">
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
                        <p className="text-3xl">Product Information</p>

                        <div className="flex flex-col gap-7 mt-5">
                            <div className="font-Playfair">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?</p>
                            </div>

                            <div>
                                <img src="https://w0.peakpx.com/wallpaper/455/898/HD-wallpaper-black-silk-fabric-texture-black-background-silk-black-fabric-vlack-satin.jpg" alt="" className="w-full h-[300px] object-cover" />
                            </div>

                            <div className="flex flex-col justify-start md:flex-row gap-5 sm:gap-4 w-full">
                                <p className="text-3xl sm:w-[50%]">Product Highlight</p>

                                <div className="flex flex-col gap-3">
                                    <li className="font-Playfair text-sm pb-2">Duis vel ipsum vitae est semper varius in id</li>
                                    <li className="font-Playfair text-sm pb-2">Class aptent taciti sociosqu</li>
                                    <li className="font-Playfair text-sm pb-2">Litora torquent per conubia nostra per</li>
                                    <li className="font-Playfair text-sm pb-2">Inceptos himenaeos praesent</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-pale  border-t-[.1px] opacity-25 mt-5"></div>


                <div className="mt-12">
                    <p className="text-3xl mb-5 capitalize">Related products</p>

                    <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm gap-5 justify-center">
                        {products.map((product) => (
                            <Link href={`/products/${product.name}`} key={product.id} className="product-link">
                                <div className="product-card cursor-pointer">
                                    <div>
                                        <img src={product.image} alt={product.name} className="product-img w-full h-[200px] object-cover" />
                                    </div>
                                    <div className="product-details py-2 flex flex-col gap-[2px]">
                                        <p className="product-name font-Playfair font-semibold text-base">{product.name}</p>
                                        <p className="product-price text-sm text-Charcoal  font-medium">{product.price}</p>
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