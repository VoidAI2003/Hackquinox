"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import './faq.css'; // Import the CSS file here

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlus, setIsPlus] = useState(true); // State for plus/minus toggle

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleIcon = () => {
    setIsPlus(!isPlus); // Toggle between plus and minus
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

  return (
    <div className="faq-background">
      <div className="faq-container p-8 rounded-xl mt-12 mb-4 mx-auto 5 bg-clip-border  p-4 rounded-lg">
        {/* FAQ Section */}
        <div className="w-full max-w-5xl bg-black bg-opacity-0 p-8 rounded-xl border border-pink-500/20 mt-24 mx-auto">
          <div className={`space-y-4 text-red-500`} style={{ fontFamily: 'var(--font-exo2)' }}>
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-4xl">{faq.question}</span>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="border-pink-500 hover:text-pink-400 transition-colors group"
                  >
                    <svg
                      className="w-10 h-10 stroke-pink-800 group-hover:stroke-pink-400 group-active:stroke-pink-300 duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        strokeWidth="1.5"
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      ></path>
                      <path strokeWidth="1.5" d="M8 12H16"></path>
                      <path strokeWidth="1.5" d="M12 16V8"></path>
                    </svg>
                  </button>
                </div>
                <hr className="my-4 border-t-2 border-pink-500" />
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-xl"
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
        <div className="w-[800px] p-8 rounded-xl mt-12 mb-4 mx-auto border-4 bg-black/95 bg-clip-border border-pink-500 p-4 rounded-lg">
          <h2
            className={` text-4xl md:text-5xl text-white text-center mb-8`}
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            More Queries?
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            {[
              { href: "mailto:example@gmail.com", icon: Mail, label: "example@gmail.com" },
              { href: "tel:989xxxxxx", icon: Phone, label: "989xxxxxx" },
              { href: "tel:989xxxxxx", icon: Phone, label: "989xxxxxx" },
              { href: "https://discord.com/users/username", icon: FaDiscord, label: "@username" },
            ].map(({ href, icon: Icon, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                className="flex flex-col items-center gap-4 text-white hover:text-white transition-colors border-4 border-transparent p-4 rounded-lg bg-black/95 bg-clip-border"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="Btn">
                  <div className="BG"></div>
                  <div className="svgContainer">
                    <Icon className="w-12 h-12" />
                  </div>
                </div>
                <span className="text-white">{label}</span>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
