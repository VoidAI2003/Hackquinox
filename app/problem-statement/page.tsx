'use client';

import React, { useState, useEffect } from 'react';
import { Orbitron, Montserrat } from 'next/font/google';
import './pscards.css';
import './ps-button.css';

const orbitron = Orbitron({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function PS() {
  const [currentDomainIndex, setCurrentDomainIndex] = useState<number>(0);

  // Data structure for domains and their problems
  const domains = [
    {
      domain: "WEB DEV",
      problems: [
        {
          title: "1. Local Farmer's Market Finder",
          description: ` Consumers often struggle to locate nearby farmers' markets
 and access information about available produce, pricing, and
 vendor details. This problem statement highlights the need for
 a web or mobile application that connects consumers with local
 farmers' markets, enabling them to discover nearby markets,
 explore fresh, locally-sourced produce, track product availability
 and prices, and support sustainable consumption. 
          \n<strong>Key Features:</strong>
          - <strong>Market Search:</strong> Enables users to find nearby markets based on location or produce type, ensuring they can easily discover relevant markets.
          - <strong>Produce Listings:</strong> Allows users to view available products and prices, helping them plan their purchases and budget effectively.
          - <strong> Interactive Map:</strong> Provides users with directions to markets, ensuring they can easily locate them.
          - <strong>User Reviews:</strong> Rate and review markets.
          - <strong>Pre-ordering:</strong> Order products for pickup.
          - <strong>Market / Vendor Tracking:</strong> Allows users to favorite markets / vendors and receive stock updates, ensuring they don’t miss out on desired products`,
        },
        {
          title: "2. Centralized Alumni Engagement Platform ",
          description: `Alumni networks often lack active engagement due to the absence of a structured and centralized platform. 
          \n<strong>Description:</strong> Create a platform to bridge the gap between alumni and the institution, facilitating mentoring, job opportunities, participation in events, and donations.
          \n<strong>Expected System:</strong> 
          • Authentication via email or LinkedIn OAuth.
          • Event calendar with RSVP functionality. 
          • Job board for postings and applications. 
          • Mentorship program with scheduling. `
          ,
        },
      ],
    },
    {
      domain: "AI/ML",
      problems: [
        {
          title: "1.  AI-Powered Skill Development Platform for Youth:",
          description: `Vivek, a student from a small town in West Bengal, has completed his basic education but feels unprepared for the job market. With limited access to career guidance, he is unsure about which skills to focus on or how to start.
\n<strong>Challenge for Participants:</strong>
Design an AI-powered prototype of a platform to help students like Vivek identify skill gaps and provide personalized guidance.\nThe platform should:
<strong>Assess Basic Skills:</strong> Implement a quick self-assessment module to identify a student's current skill level.
<strong>Recommend Learning Paths:</strong> Provide personalized suggestions for courses or resources based on the student's goals and market trends.
<strong>Track Progress:</strong> Offer simple progress tracking through periodic assessments or milestones.
<strong>Actionable Feedback:</strong> Include at least one feature that delivers specific feedback or activities to help students improve in key areas.
`
          ,
        },
        {
          title: "2. AI for Air Pollution Forecasting",
          description: ` Rising pollution levels and limited access to real-time air quality data make it challenging for individuals to take proactive measures to protect their health and the environment. The problem statement highlights the need to create a web-based AI tool that forecasts air quality levels using meteorological and pollution data, delivers real time AQI updates, and provides actionable recommendations for reducing pollution. The tool will enhance user awareness, help mitigate health risks, and promote environmental sustainability
\n<strong>Key Features:</strong>
<strong>Real-Time Air Quality Monitoring:</strong> Display live AQI levels and pollutant breakdown (e.g., PM2.5, NO2).
<strong>Location-Based Forecasts:</strong> Provide hourly, daily, and weekly air quality predictions for specific regions.
<strong>Pollution Hotspot Visualization:</strong> Highlight areas with high pollution on an interactive map.
<strong>Personalized Alerts:</strong> Notify users of hazardous AQI levels with health advisories.
<strong>Recommendations:</strong> Suggest actions to reduce pollution (e.g., using public transport) and protect health (e.g., using masks).
<strong>User-Friendly Dashboard:</strong> Include interactive graphs, heatmaps, and pollutant data visualization`

          ,
        },
        {
          title: "3. Early Detection of Learning Disabilities Cause",
          description: `Learning disabilities, such as dyslexia, often go undetected in early stages due to subtle symptoms and a lack of accessible tools for monitoring and analysis.
        \n<strong>Challenge for Participants:</strong>
        Develop an AI-based system to analyze patterns in student performance, focusing on the early detection of a <strong>specific learning disability</strong> (e.g., dyslexia). 
        The system will classify potential cases using basic machine learning models and provide actionable <strong>insights</strong> through visual reports for educators. 
        The system aims to support <strong>early intervention</strong> strategies by simulating data-driven scenarios.
        <strong>Expected System:</strong> 
        • A machine learning-based classifier trained on simulated or anonymized data to detect patterns indicative of a specific learning disability.
        `
          ,
        },
      ],
    },
    {
      domain: "BLOCKCHAIN",
      problems: [
        {
          title: "1. Secure Voting System on Blockchain ",
          description: `Traditional voting methods are prone to tampering and fraud, often leading to disputes and undermining public trust in the electoral process. They also face challenges like logistical inefficiencies, high costs, and limited accessibility for certain populations. The problem statement highlights the need to develop a blockchain-based voting system ensuring voter anonymity and tamper-proof results.
\n<strong>Description:</strong> Develop a blockchain-based voting system ensuring voter anonymity and tamper-proof results. 
\n<strong> Key features:</strong> 
• Authentication with unique voter IDs. 
• Smart contracts to record and validate votes. 
• Real-time results dashboard. 
• Transparent public ledger. 
` 
          ,
        },
        {
          title: "2. Phishing Email Detector",
          description: `<strong>Cause:</strong> Phishing attacks exploit user ignorance to steal sensitive information. Description: Create a tool to analyze email metadata and content for phishing indicators.
 \n<strong>Expected System:</strong> 
• Email parsing using Python libraries. 
• Rule-based detection for phishing traits. 
• Dashboard displaying flagged emails. 
• Alerts for users. 
Resources: 
1. Python email parsing library documentation. 
2. Scikit-learn for text classification. 
3. Phishing prevention guide by OWASP`
          ,
        },
      ],
    },
  ];

  // Initialize domain index from localStorage or default to 0
  useEffect(() => {
    const storedDomainIndex = localStorage.getItem('domainIndex');
    if (storedDomainIndex) {
      setCurrentDomainIndex(Number(storedDomainIndex));
    }
  }, []);

  // Store the domain index to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('domainIndex', currentDomainIndex.toString());
    history.pushState({ domainIndex: currentDomainIndex }, '', window.location.href); // Update history state
  }, [currentDomainIndex]);

  // Handle 'Next' and 'Previous' button click
  const handleNext = () => {
    setCurrentDomainIndex((prevIndex) => (prevIndex + 1) % domains.length);
  };

  const handlePrev = () => {
    setCurrentDomainIndex((prevIndex) => (prevIndex - 1 + domains.length) % domains.length);
  };

  const handleBackToMain = () => {
    window.location.href = '/'; // Go to the homepage explicitly
  };

  // Handle browser back and forward button (popstate)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Check if there's a state to navigate to
      if (event.state?.domainIndex !== undefined) {
        setCurrentDomainIndex(event.state.domainIndex);
      } else {
        window.location.href = '/'; // Go to the homepage if it's an invalid state
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-4 md:gap-8 w-full min-h-screen py-6 md:py-12 bg-[#00050C] px-4 md:px-8">
      {/* Navigation Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <div className="button-borders">
          <button className="primary-button" onClick={handleBackToMain}>
            Back
          </button>
        </div>
      </div>
  
      <div className="w-full flex flex-col items-center gap-4 md:gap-8">
        <div className="title-container w-full">
          <h2 className={`${orbitron.className} text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center`}>
            {domains[currentDomainIndex]?.domain || "Domain not found"}
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-7xl">
          {domains[currentDomainIndex]?.problems?.map((problem, problemIndex) => (
            <div
              key={problemIndex}
              className="relative bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="bg-[#181818] rounded-2xl p-4 md:p-6 h-full">
                <h3 className={`${orbitron.className} text-base md:text-lg lg:text-xl font-bold text-white mb-3`}>
                  {problem.title}
                </h3>
                <div
                  className={`${montserrat.className} text-sm md:text-base text-gray-300 space-y-2`}
                  style={{ whiteSpace: 'pre-line' }}
                  dangerouslySetInnerHTML={{ __html: problem.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <div className="button-borders">
          <button className="primary-button" onClick={handlePrev}>
            Previous
          </button>
        </div>
        <div className="button-borders">
          <button className="primary-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
