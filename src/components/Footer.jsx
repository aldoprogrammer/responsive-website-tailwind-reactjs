import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexCenter} ${styles.paddingY} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-[1] flex flex-col justify-start mr-10'>
                <img src={logo} alt="hoobank" className='w-[266px] h-[72.14px] object-contain'/>
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    A new way to make payments easy, reliable, and secure.
                </p>
            </div>

            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-poppins font-medium text-base leading-[27px] text-white'>
                            {footerlink.title}
                        </h4>
                        <ul className='list-none mt-4'>
                            {footerlink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-base leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                    <a href={`#${link.link}`}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t[#3F3E45] pt-5'>
            <p className='font-poppins font-normal text-lg leading-[27px] text-white'>
                Copyright © 2024 <a href="https://github.com/aldoprogrammer">Aldo L.S.</a> All Rights Reserved.
            </p>
            <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index) => (
                    <img 
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
