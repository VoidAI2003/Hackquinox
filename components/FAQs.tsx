"use client";
import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import "./faq.css";
import LampHeader from "./ui/lamp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 ${
        isOpen ? 'stroke-pink-300 drop-shadow-[0_0_10px_#ff007f]' : 'stroke-pink-500'
      }`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {!isOpen && (
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="16"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );

  const faqData = [
    { question: "What is HackQuinox?", answer: "HackQuinox is a 24-hour hackathon where participants collaborate to create innovative solutions to real-world problems." },
    { question: "Who can participate in HackQuinox?", answer: "HackQuinox is open to students, professionals, and enthusiasts of all skill levels." },
    { question: "What is the duration of the hackathon?", answer: "The hackathon lasts for 24 hours, starting at 9 AM on Saturday and ending at 9 AM on Sunday." },
    { question: "Is there a registration fee?", answer: "No, participation in HackQuinox is completely free." },
    { question: "Will there be any prizes?", answer: "Yes, there are exciting prizes for winners, including cash awards, swag, and more." },
    { question: "Are team projects allowed?", answer: "Yes, participants can work in teams of up to 4 members." },
    { question: "Do I need to bring my own equipment?", answer: "Yes, participants should bring their own laptops, chargers, and any other necessary equipment." },
    { question: "Will food and drinks be provided?", answer: "Yes, we will provide meals, snacks, and beverages throughout the event." },
    { question: "Can I participate remotely?", answer: "HackQuinox is an in-person event; remote participation is not allowed." },
    { question: "How can I contact the organizing team?", answer: "You can reach out to us via email at support@hackquinox.com or through our social media channels." },
    { question: "What are the judging criteria?", answer: "Projects will be judged based on innovation, technical difficulty, design, and impact on the community." },
    { question: "Can I modify my project after submission?", answer: "No, once a project is submitted, no further modifications are allowed." },
    { question: "What technologies are allowed?", answer: "Any programming languages and frameworks can be used. However, we encourage using open-source tools and technologies." },
    { question: "Is mentorship available?", answer: "Yes, mentors will be available throughout the event to assist participants." },
    { question: "Where is the event taking place?", answer: "The event will be held at [Event Venue]. Detailed location will be provided upon registration." },
  ];

  const contactInfo = [
    { href: "mailto:example@gmail.com", icon: Mail, label: "example@gmail.com" },
    { href: "tel:989xxxxxx", icon: Phone, label: "989xxxxxx" },
    { href: "tel:989xxxxxx", icon: Phone, label: "989xxxxxx" },
    { href: "https://discord.com/users/username", icon: MessageCircle, label: "@username" },
  ];

  return (
    <>
    <LampHeader
      text="Frequntly Asked Questions"
    lampColor="#ff007f"
    />
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        {/* FAQ Section */}
        <div className="w-full rounded-xl border border-pink-500/20 mt-12 sm:mt-24 p-4 sm:p-8">
          <div className="space-y-4 text-red-500">
            {faqData.map((faq, index) => (
              <div key={index} className="text-white transition-all duration-300">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-xl sm:text-xl lg:text-4xl transition-all duration-300">{faq.question}</span>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className={`shrink-0 transition-all duration-300 hover:scale-110 ${
                      openIndex === index ? 'scale-110' : ''
                    }`}
                  >
                    <PlusMinusIcon isOpen={openIndex === index} />
                  </button>
                </div>
                <hr
                  className={`my-4 border-t-2 transition-all duration-300 ${
                    openIndex === index
                      ? 'border-pink-300 drop-shadow-[0_0_10px_#ff007f]'
                      : 'border-pink-500'
                  }`}
                />
                <div className="answer-container overflow-hidden transition-all duration-300">
                  <div
                    className={`answer-content ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <p className="text-xl sm:text-lg lg:text-2xl transition-all duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 rounded-xl mt-8 sm:mt-12 border-4 bg-black/95 border-pink-500">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-6 sm:mb-8">
            More Queries?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">

            {contactInfo.map(({ href, icon: Icon, label }, idx) => (
              <a
                key={idx}
                href={href}
                className="flex flex-col items-center gap-4 text-white p-4 rounded-lg bg-black/95 border-4 border-transparent hover:scale-105 transition-transform"
              >
                <div className="Btn w-10 h-10 sm:w-12 sm:h-12">
                  <div className="BG" />
                  <div className="svgContainer">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <span className="text-sm sm:text-base text-center">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}