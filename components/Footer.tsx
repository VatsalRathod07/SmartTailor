import Link from 'next/link';
import React from 'react';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className="footer flex flex-col gap-5 bg-black px-2 py-3 sm:px-5 sm:py-5 border-t-[.3px]">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-10">
                {/* <h1 className="text-[28px] font-Playfair text-OffWhite font-medium">Smart Tailor & Cloth</h1> */}

                <div className="flex flex-col gap-2 text-center sm:text-start">
                    <h1 className="text-[26px] text-OffWhite font-medium">Smart Tailor & Cloth</h1>
                    {/* <p className="text-sm text-OffWhite font-Raleway w-[360px]">We are welcoming you to Smart Tailor & Cloths, where clothing goes beyond mere fabric and threads.</p> */}
                </div>

                <div className="flex gap-10 text-center sm:text-start text-OffWhite">
                    <Link href="https://api.whatsapp.com/send?phone=9725404270&text=Looking for perfect fits! Tell me more!">
                        <BsWhatsapp size={25} />
                    </Link>
                    <Link href="https://www.instagram.com/its_smart_tailor/">
                        <BsInstagram size={25} />
                    </Link>
                    <Link href="mailto:smarttailor@gmail.com">
                        <BiLogoGmail size={25} />
                    </Link>
                </div>

            </div>
                <div className="font-Raleway text-center text-[10px] sm:text-sm text-OffWhite mt-5">
                    <p>© 2023 Smart Tailor & Cloth | Made By Vatsal Rathod</p>
                </div>
        </footer>
    )
}

export default Footer