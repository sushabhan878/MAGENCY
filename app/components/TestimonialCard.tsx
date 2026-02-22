"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/ui/utils";

interface TestimonialCardProps {
    name: string;
    role: string;
    feedback: string;
    stars?: number;
    className?: string;
}

export default function TestimonialCard({
    name,
    role,
    feedback,
    stars = 5,
    className,
}: TestimonialCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "bg-white p-8 rounded-2xl border border-medical-blue/5 shadow-medical relative overflow-hidden",
                className
            )}
        >
            <div className="absolute -top-2 -right-2 text-primary/5">
                <Quote size={80} />
            </div>

            <div className="flex gap-1 mb-6">
                {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-medical-teal text-medical-teal" />
                ))}
            </div>

            <p className="text-text-dark/80 italic leading-relaxed mb-8 relative z-10">
                "{feedback}"
            </p>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-poppins font-bold text-primary">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-poppins font-bold text-text-dark">{name}</h4>
                    <p className="text-text-dark/50 text-xs font-semibold uppercase tracking-wider">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}
