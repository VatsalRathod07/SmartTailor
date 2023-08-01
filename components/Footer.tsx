import Link from 'next/link';
import React from 'react';
import { BsWhatsapp, BsInstagram, BsPinterest } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className="footer bg-black px-2 py-3 sm:px-5 border-t-[.3px]">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-10 py-5">
                <p className="text-[12px] sm:text-base text-OffWhite">© 2023 Smart Tailor & Cloth. All rights reserved.</p>

                <div className="flex gap-5 text-center sm:text-start text-OffWhite">
                    <Link href="https://api.whatsapp.com/send?phone=9725404270&text=Looking for perfect fits!">
                        <BsWhatsapp size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/its_smart_tailor/">
                        <BsInstagram size={20} />
                    </Link>
                    <Link href="mailto:smarttailor@gmail.com">
                        <BsPinterest size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer 