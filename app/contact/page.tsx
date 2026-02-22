"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import { cn } from "@/ui/utils";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <SectionWrapper className="bg-medical-blue/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-text-dark">
              Let's Build Your{" "}
              <span className="text-primary">Digital Authority</span>
            </h1>
            <p className="text-lg text-text-dark/70 font-inter max-w-2xl mx-auto">
              Ready to attract more patients? Fill out the form below, and our
              healthcare experts will get back to you with a custom strategy.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-poppins font-bold text-3xl text-text-dark">
                  Get in Touch
                </h2>
                <p className="text-text-dark/70 leading-relaxed">
                  Whether you are a solo practitioner or a large hospital
                  network, we have the expertise to help you grow.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <Mail className="text-primary" />,
                    label: "Email Us",
                    val: "contact@sushabhan.tech",
                  },
                  {
                    icon: <Phone className="text-primary" />,
                    label: "Call Us",
                    val: "+91 97325 50799",
                  },
                  {
                    icon: <MapPin className="text-primary" />,
                    label: "Visit Us",
                    val: "Kharagpur, West Bengal, India | 721302",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="bg-medical-blue/5 p-4 rounded-2xl shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-text-dark">
                        {item.label}
                      </h4>
                      <p className="text-text-dark/60">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919732550799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <MessageSquare />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-medical-blue/10 shadow-xl relative overflow-hidden">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-20"
                >
                  <div className="bg-medical-green/10 p-6 rounded-full text-medical-green mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-text-dark">
                    Message Sent!
                  </h3>
                  <p className="text-text-dark/70">
                    Thank you for reaching out. Our team will contact you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-dark/70 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. Nayan Sharma"
                        className="w-full px-5 py-4 rounded-xl bg-medical-blue/5 border border-medical-blue/5 focus:border-primary focus:bg-white transition-all outline-none"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-dark/70 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="nayan@gmail.com"
                        className="w-full px-5 py-4 rounded-xl bg-medical-blue/5 border border-medical-blue/5 focus:border-primary focus:bg-white transition-all outline-none"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-dark/70 ml-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 97325 50799"
                        className="w-full px-5 py-4 rounded-xl bg-medical-blue/5 border border-medical-blue/5 focus:border-primary focus:bg-white transition-all outline-none"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-dark/70 ml-1">
                        Hospital / Clinic Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="City Health Center"
                        className="w-full px-5 py-4 rounded-xl bg-medical-blue/5 border border-medical-blue/5 focus:border-primary focus:bg-white transition-all outline-none"
                        value={formState.clinic}
                        onChange={(e) =>
                          setFormState({ ...formState, clinic: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-dark/70 ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your digital goals..."
                      className="w-full px-5 py-4 rounded-xl bg-medical-blue/5 border border-medical-blue/5 focus:border-primary focus:bg-white transition-all outline-none resize-none"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={cn(
                      "w-full py-5 rounded-2xl font-bold text-lg text-white transition-all shadow-xl flex items-center justify-center gap-2",
                      isSubmitting
                        ? "bg-primary/50 cursor-not-allowed"
                        : "bg-primary hover:bg-secondary active:scale-[0.98]",
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </SectionWrapper>

        {/* Map Placeholder */}
        <SectionWrapper className="bg-medical-blue/5 py-0 px-0 md:px-0 lg:px-0">
          <div className="w-full h-96 bg-medical-blue/10 flex items-center justify-center border-y border-medical-blue/20">
            <div className="text-primary/30 font-bold text-xl uppercase tracking-widest flex items-center gap-2">
              <MapPin />
              Google Maps Integration
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
