"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/ui/utils";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    noAnimation?: boolean;
}

export default function SectionWrapper({
    children,
    className,
    id,
    noAnimation = false,
}: SectionWrapperProps) {
    if (noAnimation) {
        return (
            <section id={id} className={cn("py-20 px-6 md:px-12 lg:px-24", className)}>
                {children}
            </section>
        );
    }

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("py-20 px-6 md:px-12 lg:px-24", className)}
        >
            {children}
        </motion.section>
    );
}
