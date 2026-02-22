"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/ui/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "group relative bg-white p-8 rounded-3xl border border-medical-blue/10 shadow-card hover:shadow-medical-hover transition-all duration-300 overflow-hidden",
        className,
      )}
    >
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="bg-linear-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-soft">
          {icon}
        </div>
        <h3 className="font-poppins font-bold text-2xl text-text-dark mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-dark/70 leading-relaxed mb-6 text-base">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
