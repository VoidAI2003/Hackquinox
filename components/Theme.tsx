"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Theme = () => {
  return (
    <>
      <div className="relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A42A93_0%,#E2CBFF_50%,#A42A93_100%)]" />
        <span className="inline-flex cursor-pointer items-center justify-center 
        rounded-xl bg-black px-6 py-5 text-6xl text-white backdrop-blur-3xl"
         style={{ fontFamily: 'var(--font-exo2)' }}>
          Themes
        </span>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-between ">
        <CardContainer className="inter-var flex-1 m-0">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl
           dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
            border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-4xl items-center text-neutral-600 dark:text-white"
              style={{ fontFamily: 'var(--font-exo2)' }}
            >
              Cyber Security
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-2xl max-w-sm mt-2 dark:text-neutral-300"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempor
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/cyber.jpg"
                height="1000"
                width="1000"
                className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black
                 text-white text-xl font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Repeat the CardContainer for the other two cards */}
        <CardContainer className="inter-var flex-1 m-0">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl
           dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
            border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-4xl items-center text-neutral-600 dark:text-white"
              style={{ fontFamily: 'var(--font-exo2)' }}
            >
              Artificial Intelligence 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-2xl max-w-sm mt-2 dark:text-neutral-300"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempor
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/ai.jpg"
                height="1000"
                width="1000"
                className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black
                 text-white text-xl font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex-1 m-0">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
          dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
           border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-4xl items-center text-neutral-600 dark:text-white"
              style={{ fontFamily: 'var(--font-exo2)' }}
            >
              BlockChain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-2xl max-w-sm mt-2 dark:text-neutral-300"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempor
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/blchain.jpg"
                height="1000"
                width="1000"
                className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black
                 text-white text-xl font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default Theme;