"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Home, Code, MessageSquare, User } from 'lucide-react';

// --- Animation Variants ---
const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.2,
            staggerChildren: 0.1
        }
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

// --- Data ---
const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/MoeChanMyaeHtun",
        label: "GitHub"
    },
    {
        icon: Linkedin,
        href: "http://linkedin.com/in/moe-chan-myae-htun-875073330",
        label: "LinkedIn"
    },
    {
        icon: Mail,
        href: "mailto:moechan599@gmail.com",
        label: "Email"
    },
    {
        icon: Phone,
        href: "tel:+66815400657",
        label: "Phone"
    },
];

const navLinks = [
    { title: "Home", href: "#top", icon: Home },
    { title: "About Me", href: "#about", icon: User },
    { title: "Projects", href: "#projects", icon: Code },
    { title: "Contact", href: "#contact", icon: MessageSquare },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            id="footer"
            className="bg-[#286094] text-white py-12 border-t-4 border-[#ea97b8]"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/20">

                    <motion.div variants={itemVariants} className="text-3xl font-extrabold tracking-tighter text-[#ea97b8] mb-6 md:mb-0">
                        Moe Chan Myae Htun
                    </motion.div>
                    <motion.div
                        className="flex space-x-6"
                        variants={footerVariants}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#ea97b8] transition duration-300 transform hover:scale-125"
                                title={social.label}
                                variants={itemVariants}
                            >
                                <social.icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <div className="py-8 border-b border-white/20">
                    <h4 className="text-xl font-semibold mb-4 text-[#E0ECF8]">Quick Links</h4>
                    <motion.div
                        className="flex flex-wrap gap-4 md:gap-8"
                        variants={footerVariants}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="flex items-center text-sm font-medium text-white/80 hover:text-[#ea97b8] transition duration-300 group"
                                variants={itemVariants}
                            >
                                <link.icon className="w-4 h-4 mr-2 group-hover:text-[#ea97b8]" />
                                {link.title}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <div className="pt-8 text-center">
                    <motion.p variants={itemVariants} className="text-sm text-white/60">
                        &copy; {currentYear} Moe Chan Myae Htun. All rights reserved.
                        <br className="sm:hidden" />
                        Designed and Developed with <span className="text-[#ea97b8]">&hearts;</span>.
                    </motion.p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;