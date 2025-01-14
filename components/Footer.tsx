import React from "react";
import Link from "next/link";
import Image from "next/image";

type FooterLinkType = {
  label: string;
  href: string;
  onClick?: () => void;
};

const Footer: React.FC = () => {
  const handleFaqClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      const faqSectionTop = faqSection.getBoundingClientRect().top;
      const faqSectionBottom = faqSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
  
      // Check if the FAQ section is already fully or partially in view
      if (faqSectionTop > 0 || faqSectionBottom < viewportHeight) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  const handleScheduleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior
    const scheduleSection = document.getElementById("schedule-section");
    if (scheduleSection) {
      const scheduleSectionTop = scheduleSection.getBoundingClientRect().top;
      const scheduleSectionBottom = scheduleSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
  
   
      if (scheduleSectionTop > 0 || scheduleSectionBottom < viewportHeight) {
        scheduleSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const links: FooterLinkType[] = [
    { label: "FAQs", href: "#", onClick: handleFaqClick },
    { label: "Timeline", href: "#", onClick: handleScheduleClick }, 
  ];

  const socialLinks = [
    {
      title: "CSI FCRIT",
      links: [
        {
          href: "mailto:info.hackquinox@gmail.com",
          imgSrc: "/mail.jpg",
          alt: "Mail Icon",
          ariaLabel: "Email CSI FCRIT",
        },
        {
          href: "https://www.instagram.com/csifcrit",
          imgSrc: "/Instagram.jpg",
          alt: "Instagram Icon",
          ariaLabel: "CSI Instagram",
        },
        {
          href: "https://www.linkedin.com/company/csi-computer-fcrit",
          imgSrc: "/LinkedIn.jpg",
          alt: "LinkedIn Icon",
          ariaLabel: "CSI LinkedIn",
        },
      ],
    },
    {
      title: "AIDL FCRIT",
      links: [
        {
          href: "mailto:info.hackquinox@gmail.com",
          imgSrc: "/mail.jpg",
          alt: "Mail Icon",
          ariaLabel: "Email AIDL FCRIT",
        },
        {
          href: "https://www.instagram.com/aidl_fcrit?igsh=MXducHl6MHYzNm92dg==",
          imgSrc: "/Instagram.jpg",
          alt: "Instagram Icon",
          ariaLabel: "AIDL Instagram",
        },
        {
          href: "https://www.linkedin.com/company/artificial-intelligence-and-deep-learning-club-fcrit",
          imgSrc: "/LinkedIn.jpg",
          alt: "LinkedIn Icon",
          ariaLabel: "AIDL LinkedIn",
        },
      ],
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
            <div className="flex flex-col items-center md:items-start space-y-6 order-2 md:order-3">
              <h3
                className="text-2xl md:text-[30px] font-medium mb-4"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Socials
              </h3>
              {socialLinks.map((group, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start space-y-4"
                >
                  <h4
                    className="text-xl font-medium mb-2"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    {group.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 md:gap-2 items-center justify-center w-full max-w-[200px]">
                    {group.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200 flex justify-center"
                        aria-label={link.ariaLabel}
                      >
                        <Image src={link.imgSrc} alt={link.alt} width={40} height={40} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
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
  {links.map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        onClick={link.onClick}
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