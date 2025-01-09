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
    <div className=" flex flex-col">
      {/* Main Content Area */}

      {/* Footer */}
      <footer className="bg-[#00050C] text-gray-300 w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <span className="flex items-center space-x-4">
                <Image
                  src="/logo.svg"
                  alt="Hackathon Image"
                  width={200}
                  height={100}
                  className="rounded-lg"
                />
                <Image
                  src="/Divider.jpg"
                  alt="Divider"
                  width={3.4}
                  height={25}
                  className="ml-auto mr-auto"
                />
              </span>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3
                className="text-3xl font-medium mb-2 text-[30px]"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                Location
              </h3>
              <Image
                src="/FCRIT.png"
                alt="location"
                width={300}
                height={250}
                className="object-contain"
              />
              <div className="flex items-start gap-2 justify-center ml-auto mr-auto mt-2">
                <Image
                  src="/LocationIcon.jpg"
                  alt="Location Icon"
                  width={45}
                  height={45}
                  className="mt-1"
                />
                <div className="flex flex-col text-justify" style={{ fontFamily: "var(--font-exo2)" }}>
                  <p className="text-lg text-justify">FCRIT, near Noor Masjid, Juhu</p>
                  <p className="text-lg text-justify">
                    Nagar, Sector 9A, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3
                className="text-2xl font-medium mb-4 ml-auto mr-auto text-[30px]"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Socials
              </h3>
              <div className="grid grid-cols-2 gap-2 items-center ml-auto mr-auto">
                {socialLinks.map((social) => (
                  <a key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors duration-200"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3
                className="text-2xl font-medium mb-4 ml-auto mr-auto text-[30px]"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 text-lg"
                      style={{ fontFamily: "var(--font-exo2)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="items-center flex ml-auto mr-auto">
                <Image src="/csi fcrit logo.png" alt="CSI Comps FCRIT" width={87} height={87} className="mr-2 mt-2 rounded-full" />
                <Image src="/aidl_logo.png" alt="AIDL FCRIT" width={100} height={100} className="mt-2" />
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-2 pt-2 border-t border-gray-800 text-center">
            <p className="text-base" style={{ fontFamily: "Share Tech Mono, monospace" }}>
              Made by the CSI Comps FCRIT and AIDL FCRIT Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;