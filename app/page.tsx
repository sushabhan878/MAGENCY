"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  CheckCircle,
  Award,
  Layout,
  Stethoscope,
  Search,
  Calendar,
  HeartPulse,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SectionWrapper from "./components/SectionWrapper";
import AnimatedCounter from "./components/AnimatedCounter";
import ServiceCard from "./components/ServiceCard";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <SectionWrapper className="bg-white border-y border-medical-blue/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Projects Completed",
                value: 50,
                suffix: "+",
                icon: <CheckCircle className="text-medical-teal" />,
              },
              {
                label: "Client Satisfaction",
                value: 98,
                suffix: "%",
                icon: <Users className="text-primary" />,
              },
              {
                label: "Years Experience",
                value: 3,
                suffix: "+",
                icon: <Award className="text-medical-green" />,
              },
              {
                label: "Responsive Design",
                value: 100,
                suffix: "%",
                icon: <Layout className="text-primary" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl hover:bg-medical-blue/5 transition-colors group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-text-dark">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-dark/60 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Services Preview */}
        <SectionWrapper className="bg-medical-blue/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark">
                Specialized Services for Healthcare
              </h2>
              <p className="text-text-dark/70 max-w-2xl mx-auto text-lg">
                We focus exclusively on medical and healthcare businesses to
                deliver results that matter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Website Design for Clinics"
                description="Professional, clean, and patient-friendly designs that build trust and make booking easy."
                icon={<Stethoscope size={28} />}
              />
              <ServiceCard
                title="SEO for Healthcare"
                description="Appear at the top of search results when patients look for healthcare providers in your area."
                icon={<Search size={28} />}
              />
              <ServiceCard
                title="Appointment Integration"
                description="Seamless online booking systems that reduce administrative load and improve patient experience."
                icon={<Calendar size={28} />}
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper className="bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark">
                  Why Leading Healthcare Providers Choose Us
                </h2>
                <p className="text-text-dark/70 text-lg leading-relaxed">
                  We aren't just developers; we are healthcare digital partners.
                  We understand the unique needs of medical professionals and
                  their patients.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Healthcare-Focused Strategy",
                    desc: "Every design choice is made with patient trust and medical authority in mind.",
                  },
                  {
                    title: "Conversion-Optimized Design",
                    desc: "We turn website visitors into patients through strategic call-to-actions.",
                  },
                  {
                    title: "Fast & Secure Websites",
                    desc: "Medical websites need to be blazing fast and secure. We handle all technicalities.",
                  },
                  {
                    title: "SEO Ready Structure",
                    desc: "Built-in SEO best practices to ensure your clinic gets discovered locally.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-medical-blue/5 transition-colors"
                  >
                    <div className="mt-1">
                      <CheckCircle className="text-medical-green" size={24} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-lg text-text-dark">
                        {item.title}
                      </h4>
                      <p className="text-text-dark/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
                src="/mockup.png"
                alt="Why Choose Us"
                width={700}
                height={700}
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-medical-teal/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Banner */}
        <CTASection
          title="Ready to Grow Your Hospital Online?"
          subtitle="Join 50+ healthcare providers who have transformed their digital presence with us."
          buttonText="Book Free Strategy Call"
          href="/contact"
          useGradient={true}
          className="my-20"
        />
      </main>
      <Footer />
    </>
  );
}
