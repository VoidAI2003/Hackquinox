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
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5" strokeLinecap="round" />
      {!isOpen && (
        <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );

  const renderAnswer = (answer: string) => {
    // New regex pattern to better match the numbered list format
    const numberedListPattern = /^(.*?)(?=\s*1\.\s)|(?:\d+\.\s*)(.*?)(?=(?:\d+\.|$))/g;
    let matches = [...answer.matchAll(numberedListPattern)];
    
    if (matches.length > 1) { // If we found a numbered list pattern
      const intro = matches[0][1]?.trim(); // Get the introduction text
      const points = matches
        .slice(1) // Skip the intro match
        .map(match => match[2]?.trim()) // Get just the point content
        .filter(Boolean); // Remove any undefined/empty entries

      return (
        <div className="space-y-4">
          {intro && <p className="text-xl sm:text-lg lg:text-2xl">{intro}</p>}
          <div className="space-y-4 ml-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-pink-500 font-bold min-w-[1.5rem]">
                  {idx + 1}.
                </span>
                <p className="text-xl sm:text-lg lg:text-2xl">{point}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // If no numbered list is found, return the text as is
    return (
      <p className="text-xl sm:text-lg lg:text-2xl transition-all duration-300">
        {answer}
      </p>
    );
  };

  const faqData = [
    {
      question: "What is HackQuinox 2025?",
      answer: "HackQuinox is a multi-round hackathon organized by FCRIT, Navi Mumbai, in collaboration with CSI-FCRIT and the AIDL Club. It offers students a platform to innovate and tackle real-world challenges in domains like AI/ML, Web Development, and Cybersecurity through idea submissions, coding, and final presentations."
    },
    {
      question: "Who can participate in HackQuinox?",
      answer: "HackQuinox invites college students passionate about tech and innovation. Whether a beginner or expert, if you enjoy creativity and teamwork, this is your platform!"
    },
    {
      question: "What is the duration of the hackathon?",
      answer: "The duration of HackQuinox spans across three phases: 1. Online idea submission (self-paced, deadline: 28/01/24) 2. A 10-hour offline coding round where selected teams build their prototypes 3. The final presentation round, conducted on the day after Round 2"
    },
    {
      question: "Is there a registration fee?",
      answer: "The first round (idea submission) is free for all. If your idea get selected, a ₹400 fee per team is required for the 10-hour offline coding round."
    },
    {
      question: "Will there be any prizes?",
      answer: "Yes, the winners of HackQuinox will be awarded cash prizes and exciting goodies, along with certificates of achievement."
    },
    {
      question: "Are team projects allowed?",
      answer: "Yes, team projects are allowed in HackQuinox. Participants can form teams to collaborate on their ideas and develop solutions with a team size of 2 to 4"
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: "For the 10-hour offline coding round, desktops with internet access will be provided. If you use your own laptop, you must arrange your own Wi-Fi, as no internet will be provided for personal devices."
    },
    {
      question: "Will food and drinks be provided?",
      answer: "Yes, food and drinks will be provided during the 10-hour offline coding round to keep participants energized and focused."
    },
    {
      question: "Can I participate remotely?",
      answer: "HackQuinox 2025 is an offline hackathon. Participants must attend the venue for the 10-hour coding round and final presentation. Remote participation is not allowed."
    },
    {
      question: "How can I contact the organizing team?",
      answer: "To contact the organizing team: 1. Official Website: Check for contact details or form on the event website 2. Social Media: Message their official handles on Facebook, Instagram, or Twitter 3. College/Club Reps: Reach out through CSI-FCRIT or AIDL Club representatives for assistance"
    }
  ];

  return (
    <>
      <LampHeader 
        text="Frequently Asked Questions"
        lampColor="#ff007f"
      />
      <div id="faq-section" className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8 sm:py-12">
          <div className="w-full rounded-xl border border-pink-500/20 mt-12 sm:mt-24 p-4 sm:p-8">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="text-white transition-all duration-300">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-xl sm:text-xl lg:text-4xl transition-all duration-300">
                      {faq.question}
                    </span>
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
                  <div 
                    className={`grid transition-all duration-300 ${
                      openIndex === index 
                        ? 'grid-rows-[1fr] opacity-100' 
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="py-2">
                        {renderAnswer(faq.answer)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}