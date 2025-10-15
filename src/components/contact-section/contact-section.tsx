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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full">
        {/* Contact Information Cards */}
        <div className="space-y-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF8B6A] to-[#FF6B4A] rounded-full flex items-center justify-center shadow-md">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-lg font-medium">
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
              className="w-14 h-14 bg-[#FF8B6A] rounded-full flex items-center justify-center text-white hover:bg-[#FF6B4A] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Dedicated to Serving the People of Chirang
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
