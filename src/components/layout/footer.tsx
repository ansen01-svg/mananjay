"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Chirang District, Assam, India",
    link: null,
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 94351 39432",
    link: "tel:+919435139432",
  },
  {
    icon: Mail,
    title: "Email",
    content: "mananjay.daimary@mananjay.com",
    link: "mailto:mananjay.daimary@mananjay.com",
  },
];

export const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#facebook" },
  { icon: Twitter, label: "Twitter/X", href: "https://x.com/MananjayDa2415" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/mananright1/",
  },
  {
    icon: Youtube,
    label: "LinkedIn",
    href: "https://www.youtube.com/@MananjayDaimary",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Premium decorative top border */}
      <div className="h-1 bg-orange-500"></div>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">
                  Mananjay Daimary
                </h3>
                <div className="h-1 w-16 bg-orange-500 rounded-full mb-4"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dedicated to Serving the People of Chirang
                </p>
              </div>
              <p className="text-gray-500 text-xs">
                Political Leader & Community Development Advocate
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6 text-white">
                Get in Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-gray-300 mb-1">
                        {item.title}
                      </h5>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm hover:underline decoration-orange-500"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Mananjay Daimary. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      </footer>
    </div>
  );
};

export default Footer;
