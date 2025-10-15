import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      text: "Chirang District, Assam, India",
      type: "location",
    },
    {
      icon: Phone,
      text: "+91 94351 39432",
      type: "phone",
    },
    {
      icon: Mail,
      text: "mananjay.daimary@mananjay.com",
      type: "email",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <div
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 via-gray-50 to-orange-50 flex items-center justify-center relative overflow-hidden"
      id="contact"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="max-w-2xl w-full relative z-10">
        {/* Contact Information Cards */}
        <div className="space-y-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200/50 hover:border-orange-400/70"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-lg font-medium break-words">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
