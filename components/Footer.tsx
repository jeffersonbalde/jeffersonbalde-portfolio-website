'use client';

import Image from 'next/image';
import linkedLink from '../public/svg/linkedLink.svg'
import email from '../public/svg/email.svg';
import github from '../public/svg/github.svg';
import linkedin from '../public/svg/linkedin.svg';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

function Footer() {
    const [showMenuPages, setShowMenuPages] = useState(false);
    const [showMenuLanguages, setShowMenuLanguages] = useState(false);
    const [showMenuFrameworks, setShowMenuFrameWorks] = useState(false);
    const [showMenuTools, setShowMenuTools] = useState(false);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView])

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        })
  
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.classList.remove('active');
        })
        e.currentTarget.classList.add("active");
    }

    const handleClickPages = () => {
        setShowMenuPages(currentState => !currentState);
    }

    const handleClickLanguages = () => {
        setShowMenuLanguages(currentState => !currentState);
    }

    const handleClickFrameworks = () => {
        setShowMenuFrameWorks(currentState => !currentState);
    }

    const handleClickTools = () => {
        setShowMenuTools(currentState => !currentState);
    }   

  return (
    <motion.div 
        className='mt-28 text-black px-5'
        ref={ref}
        variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {  y: 0, opacity: 1}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.4}}    
    >
        <hr className=' border-grey'/>
        <div className='mt-10 md:mt-12 md:flex flex-row justify-between md:w-[720px] lg:w-[800px] md:m-auto'>
            <h1 className='text-blue font-bold text-3xl mt-6 md:mt-4'>JB</h1>
            <div className='mt-2'>
                <hr className='a border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickPages}
                    >
                        Pages</h1>
                    <div className=''>
                    {showMenuPages ? (
                        <div className="mt-2 text-base">
                            <Link
                                href="#home"
                                onClick={handleScroll}
                                className='nav-link'
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            </Link>
                            <Link
                                href="/about"
                                className='nav-link'
                            >
                             <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            </Link>
                            <Link
                                href="#projects"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            </Link>
                            <Link
                                href="#skills"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            </Link>
                            <Link
                                href="#contact"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                            </Link>
                        </div>
                    ) :  (
                        <div className="mt-2 text-base hidden md:block">
                            <Link
                                href="#home"
                                onClick={handleScroll}
                                className='nav-link'
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            </Link>
                            <Link
                                href="/about"
                                className='nav-link'
                            >
                             <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            </Link>
                            <Link
                                href="#projects"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            </Link>
                            <Link
                                href="#skills"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                                <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            </Link>
                            <Link
                                href="#contact"
                                className='nav-link'
                                onClick={handleScroll}
                            >
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                            </Link>
                        </div>
                    )}
                    </div>
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickLanguages}
                    >
                        Languages</h1>
                    {showMenuLanguages ? (
                        <div className="mt-2 text-base">
                            <p className="mt-0.5 ">JavaScript</p>
                            <p className="mt-0.5 ">TypeScript</p>
                            <p className="mt-0.5 ">Python</p>
                            <p className="mt-0.5 ">Java</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className="mt-0.5 ">JavaScript</p>
                            <p className="mt-0.5 ">TypeScript</p>
                            <p className="mt-0.5 ">Python</p>
                            <p className="mt-0.5 ">Java</p>
                        </div>
                    )}
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickFrameworks}
                    >
                        Frameworks</h1>
                    {showMenuFrameworks ? (
                        <div className="mt-2 text-base">
                            <p className='mt-0.5 '>ReactJs</p>
                            <p className='mt-0.5 '>NextJs</p>
                            <p className='mt-0.5 '>Node</p>
                            <p className='mt-0.5 '>Express</p>
                            <p className='mt-0.5 '>Mongoose</p>
                            <p className='mt-0.5 '>Prisma</p>
                            <p className='mt-0.5 '>Tailwind</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 '>ReactJs</p>
                            <p className='mt-0.5 '>NextJs</p>
                            <p className='mt-0.5 '>Node</p>
                            <p className='mt-0.5 '>Express</p>
                            <p className='mt-0.5 '>Mongoose</p>
                            <p className='mt-0.5 '>Prisma</p>
                            <p className='mt-0.5 '>Tailwind</p>
                        </div>
                    )}
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickTools}
                    >
                        Tools</h1>
                    {showMenuTools ? (
                        <div className="mt-2 text-base">
                            <p className='mt-0.5 '>VS Code</p>
                            <p className='mt-0.5 '>IntelliJ IDEA</p>
                            <p className='mt-0.5 '>Figma</p>
                            <p className='mt-0.5 '>MongoDB Atlas</p>
                            <p className='mt-0.5 '>Firebase</p>
                            <p className='mt-0.5 '>AWS</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 '>VS Code</p>
                            <p className='mt-0.5 '>IntelliJ IDEA</p>
                            <p className='mt-0.5 '>Figma</p>
                            <p className='mt-0.5 '>MongoDB Atlas</p>
                            <p className='mt-0.5 '>Firebase</p>
                            <p className='mt-0.5 '>AWS</p>
                        </div>
                    )}
            </div>
        </div>
        <motion.div 
            className='mt-2 md:block'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.6}}    
        >
            <hr className=' border-grey md:hidden'/>
            <div className='mt-20 flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row justify-center gap-3 items-center'>
                    <Link
                        href={'mailto:jeffersonbalde13@gmail.com'}
                    >
                        <Image 
                            src={email}
                            alt='Email'
                        />
                    </Link>
                    <Link
                        href="https://github.com/jeffersonbalde"
                        target="_blank" rel="noreferrer"
                    >
                        <Image 
                            src={github}
                            alt='Github'
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/jeffersonbalde/"
                        target="_blank" rel="noreferrer"
                    >
                        <Image 
                            src={linkedin}
                            alt='LinkedIn'
                        />
                    </Link>
                </div>
                <div className='mt-2'>
                    <p className=' text-sm'>Copyright © 2023 
                        <a href="https://www.linkedin.com/in/jeffersonbalde/" className='text-blue underline decoration-1' target='_blank'> Jefferson Balde. </a> <br/>All rights reserved.
                    </p>
                    <br />
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer