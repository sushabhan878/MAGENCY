"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden pt-32 lg:pt-40">
      {/* Enhanced Background Blobs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-linear-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-linear-to-br from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-medical-teal/5 to-medical-green/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto space-y-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary font-bold text-sm tracking-wide uppercase mb-4 shadow-soft"
        >
          <Star size={16} className="fill-current animate-pulse" />
          Trusted by 50+ Healthcare Providers
        </motion.div>

        <h1 className="font-poppins font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-text-dark leading-[1.1] tracking-tight">
          Your Trusted Partner in{" "}
          <span className="bg-linear-to-r from-primary via-medical-blue to-secondary bg-clip-text text-transparent">
            Healthcare Digital Growth
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed font-medium">
          Expert & Compassionate Care for Your Well-Being. Professional websites
          that build trust, attract patients, and grow your medical practice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto bg-linear-to-r from-primary to-medical-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-medical"
          >
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform relative z-10"
            />
            <div className="absolute inset-0 bg-linear-to-r from-secondary to-medical-teal rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-white text-primary border-2 border-primary/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-soft hover:shadow-medical"
          >
            Our Services
          </Link>
        </div>
      </motion.div>

      {/* Trust Badge Section Placeholder (for visual balance) */}
      {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-20 md:pt-32 opacity-40 grayscale hover:grayscale-0 transition-all"
            >
                {["HealthLink", "CareCore", "MediPath", "LifeSync"].map((partner) => (
                    <div key={partner} className="flex items-center justify-center font-poppins font-bold text-xl tracking-tight text-text-dark">
                        {partner}
                    </div>
                ))}
            </motion.div> */}
    </SectionWrapper>
  );
}
