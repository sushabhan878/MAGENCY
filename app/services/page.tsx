"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import PricingCard from "../components/PricingCard";
import CTASection from "../components/CTASection";

const packages = [
  {
    title: "Starter Package",
    price: "3,000",
    description:
      "Perfect for individual clinics or start-up practices looking for a professional presence.",
    features: [
      "3 Pages (Home, About, Services)",
      "Fully Mobile Responsive",
      "Basic SEO Setup",
      "WhatsApp Integration",
      "Google Map Integration",
      "3 Days Delivery",
    ],
  },
  {
    title: "Growth Package",
    price: "5,000",
    description:
      "Designed for growing healthcare brands that need localized search authority and basic automation.",
    features: [
      "5-7 Pages",
      "Custom Appointment Form",
      "Speed Optimization",
      "On-Page Local SEO",
      "Testimonials Section",
      "5 Days Delivery",
    ],
    isPopular: true,
  },
  {
    title: "Authority Package",
    price: "10,000",
    description:
      "The complete digital infrastructure for hospitals and multi-specialty centers.",
    features: [
      "8-12 Pages",
      "Advanced Appointment System",
      "Blog/Education Hub Setup",
      "Google Analytics & Heatmaps",
      "Conversion Optimized Design",
      "Advanced Security Setup",
      "1 Month Free Support",
      "10 Days Delivery",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Services Page Header */}
        <SectionWrapper className="bg-medical-blue/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-text-dark">
              Transparent Pricing for <br />
              <span className="text-primary">Medical Excellence</span>
            </h1>
            <p className="text-lg text-text-dark/70 font-inter max-w-2xl mx-auto">
              Choose a package that fits your current practice size and future
              growth ambitions. No hidden costs. No generic templates.
            </p>
          </div>
        </SectionWrapper>

        {/* Pricing Layout */}
        <SectionWrapper className="bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch pt-12">
            {packages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} />
            ))}
          </div>
        </SectionWrapper>

        {/* Comparison or Detail Note */}
        <SectionWrapper className="bg-medical-blue/5 border-y border-medical-blue/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="font-poppins font-bold text-2xl text-text-dark">
              Need Something Specific?
            </h3>
            <p className="text-text-dark/70">
              We also offer custom solutions for large hospital chains,
              diagnostic centers, and medical software integrations. If none of
              these packages fit your needs, let's talk.
            </p>
          </div>
        </SectionWrapper>

        <CTASection
          title="Ready to Scale Your Healthcare Practice?"
          subtitle="Join the digital revolution in healthcare today."
          buttonText="Get Your Proposal"
          href="/contact"
          className="my-20"
        />
      </main>
      <Footer />
    </>
  );
}
