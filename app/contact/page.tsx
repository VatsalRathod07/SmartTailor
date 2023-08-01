import Link from 'next/link'
import React from 'react'
import { BsShop } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'

const page = () => {
    return (
        <section className="about container px-5 sm:px-10 py-10 flex flex-col items-center">
            <div className="flex flex-col w-full gap-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0976731729265!2d72.54267827452071!3d23.093520079124097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83eb1fe6ea0b%3A0xe26ddeeba68405b9!2sSmart%20tailor%20%26%20Cloth!5e0!3m2!1sen!2sin!4v1690188727498!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="flex flex-col gap-5 text-center sm:text-start" >
                        <h1 className="text-[28px] font-Playfair font-medium">Contact Us</h1>
                        <div className="flex flex-col gap-5 text-center sm:text-start">
                            <div className="flex flex-col sm:flex-row gap-5 items-center">
                                <BsShop size={20}/>
                                <p className="text-lg sm:text-xl text-neutral-700 font-DMSans">Shop No.FF, Shukan Residency, 7, New SG Rd, Vandematram, Gota, Ahmedabad, Gujarat 382481</p>
                            </div>
                            <div className="flex flex-col gap-2 justify-center sm:justify-start items-center sm:items-start ">
                                <a href="tel:9725404270" className="flex gap-5 items-center">
                                    <FiPhoneCall size={20}/>
                                    <p className="text-xl font-DMSans text-neutral-700">+91 9725404270</p>
                                </a>
                                <a href="tel:8128751909" className="flex gap-5 items-center">
                                    <FiPhoneCall size={20}/>
                                    <p className="text-xl font-DMSans text-neutral-700">+91 8128751909</p>
                                </a>
                            </div>
                        </div>
                    </div >
            </div>
        </section>
    )
}

export default page

