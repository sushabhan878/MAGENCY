"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";

const testimonials = [
    {
        name: "Dr. Arvind Sharma",
        role: "Clinic Owner",
        feedback: "Magency transformed our digital presence. Since the new website launch, our appointment bookings have increased by 40%. The design is clean and exactly what our patients needed.",
    },
    {
        name: "Priya Menon",
        role: "Hospital Director",
        feedback: "The level of professionalism and understanding of healthcare needs is unmatched. They delivered a complex hospital portal within the promised timeframe.",
    },
    {
        name: "Dr. Rajesh Gupta",
        role: "Diagnostic Center Head",
        feedback: "Highly recommended for any healthcare business. Their SEO strategy helped us rank #1 in local searches for blood tests and health checkups.",
    },
    {
        name: "Dr. Sarah D'Souza",
        role: "Dental Clinic Head",
        feedback: "The appointment integration is seamless. It has significantly reduced the administrative burden on our front desk staff.",
    },
    {
        name: "Amit Verma",
        role: "Pharmacy Chain CEO",
        feedback: "They don't just build websites; they build digital trust. The healthcare-specific UI they created for our brand is premium and professional.",
    },
    {
        name: "Dr. Vikram Seth",
        role: "Multi-specialty Clinic Lead",
        feedback: "Finally, an agency that speaks 'Doctor'. They understood our compliance needs and patient privacy concerns from day one.",
    },
];

export default function Testimonials() {
    return (
        <>
            <Navbar />
            <main className="flex-grow pt-24">
                {/* Testimonials Header */}
                <SectionWrapper className="bg-medical-blue/5">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="font-poppins font-bold text-4xl md:text-6xl text-text-dark">
                            What Healthcare <span className="text-primary">Leaders Say</span>
                        </h1>
                        <p className="text-lg text-text-dark/70 font-inter max-w-2xl mx-auto">
                            We take pride in building long-term digital partnerships with healthcare providers. Here is what they have to say about our work.
                        </p>
                    </div>
                </SectionWrapper>

                {/* Testimonials Grid */}
                <SectionWrapper className="bg-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                </SectionWrapper>

                <CTASection
                    title="Join Our Growing List of Success Stories"
                    subtitle="Experience the Magency difference in healthcare web development."
                    buttonText="Success Stories"
                    href="/contact"
                    className="my-20"
                />
            </main>
            <Footer />
        </>
    );
}
