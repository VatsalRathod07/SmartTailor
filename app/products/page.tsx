"use client"
import React, { useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { products } from '@/components/ProductCard';
import Link from 'next/link';
// import { GoHome } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import Pagination from '@/components/Pagination';
// import Breadcrumbs from '@/components/Breadcrumbs';


const ProductDetails = () => {
    const [sortingOption, setSortingOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false); // State to track whether the dropdown should be shown or hidden

    const handleSortingChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSortingOption(event.target.value);
        setShowDropdown(false); // Close the dropdown after selecting an option
    };

    const handleToggleDropdown = () => {
        setShowDropdown((prevState) => !prevState); // Toggle the state to show/hide the dropdown
    }

    // const routes = [
    //     { label: <GoHome size={15}/>, path: '/' },
    //     { label: 'products', path: '/products' },
    // ];


    // Sorting logic
    let sortedProducts = [...products];
    if (sortingOption === 'popularity') {
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
    } else if (sortingOption === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortingOption === 'latest') {
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortingOption === 'lowToHigh') {
        sortedProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortingOption === 'highToLow') {
        sortedProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    } else if (sortingOption === 'filter') {
        // Custom sorting logic for BsFilterLeft (You can implement your own logic here)
        // For example, sort by a specific property or filter some products
        // sortedProducts.sort((a, b) => someCustomSortingLogic(a, b));
    } else {
        sortedProducts = [...products]; // Reset to default order
    }

    const pageSize = 8
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastProduct = currentPage * pageSize;
    const indexOfFirstProduct = indexOfLastProduct - pageSize;
    const paginatedProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <section className="products pt-5 sm:pt-10 pb-5 sm:pb-12 px-1 sm:px-5">
            <div className="products_content container flex flex-col gap-[30px] p-5 sm:p-10 bg-OffWhite">
                {/* <nav className="text-sm mb-4">
                    <Breadcrumbs routes={routes} />
                </nav> */}
                <div className="flex gap-3 sm:gap-0 justify-between items-center">
                    <h4 className="product-header text-Charcoal">Our Latest Product</h4>

                    {/* Conditionally show dropdown on larger screens and BsFilterLeft icon on smaller screens */}
                    <div className="hidden sm:flex">
                        <select
                            name="sort-products"
                            id="sort-products"
                            className="bg-transparent focus:outline-none overflow-hidden text-sm"
                            value={sortingOption}
                            onChange={handleSortingChange}
                        >
                            <option value="" className="text-Charcoal">
                                Default sorting
                            </option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="latest">Sort by latest</option>
                            <option value="lowToHigh">Sort by price: low to high</option>
                            <option value="highToLow">Sort by price: high to low</option>
                        </select>
                    </div>
                    <div className="relative flex sm:hidden">
                        <div className="">
                            {/* BsFilterLeft */}
                            <BsFilterLeft
                                size={30}
                                className="text-Charcoal cursor-pointer"
                                onClick={handleToggleDropdown}// Toggle the dropdown when the icon is clicked
                            />
                        </div>
                        {showDropdown && (
                            <div className="absolute right-2 top-8 w-[300px] mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption(''); // Reset to default sorting
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Default sorting
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption('popularity'); // Set the sorting option to popularity
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Sort by popularity
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption('rating'); // Set the sorting option to rating
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Sort by average rating
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption('latest'); // Set the sorting option to latest
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Sort by latest
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption('lowToHigh'); // Set the sorting option to lowToHigh
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Sort by price: low to high
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSortingOption('highToLow'); // Set the sorting option to highToLow
                                        setShowDropdown(false); // Close the dropdown after selecting an option
                                    }}
                                >
                                    Sort by price: high to low
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center">
                    {paginatedProducts.map((product) => (
                        <Link href={`/products/${product.name}`} key={product.id} className="product-link">
                            <div className="product-card cursor-pointer">
                                <div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-img w-[300px] h-[200px] object-cover"
                                    />
                                </div>
                                <div className="product-details py-2 flex flex-col gap-[2px]">
                                    <p className="product-name font-Playfair font-semibold text-base capitalize">{product.name}</p>
                                    <p className="product-price text-sm text-Charcoal font-medium">{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Pagination total={sortedProducts?.length} pageSize={pageSize} onClick={(number: number) => { setCurrentPage(number) }} activePage={currentPage} />
            </div>
        </section >
    );
};

export default ProductDetails;
