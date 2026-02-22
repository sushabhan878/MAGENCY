"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import CTASection from "../components/CTASection";
import Image from "next/image";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Step 1: Research",
    desc: "We analyze your clinic's niche, patient demographics, and competitors to build a solid foundation.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Step 2: Strategy",
    desc: "A custom digital roadmap is created to optimize for patient trust and high conversion rates.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Step 3: Design & Development",
    desc: "Our team crafts a premium, healthcare-focused website with clean, accessible UI.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Step 4: Launch & Support",
    desc: "We launch your site and provide ongoing support to ensure everything runs smoothly.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Who We Are Hero */}
        <SectionWrapper className="bg-medical-blue/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-text-dark">
              Dedicated to{" "}
              <span className="text-primary">Healthcare Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-text-dark/70 leading-relaxed font-inter">
              We are a niche digital agency that understands the sensitivity and
              trust required in medical web design. Our expertise lies
              exclusively in building high-performing websites for healthcare
              businesses.
            </p>
          </div>
        </SectionWrapper>

        {/* Our Mission */}
        <SectionWrapper className="bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark">
                Our Mission
              </h2>
              <p className="text-lg text-text-dark/70 leading-relaxed">
                To digitally empower healthcare providers by providing them with
                the most professional, trustworthy, and effective web solutions.
                We aim to bridge the gap between clinics and patients through
                technology that feels human and compassionate.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold">
                <CheckCircle2 size={24} />
                <span>Trusted by 50+ Medical Professionals</span>
              </div>
            </div>
            <Image
              src="/mission.png"
              alt="Our Mission"
              width={700}
              height={400}
              className="rounded-3xl shadow-lg relative"
            />
          </div>
        </SectionWrapper>

        {/* Our Process */}
        <SectionWrapper className="bg-medical-blue/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-4">
                Our Process
              </h2>
              <p className="text-text-dark/70 max-w-2xl mx-auto">
                How we take your medical practice from offline (or outdated) to
                a digital authority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-medical hover:shadow-medical-hover transition-all duration-300 group"
                >
                  <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-dark/70 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Niche Focus */}
        <SectionWrapper className="bg-white text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark">
              Why We Focus Only on Healthcare
            </h2>
            <p className="text-lg text-text-dark/70 leading-relaxed">
              Unlike generic agencies, we don't build websites for e-commerce,
              real estate, or fashion. We specialize in healthcare because it
              requires a unique approach to patient psychology, compliance, and
              trust-building that other industries simply don't need.
            </p>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Trust-Based Design",
                  val: "Patients need to feel safe before booking.",
                },
                {
                  label: "HIPAA Ready Foundations",
                  val: "Security and privacy are non-negotiable.",
                },
                {
                  label: "Patient-First UX",
                  val: "Accessible designs for all age groups.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-medical-blue/5 rounded-2xl">
                  <h4 className="font-poppins font-bold text-primary mb-2">
                    {item.label}
                  </h4>
                  <p className="text-text-dark/60 text-sm">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <CTASection
          title="Lets Discuss Your Digital Growth"
          subtitle="Ready to build a website that your patients will love?"
          buttonText="Start Now"
          href="/contact"
          className="my-20"
        />
      </main>
      <Footer />
    </>
  );
}
