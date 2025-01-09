// Faq.tsx
"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import './faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    { href: "https://discord.com/users/username", icon: FaDiscord, label: "@username" },
  ];

  return (
    <div className="faq-background min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="faq-container max-w-7xl mx-auto py-8 sm:py-12">
        {/* FAQ Section */}
        <div className="w-full bg-black/0 rounded-xl border border-pink-500/20 mt-12 sm:mt-24 p-4 sm:p-8">
          <div className="space-y-4 text-red-500" style={{ fontFamily: 'var(--font-exo2)' }}>
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="text-lg sm:text-2xl lg:text-4xl">{faq.question}</span>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="shrink-0 border-pink-500 hover:text-pink-400 transition-colors group"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 stroke-pink-800 group-hover:stroke-pink-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path strokeWidth="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
                      <path strokeWidth="1.5" d="M8 12H16"></path>
                      <path strokeWidth="1.5" d="M12 16V8"></path>
                    </svg>
                  </button>
                </div>
                <hr className="my-4 border-t-2 border-pink-500" />
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-base sm:text-lg lg:text-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 rounded-xl mt-8 sm:mt-12 border-4 bg-black/95 bg-clip-border border-pink-500">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-6 sm:mb-8" 
              style={{ fontFamily: "var(--font-exo2)" }}>
            More Queries?
          </h2>

          <motion.div
            className="flex flex-col sm:grid sm:grid-cols-4 gap-4 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map(({ href, icon: Icon, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                className="flex items-center sm:flex-col gap-4 sm:gap-4 text-white p-4 rounded-lg bg-black/95 bg-clip-border border-4 border-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="Btn w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <div className="BG"></div>
                  <div className="svgContainer">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <span className="text-sm sm:text-base">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}