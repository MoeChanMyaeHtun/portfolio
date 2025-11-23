"use client";
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { link } from 'fs';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const projects = [
    {
        title: "Myanmar Payment Solution Services",
        description: "Full-Stack Content Management System (CMS).",
        tech: ["PHP", "Laravel", "Tailwind CSS"],
        color: "bg-[#286094]",
        link: "https://www.mpss.com.mm/",
    },
    {
        title: "Demo Ecommerce",
        description: "Octoverse Payment Gateway Demo Ecommerce.",
        tech: ["Laravel", "Pure HTML CSS"],
        color: "bg-[#ea97b8]",
        link: "https://demo.octoverse.com.mm/login",
    },
    {
        title: "Developer Zone",
        description: "Payment Gateway Developer Testing and Documentation Website.",
        tech: ["React", "Laravel"],
        color: "bg-gray-500",
        link: "https://developer.octoverse.com.mm/login"
    },

    {
        title: "SHM Store",
        description: "Ecommerce Website.",
        tech: ["HTML", "CSS", "Laravel"],
        color: "bg-gray-500",
        link: "https://github.com/MoeChanMyaeHtun/Ecommerce_Laravel_pureCSS.git"
    },

    {
        title: "Student Information",
        description: "Student Information Website",
        tech: ["HTML", "Bootstrap", "Laravel"],
        color: "bg-gray-500",
        link: "https://github.com/MoeChanMyaeHtun/Student_Information.git"
    },

    {
        title: "August",
        description: "Team Final Project",
        tech: ["HTML", "Bootstrap", "PHP"],
        color: "bg-gray-500",
        link: "https://github.com/MoeChanMyaeHtun/august.git"
    },
];

const WorkSection: React.FC = () => {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.2
    });

    return (
        <section className="lg:py-24 py-12 bg-[#c0dbf9]" id="projects">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >

                <h2 className="lg:text-5xl text-3xl md:text-4xl  font-extrabold mb-4 text-center tracking-tighter">
                    Featured <span className="text-[#ea97b8]">Projects</span>
                </h2>
                <p className="text-center lg:text-xl text-sm lg:mb-16 mb-10 max-w-2xl mx-auto">
                    Take a look at some of my recent work, blending design aesthetics with robust code structure.
                </p>
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >

                    {projects.map((project, index) => (
                        <motion.a // Card တစ်ခုလုံးကို Link အဖြစ် ပြောင်းလဲထားသည်
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.title}
                            className="group block" // hover effect အတွက် group ကို သုံးသည်
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }} // Stagger delay ကို နည်းနည်းလျှော့လိုက်သည်
                        >
                            <motion.div
                                className="project-card bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 transform group-hover:shadow-2xl group-hover:-translate-y-2 relative overflow-hidden"
                            >
                                <motion.div className="space-y-4">
                                    <motion.h3
                                        className="text-2xl font-bold line-clamp-1"
                                        variants={itemVariants}
                                    >
                                        {project.title}
                                    </motion.h3>

                                    <motion.p
                                        className="line-clamp-2"
                                        variants={itemVariants}
                                    >
                                        {project.description}
                                    </motion.p>

                                    <motion.div className="flex flex-wrap gap-2 pt-2" variants={itemVariants}>
                                        {project.tech.map(t => (
                                            <span
                                                key={t}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </motion.div>
                                    <motion.div
                                        className="mt-4 pt-2 flex items-center text-[#ea97b8] group-hover:text-[#286094] font-semibold transition-colors duration-300"
                                        variants={itemVariants}
                                    >
                                        <span>View Project</span>
                                        <span className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1">
                                            &rarr;
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.a>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default WorkSection;