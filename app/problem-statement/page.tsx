'use client';  

import React, { useState } from 'react';
import { Orbitron, Montserrat } from 'next/font/google';
import './pscards.css';
import './ps-button.css'

const orbitron = Orbitron({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function PS() {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  // Data structure for domains and their problem statements
  const domains = [
    {
      domain: "WEB DEV",
   
      problems: [
        {
          title: "1. Local Farmer’s Market Finder",
          description: `Local Farmer’s Market Finder is a web or mobile application designed to bridge the gap between consumers and local farmers' markets. 
          \n<strong>Key Features:</strong>
          - <strong>Market Search:</strong> Find nearby markets by location or produce type.
          - <strong>Produce Listings:</strong> View available products and prices.
          - <strong>Vendor Tracking:</strong> Favorite vendors and get stock updates.
          - <strong>Interactive Map:</strong> Locate markets with directions.
          - <strong>User Reviews:</strong> Rate and review vendors and markets.
          - <strong>Seasonal Calendar:</strong> Track seasonal produce availability.
          - <strong>Pre-ordering:</strong> Order products for pickup.
          - <strong>Event Updates:</strong> See special events at markets.
          - <strong>Responsive Design:</strong> Optimized for mobile and desktop.
          - <strong>Sustainability Info:</strong> Learn about eco-friendly vendor practices.`,
        },
        {
          title: "2. Centralized Alumni Engagement Platform ",
          description: `Alumni networks often lack active engagement due to the absence of a structured and centralized platform. 
          \n<strong>Description:</strong> Create a platform to bridge the gap between alumni and the institution, facilitating mentoring, job opportunities, participation in events, and donations.
          \n<strong>Expected System:</strong> 
          • Authentication via email or LinkedIn OAuth.
          • Event calendar with RSVP functionality. 
          • Job board for postings and applications. 
          • Mentorship program with scheduling. 
          \n<strong>Tech Stack:</strong> React.js, Node.js, MongoDB 
          \n<strong>Resources:</strong> 
          1. Guide on authentication with Node.js and JWT. 
          2. React calendar integration tutorial `
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
<strong>Assess Basic Skills:</strong> Implement a quick self-assessment module to identify a student’s current skill level.
<strong>Recommend Learning Paths:</strong> Provide personalized suggestions for courses or resources based on the student’s goals and market trends.
<strong>Track Progress:</strong> Offer simple progress tracking through periodic assessments or milestones.
<strong>Actionable Feedback:</strong> Include at least one feature that delivers specific feedback or activities to help students improve in key areas.
`
          ,
        },
        {
          title: "2. AI for Air Pollution Forecasting",
          description: `Develop a web-based AI tool that forecasts air quality levels using meteorological and pollution data, provides real-time AQI updates, and offers actionable recommendations to reduce pollution. The tool will empower users with insights to mitigate health risks and improve air quality awareness.
\n<strong>Key Features:</strong>
<strong>Real-Time Air Quality Monitoring:</strong> Display live AQI levels and pollutant breakdown (e.g., PM2.5, NO2).
<strong>Location-Based Forecasts:</strong> Provide hourly, daily, and weekly air quality predictions for specific regions.
<strong>Pollution Hotspot Visualization:</strong> Highlight areas with high pollution on an interactive map.
<strong>Personalized Alerts:</strong> Notify users of hazardous AQI levels with health advisories.
<strong>Recommendations:</strong> Suggest actions to reduce pollution (e.g., using public transport) and protect health (e.g., using masks).
<strong>Historical Trends Analysis:</strong> Show past AQI trends for comparative insights.
<strong>User-Friendly Dashboard:</strong> Include interactive graphs, heatmaps, and pollutant data visualization
<strong>API:</strong> OpenAQ`
          ,
        },
      ],
    },
    {
      domain: "BLOCKCHAIN",
     
      problems: [
        {
          title: "1. Secure Voting System on Blockchain ",
          description: `<strong>Cause:</strong> Traditional voting methods are prone to tampering and fraud. 
\n<strong>Description:</strong> Develop a blockchain-based voting system ensuring voter anonymity and tamper-proof results. 
\n<strong>Expected System:</strong> 
• Authentication with unique voter IDs. 
• Smart contracts to record and validate votes. 
• Real-time results dashboard. 
• Transparent public ledger. 
\n<strong>Tech Stack:</strong> \nEthereum, Solidity, Node.js, React.js. 
\n<strong>Resources:</strong> 
1. Solidity smart contract documentation. 
2. Ethereum development guide. 
3. Blockchain and voting use case studies.` 
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
\n<strong>Tech Stack:</strong> \nPython, Flask, Scikit-learn. Resources: 
1. Python email parsing library documentation. 
2. Scikit-learn for text classification. 
3. Phishing prevention guide by OWASP`
          ,
        },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentDomainIndex((prevIndex) => (prevIndex + 1) % domains.length);
  };
  
  const handlePrev = () => {
    setCurrentDomainIndex((prevIndex) => (prevIndex - 1 + domains.length) % domains.length);
  };
  
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 w-full min-h-screen py-6 md:py-12 bg-[#00050C] px-4 md:px-8">
    <div className="w-full flex flex-col items-center gap-4 md:gap-8 mt-8 md:mt-12">
      <div className="title-container w-full">
        <h2 className={`${orbitron.className} text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center`}>
          {domains[currentDomainIndex].domain}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-7xl">
        {domains[currentDomainIndex].problems.map((problem, problemIndex) => (
          <div key={problemIndex} className="relative bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
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