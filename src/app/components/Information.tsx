"use client";

import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Github, ArrowRight, Linkedin } from 'lucide-react';

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -3 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            type: 'spring',
            delay: 0.5,
            stiffness: 100
        }
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};
const skillTagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React / Next.js", "Bootstrap", "Tailwind CSS", "Node.js", "PHP", "Laravel", "Java", "MySQL", "Workbench", "Figma", "Adobe Photoshop", "Adobe Xd", "Git/GitHub", "Fork", "Visual Studio Code"
];

const contactDetails = [
    {
        icon: Phone,
        title: "Phone",
        value: "+66 8 15400657",
        href: "tel:+66815400657"
    },
    {
        icon: Mail,
        title: "Gmail",
        value: "moechan599@gmail.com",
        href: "mailto:moechan599@gmail.com"
    },
    {
        icon: Linkedin,
        title: "Linkedin",
        value: "MoeChanMyaeHtun",
        href: "http://linkedin.com/in/moe-chan-myae-htun-875073330"
    },
    {
        icon: MapPin,
        title: "Address",
        value: "Bangkok, Thailand",
        href: "#"
    },
];

const Information: React.FC = () => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        margin: "-100px",
        once: true,
    });
    const developerImageUrl = "/img/code.gif";

    return (
        <motion.section
            id="about"
            ref={ref}
            className="py-24 bg-[#E0ECF8]"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.h2
                    className="lg:text-5xl md:text-4xl text-3xl font-extrabold lg:mb-16 mb-10 text-center tracking-tighter text-[#286094]"
                    variants={itemVariants}
                >
                    About <span className="text-[#ea97b8]">Moe Chan</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 items-center">
                    <div className="space-y-6 sm:col-span-7">
                        <motion.p
                            className="lg:text-lg text:sm leading-relaxed text-gray-700"
                            variants={itemVariants}
                        >
                            A highly passionate Software Developer with 3.5 years of hands-on experience, I am focused on establishing a long-term career in the dynamic IT sector with excellent prospects for growth. I bring a creative and effective approach, well-equipped to tackle challenging positions and deliver innovative solutions.
                        </motion.p>

                        <motion.p
                            className="lg:text-lg text:sm leading-relaxed text-gray-700"
                            variants={itemVariants}
                        >
                            I utilize well-honed skills in planning, coding, and quality testing to develop robust software solutions precisely tailored to client needs. My ultimate goal is to leverage my strong dedication, motivation, and sense of responsibility to directly contribute to the growth of the company's business and ensure exceptional client service.
                        </motion.p>
                        <motion.div className="pt-6" variants={itemVariants}>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-[#286094] hover:bg-[#ea97b8] border-2 border-[#286094] hover:border-[#ea97b8] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.05]"
                            >
                                Let's Contact <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        ref={ref}
                        className="flex justify-center relative group sm:col-span-5"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="w-full h-96 max-w-md rounded-2xl shadow-2xl overflow-hidden relative border-4 border-white transition duration-500 ease-in-out">
                            <img
                                src={developerImageUrl}
                                alt="Abstract Developer Workflow"
                                className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#286094]/50 to-transparent transition duration-500 group-hover:from-[#ea97b8]/70"></div>
                        </div>
                    </motion.div>
                </div>

                <div className='mt-24'>
                    <motion.h3
                        className="text-3xl lg:text-4xl font-extrabold pb-6 text-[#286094] border-b-4 border-[#ea97b8]/50"
                        variants={itemVariants}
                    >
                        My Core Stack
                    </motion.h3>
                    <motion.div
                        className="flex flex-wrap gap-3 pt-6"
                        variants={sectionVariants}
                    >
                        {skills.map((skill) => (
                            <motion.span
                                key={skill}
                                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#ea97b8] shadow-md transition duration-300 hover:bg-[#286094] cursor-default"
                                variants={skillTagVariants}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.h3
                        className="text-3xl lg:text-4xl l font-extrabold pt-20 pb-6 text-[#286094] border-b-4 border-[#ea97b8]/50"
                        variants={itemVariants}
                        id='contact'
                    >
                        Contact Details
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                        {contactDetails.map((contact, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#ea97b8]"
                                variants={itemVariants}
                                transition={{ delay: index * 0.1 }}
                            >
                                <contact.icon className="w-8 h-8 text-[#ea97b8] mb-3" />
                                <h4 className="text-xl font-bold mb-1 text-[#286094]">{contact.title}</h4>
                                <a
                                    href={contact.href}
                                    target={contact.title === "Address" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className={`text-lg font-medium transition duration-300 ${contact.title === "Address" ? "text-gray-600" : "text-[#286094] hover:text-[#ea97b8] hover:underline"}`}
                                >
                                    {contact.value}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Information;