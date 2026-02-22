"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { cn } from "@/ui/utils";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
  className?: string;
  useGradient?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  href,
  className,
  useGradient = false,
}: CTASectionProps) {
  return (
    <SectionWrapper
      className={cn(
        "relative rounded-3xl overflow-hidden text-center",
        useGradient ? "py-20" : "bg-medical-blue/5 py-16",
        className,
      )}
    >
      {useGradient && (
        <>
          <div className="absolute inset-0 bg-linear-to-r from-primary via-medical-blue to-secondary" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        </>
      )}

      <div
        className={cn(
          "max-w-4xl mx-auto space-y-8",
          useGradient && "relative z-10",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide",
            useGradient
              ? "bg-white/20 backdrop-blur-sm text-white"
              : "bg-primary/10 text-primary",
          )}
        >
          <Sparkles size={14} className="animate-pulse" />
          Take the next step
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight",
            useGradient ? "text-white" : "text-text-dark",
          )}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
              useGradient ? "text-white/90" : "text-text-dark/70",
            )}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-4"
        >
          <Link
            href={href}
            className={cn(
              "inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group",
              useGradient
                ? "bg-white text-primary hover:bg-secondary hover:text-white"
                : "bg-linear-to-r from-primary to-medical-blue text-white hover:from-secondary hover:to-medical-teal",
            )}
          >
            {buttonText}
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
