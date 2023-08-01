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
        date: new Date(2023/7/9),
        rating: '6',
        popularity: '65'
    },
    {
        id: 2,
        name: 'win',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹894.00',
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2019/07/LSMONZASH72DKBLBGBRCHKHBTWJUN.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/8/22),
        rating: '3',
        popularity: '88'
    },
    {
        id: 3,
        name: 'fifth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹656.00',
        image: 'https://cpimg.tistatic.com/07765787/b/4/Cotton-Checks-Shirt-Fabric.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/5/20),
        rating: '3',
        popularity: '17'
    },
    {
        id: 4,
        name: 'larger',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹742.00',
        image: 'https://cdn.thelibasstore.com/wp-content/uploads/2021/02/LSMFSH80WHBKSTRPSATFEB-4.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/10/25),
        rating: '4',
        popularity: '4'
    },
    {
        id: 5,
        name: 'produce',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹929.00',
        image: 'https://i.pinimg.com/1200x/7c/29/7c/7c297cdb94b0f5e2cb4069fd07eae933.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/5/31),
        rating: '3',
        popularity: '72',
    },
    {
        id: 6,
        name: 'according',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹696.00',
        image: 'https://i.pinimg.com/1200x/e6/e8/92/e6e892d1be5fa54b83c0110474441996.jpg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/5/6),
        rating: '5',
        popularity: '98',
    },
    {
        id: 7,
        name: 'slow',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹590.00',
        image: '/img/ProductImg/7.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/9/11),
        rating: '3',
        popularity: '7'
    },
    {
        id: 8,
        name: 'sink',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹781.00',
        image: '/img/ProductImg/8.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/3/1),
        rating: '5',
        popularity: '90'
    },
    {
        id: 9,
        name: 'her',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹600.00',
        image: '/img/ProductImg/9.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/10/23),
        rating: '3',
        popularity: '79',
    },
    {
        id: 10,
        name: 'wore',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹735.00',
        image: '/img/ProductImg/10.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/6/18),
        rating: '3',
        popularity: '100',
    },
    {
        id: 11,
        name: 'mainly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹812.00',
        image: '/img/ProductImg/11.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/4/12),
        rating: '4',
        popularity: '21',
    },
    {
        id: 12,
        name: 'captain',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹738.00',
        image: '/img/ProductImg/12.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/5/17),
        rating: '3',
        popularity: '57',
    },
    {
        id: 13,
        name: 'low',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹771.00',
        image: '/img/ProductImg/13.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/12/25),
        rating: '5',
        popularity: '7'
    },
    {
        id: 14,
        name: 'think',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹501.00',
        image: '/img/ProductImg/14.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/3/12),
        rating: '3',
        popularity: '2'
    },
    {
        id: 15,
        name: 'column',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
        price: '₹987.00',
        image: '/img/ProductImg/15.jpeg',
        contact: '+91 123-456-7890',
        information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
        date: new Date(2023/2/16),
        rating: '5',
        popularity: '47'
    },
];

const ProductsCard = () => {
    return (
        <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 justify-center">
            {products.filter((data) => data.id <= 8).map((product) => (
                <Link href={`/products/${product.name}`} key={product.name} className="product-link">
                    <div className="product-card cursor-pointer">
                        <div>
                            <img src={product.image} alt={product.name} className="product-img h-[200px] w-screen object-cover object-center lg:h-[300px] lg:w-screen rounded-md" />
                        </div>
                        <div className="mt-4 flex flex-col gap-1">
                            <h3 className="text-base text-black font-medium capitalize">
                                {product.name}
                            </h3>
                            <p className="text-sm font-normal text-neutral-700">{product.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsCard