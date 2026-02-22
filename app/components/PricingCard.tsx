"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/ui/utils";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export default function PricingCard({
    title,
    price,
    description,
    features,
    isPopular = false,
}: PricingCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={cn(
                "relative bg-white rounded-3xl p-8 flex flex-col h-full border-2 transition-all",
                isPopular ? "border-primary shadow-xl scale-105 z-10" : "border-medical-blue/5 shadow-md"
            )}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={12} />
                    MOST POPULAR
                </div>
            )}

            <div className="mb-8">
                <h3 className="font-poppins font-bold text-2xl text-text-dark mb-2">{title}</h3>
                <p className="text-text-dark/60 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-poppins font-bold text-text-dark">₹{price}</span>
                    <span className="text-text-dark/50 text-sm font-medium">/ project</span>
                </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-medical-green/10 p-0.5 rounded-full">
                            <Check size={14} className="text-medical-green" />
                        </div>
                        <span className="text-sm text-text-dark/80 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all shadow-md active:scale-[0.98]",
                    isPopular
                        ? "bg-primary text-white hover:bg-secondary hover:shadow-lg"
                        : "bg-medical-blue/5 text-primary hover:bg-medical-blue/10"
                )}
            >
                Choose Plan
            </button>
        </motion.div>
    );
}
