"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Menu, X, CodeXml } from 'lucide-react';
const navbarVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 90
        }
    },
};

const menuContainerVariants: Variants = {
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    },
};

const menuItemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Project', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50 bg-black shadow-md backdrop-blur-sm bg-opacity-80"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-[#c0dbf9] hover:text-[#c0dbf9] transition duration-300">
                        <CodeXml className="w-6 h-6 text-[#c0dbf9]" />
                        <span className="leading-none tracking-tighter"><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#3071ae] via-50% to-[#ea97b8]'>MoeChan</span>
                        </span>
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[#c0dbf9] hover:text-[#ea97b8] font-medium transition duration-300 px-3 py-2 rounded-md"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-700 hover:text-[#ea97b8] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition duration-150"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <motion.nav
                className="md:hidden overflow-hidden"
                variants={menuContainerVariants}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.div className="flex flex-col space-y-1 pb-3 px-2 sm:px-3 border-t border-gray-100">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="text-[#c0dbf9] hover:bg-blue-50 hover:text-[#ea97b8] block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            variants={menuItemVariants}
                            onClick={handleLinkClick}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.nav>
        </motion.header>
    );
};

export default Navbar;