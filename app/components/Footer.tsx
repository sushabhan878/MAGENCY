import Link from "next/link";
import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-medical-blue/10 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <span className="font-poppins font-bold text-2xl text-primary">
              Magency
            </span>
          </Link>
          <p className="text-text-dark/70 leading-relaxed text-sm">
            Providing high-converting, premium web development solutions
            exclusively for the healthcare industry. Trustworthy, clean, and
            patient-focused designs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 text-text-dark">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {["Home", "About", "Services", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 text-text-dark">
            Our Services
          </h4>
          <ul className="space-y-4">
            {[
              "Clinic Website Design",
              "Hospital Portals",
              "Medical SEO",
              "Appointment Systems",
              "Healthcare Branding",
            ].map((item) => (
              <li key={item}>
                <span className="text-text-dark/70 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 text-text-dark">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-text-dark/70">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span>Kharagpur, West Bengal, India | 721302</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-dark/70">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+91 97325 50799</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-dark/70">
              <Mail size={18} className="text-primary shrink-0" />
              <span>contact@sushabhan.tech</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-medical-blue/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-dark/50 text-xs">
          © {currentYear} Magency Healthcare Web Agency. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-text-dark/50">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
