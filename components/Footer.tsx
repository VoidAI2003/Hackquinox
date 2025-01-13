import React from "react";
import Link from "next/link";
import Image from "next/image";

type FooterLinkType = {
  label: string;
  href: string;
};

type SocialLinkType = {
  platform: string;
  href: string;
  icon: React.ReactNode;
};

const Footer: React.FC = () => {
  const links: FooterLinkType[] = [
    { label: "Code of Conduct", href: "" },
    { label: "FAQs", href: "" },
    { label: "Meet the Team", href: "" },
    { label: "Timeline", href: "" },
  ];

  const socialLinks: SocialLinkType[] = [
    {
      platform: "Mail",
      href: "",
      icon: <Image src="/mail.jpg" alt="Mail Icon" width={40} height={40} />,
    },
    {
      platform: "Instagram",
      href: "",
      icon: <Image src="/Instagram.jpg" alt="Instagram Icon" width={40} height={40} />,
    },
    {
      platform: "Discord",
      href: "",
      icon: <Image src="/Discord.jpg" alt="Discord Icon" width={40} height={40} />,
    },
    {
      platform: "Linkedin",
      href: "",
      icon: <Image src="/Linkedin.jpg" alt="Instagram Icon" width={40} height={40} />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Footer */}
      <footer className="bg-[#010002] text-gray-300 w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
          {/* Main grid container with responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start space-y-4 order-1">
              <span className="flex items-center space-x-4">
                <Image
                  src="/logo.svg"
                  alt="Hackathon Image"
                  width={200}
                  height={100}
                  className="rounded-lg max-w-[150px] md:max-w-[200px] w-auto h-auto"
                />
                <Image
                  src="/Divider.jpg"
                  alt="Divider"
                  width={3.4}
                  height={25}
                  className="hidden md:block ml-auto mr-auto"
                />
              </span>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center md:items-start space-y-4 order-3 md:order-2">
              <h3
                className="text-2xl md:text-3xl font-medium mb-2 md:text-[30px]"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                Location
              </h3>
              <Image
                src="/FCRIT.png"
                alt="location"
                width={300}
                height={250}
                className="object-contain w-full max-w-[250px] md:max-w-[300px]"
              />
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 justify-center w-full md:ml-auto md:mr-auto mt-2">
                <Image
                  src="/LocationIcon.jpg"
                  alt="Location Icon"
                  width={45}
                  height={45}
                  className="mt-1"
                />
                <div className="flex flex-col text-center md:text-justify" style={{ fontFamily: "var(--font-exo2)" }}>
                  <p className="text-base md:text-lg">FCRIT, near Noor Masjid, Juhu</p>
                  <p className="text-base md:text-lg">
                    Nagar, Sector 9A, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col items-center md:items-start space-y-4 order-2 md:order-3">
              <h3
                className="text-2xl md:text-[30px] font-medium mb-4"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Socials
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-2 items-center justify-center w-full max-w-[200px]">
                {socialLinks.map((social) => (
                  <a key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors duration-200 flex justify-center"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center md:items-start space-y-4 order-4">
              <h3
                className="text-2xl md:text-[30px] font-medium mb-4"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 text-base md:text-lg"
                      style={{ fontFamily: "var(--font-exo2)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="flex items-center justify-center md:justify-start gap-4 w-full">
                <Image 
                  src="/csi fcrit logo.png" 
                  alt="CSI Comps FCRIT" 
                  width={87} 
                  height={87} 
                  className="rounded-full w-[60px] h-[60px] md:w-[87px] md:h-[87px]" 
                />
                <Image 
                  src="/aidl_logo.png" 
                  alt="AIDL FCRIT" 
                  width={100} 
                  height={100} 
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" 
                />
              </span>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-4 border-t border-gray-800 text-center">
            <p className="text-sm md:text-base" style={{ fontFamily: "Share Tech Mono, monospace" }}>
              Made by the CSI Comps FCRIT and AIDL FCRIT Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;