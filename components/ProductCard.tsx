import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import Link from 'next/link';

export const products = [
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
    {
        id: 4,
        name: 'larger',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹742.00',
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2021/02/LSMFSH80WHBKSTRPSATFEB-4.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '8/23/2025',
        rating: '4',
    },
    {
        id: 5,
        name: 'produce',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹929.00',
        image: 'https://i.pinimg.com/1200x/7c/29/7c/7c297cdb94b0f5e2cb4069fd07eae933.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/14/2071',
        rating: '3',
        popularity: '8'
    },
    {
        id: 6,
        name: 'according',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹696.00',
        image: 'https://i.pinimg.com/1200x/e6/e8/92/e6e892d1be5fa54b83c0110474441996.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/30/2059',
        rating: '5',
        popularity: '8'
    },
    {
        id: 7,
        name: 'slow',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹590.00',
        image: '/img/ProductImg/7.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/14/2071',
        rating: '3',
        popularity: '8'
    },
    {
        id: 8,
        name: 'sink',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹781.00',
        image: '/img/ProductImg/8.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/30/2059',
        rating: '5',
        popularity: '8'
    },
    {
        id: 9,
        name: 'her',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹600.00',
        image: '/img/ProductImg/9.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '11/8/2106',
        rating: '3',
    },
    {
        id: 10,
        name: 'wore',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹735.00',
        image: '/img/ProductImg/10.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '4/27/2081',
        rating: '3',
    },
    {
        id: 11,
        name: 'mainly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹812.00',
        image: '/img/ProductImg/11.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '8/23/2025',
        rating: '4',
    },
    {
        id: 12,
        name: 'captain',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹738.00',
        image: '/img/ProductImg/12.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/14/2071',
        rating: '3',
        popularity: '8'
    },
    {
        id: 13,
        name: 'low',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹771.00',
        image: '/img/ProductImg/13.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/30/2059',
        rating: '5',
        popularity: '8'
    },
    {
        id: 14,
        name: 'think',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹501.00',
        image: '/img/ProductImg/14.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/14/2071',
        rating: '3',
        popularity: '8'
    },
    {
        id: 15,
        name: 'column',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹987.00',
        image: '/img/ProductImg/15.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: '3/30/2059',
        rating: '5',
        popularity: '8'
    },
];

const ProductsCard = () => {
    return (
        <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
            {products.filter((data) => data.id <= 6).map((product) => (
                    <Link href={`/products/${product.name}`} key={product.name} className="product-link">
                        <div className="product-card cursor-pointer">
                            <div>
                                <img src={product.image} alt={product.name} className="product-img w-[300px] h-[200px] object-cover"/>
                            </div>
                            <div className="product-details py-1 flex flex-col gap-[2px]">
                                <p className="product-name font-Playfair font-normal text-base capitalize">
                                    {product.name}
                                </p>
                                <p className="product-price font-DMSans text-sm text-black font-medium">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default ProductsCard