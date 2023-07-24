import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="footer flex flex-col gap-5 bg-white p-5 sm:p-10 border-t-[.3px]">
            <div className="container grid justify-items-center md:justify-items-start grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 justify-center">
                <div className="flex flex-col gap-5 text-center sm:text-start  ">
                    <h1 className="text-[28px] font-Playfair font-medium">Smart Tailor & Cloth</h1>
                    <p className="text-sm text-Charcoal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae saepe ipsa et adipisci expedita.</p>
                </div>

                <div className="flex flex-col gap-5 text-center sm:text-start">
                    <h1 className="text-[28px] font-Playfair font-medium">Contact</h1>
                    <div className="flex flex-col gap-2 text-center sm:text-start">
                        <p className="text-sm text-Charcoal">Shop No.FF, Shukan Residency, 7, New SG Rd, Vandematram, Gota, Ahmedabad, Gujarat 382481</p>
                        <p className="text-sm text-Charcoal">+91 9725404270</p>
                        <p className="text-sm text-Charcoal">+91 8128751909</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 text-center sm:text-start">
                    <h1 className="text-[28px] font-Playfair font-medium">Quick Links</h1>

                    <div className="flex flex-col gap-2 text-sm  text-Charcoal">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0976731729265!2d72.54267827452071!3d23.093520079124097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83eb1fe6ea0b%3A0xe26ddeeba68405b9!2sSmart%20tailor%20%26%20Cloth!5e0!3m2!1sen!2sin!4v1690188727498!5m2!1sen!2sin" width="300" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="text-center mt-10 text-xs sm:text-sm text-Charcoal">
                <p>© 2023 Smart Tailor & Cloth | Made By Vatsal Rathod</p>
            </div>
        </footer>
    )
}

export default Footer