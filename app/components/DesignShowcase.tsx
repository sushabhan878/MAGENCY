"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const designs = [
    { id: 1, image: "/designs/1.webp", title: "Premium Design 1" },
    { id: 2, image: "/designs/2.webp", title: "Premium Design 2" },
    { id: 3, image: "/designs/3.webp", title: "Premium Design 3" },
    { id: 4, image: "/designs/4.webp", title: "Premium Design 4" },
    { id: 5, image: "/designs/5.webp", title: "Premium Design 5" },
    { id: 6, image: "/designs/6.webp", title: "Premium Design 6" },
    { id: 7, image: "/designs/7.webp", title: "Premium Design 7" },
    { id: 8, image: "/designs/8.webp", title: "Premium Design 8" },
    { id: 9, image: "/designs/9.webp", title: "Premium Design 9" },
    { id: 10, image: "/designs/10.webp", title: "Premium Design 10" },
    { id: 11, image: "/designs/11.webp", title: "Premium Design 11" },
    { id: 12, image: "/designs/12.webp", title: "Premium Design 12" },
    { id: 13, image: "/designs/13.webp", title: "Premium Design 13" },
    { id: 14, image: "/designs/14.webp", title: "Premium Design 14" },
];

const DesignShowcase = () => {
    // Duplicating the array to create a seamless loop
    const duplicatedDesigns = [...designs, ...designs];

    return (
        <div className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="font-poppins font-bold text-3xl text-text-dark text-center">
                    Our Recent <span className="text-primary">Deliveries</span>
                </h2>
                <p className="text-text-dark/70 text-center mt-4 max-w-2xl mx-auto">
                    Take a look at some of the premium healthcare designs we&apos;ve built for our clients.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, -7448], // 14 items * (500px width + 32px margin) = 7448px
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Maintaining smooth speed for larger distance
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedDesigns.map((design, index) => (
                        <div
                            key={`${design.id}-${index}`}
                            className="inline-block w-[500px] h-[281px] mx-4 rounded-xl overflow-hidden shadow-lg border border-medical-blue/10 relative group"
                        >
                            <Image
                                src={design.image}
                                alt={design.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="500px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-poppins font-semibold">{design.title}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default DesignShowcase;
